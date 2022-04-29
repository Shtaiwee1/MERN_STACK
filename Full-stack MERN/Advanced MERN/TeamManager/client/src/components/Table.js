import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import DeleteButton from "./DeleteButton";
const ContentTable = () => {
  const [players, setPlayers] = useState([]);

  const removeFromDom = (id) => {
    setPlayers(players.filter((player) => player._id !== id));//set players to all players (show all players) who don't have this id ;remove this player with this id from document object model
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")//get all players
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);//only run the function given to useEffect after the initial render
  return (
    <>
      <Box style={{ textAlign: "left" }} mb={3}>
        <span style={{ fontWeight: "bold" }}>List</span> |{" "}
        <Link to="/players/addplayer">Add Player</Link>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player Name</TableCell>
              <TableCell>Preferred Position</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {player.name}
                </TableCell>
                <TableCell>{player.position}</TableCell>
                <TableCell>
                  <DeleteButton
                    id={player._id}
                    name={player.name}
                    successCallBack={removeFromDom}//removeFromDOM function is passed as a prop inside successCallBack from parent(Table component) to child component(Delete button) so successCallBack is the name of the prop
                    //removeFromDOM takes id as a parameter so whenever successCallBack is fired with an id that id is passed through the prop to the removeFromDOM function to execute and delete the component from the document object model
                    //so when successCallBack(id) is fired in the child component, id will be passed from child to parent and fire the removeFromDOM function in the parent component, therefore successCallBack(id) = removeFromDOM(id) after passing information between components.
                    //resources:https://reactjs.org/docs/faq-functions.html
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContentTable;