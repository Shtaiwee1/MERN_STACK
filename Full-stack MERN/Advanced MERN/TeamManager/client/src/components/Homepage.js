import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
const Homepage = (props) => {
  const { pathname } = useLocation();//use location is used To get the current location or URL resource:https://surajsharma.net/blog/current-url-in-react
  //returns the location object that represents the current URL. The location object contains the pathname as a key and the url as a value you can use location.pathname also:https://v5.reactrouter.com/web/api/location

  return (
    <Grid container mb={5} style={{ justifyContent: "center" }}>
      <Grid
        container
        item
        style={{ justifyContent: "center", backgroundColor: "#eeeeee" }}
        mt={10}
        xs={8}
        p={3}
      >
        <Grid container item mb={3} xs={10}>
          <Grid item style={{ textAlign: "left" }} xs={10}>
            {pathname.includes("/players") ? (
              <>
                <span style={{ fontWeight: "bold" }}>Manage Players</span> |{" "}
                <Link to="/status/game/1">Manage Player Status</Link>
              </>
            ) : (  //here this ternary operator is used to control the navigation based on the current page url so pathname is used. so in different pages the same link will navigate to different routes
              <>
                <Link to="/players/list">Manage Players</Link> |{" "}
                <span style={{ fontWeight: "bold" }}>Manage Player Status</span>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={10} style={{ backgroundColor: "white" }} p={4}>
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;