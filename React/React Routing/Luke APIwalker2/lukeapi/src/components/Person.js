import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";




const Person = () => { 
  const{id} = useParams();
  const[specs, setSpecs] = useState("")
  const [homeworld, setHomeworld] = useState("");
  const [planetUrl, setPlanetUrl] = useState("");
  const [error, setError] = useState("");
//we want to make the call when the component first renders that is why we are using
useEffect(() => {
  setError("");

  //multiple requests axios method on this resource:https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
  axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((res) => {
      axios
        .get(res.data.homeworld)
        .then((res) => setHomeworld(res.data.name));
      setSpecs(res.data);
      setPlanetUrl(res.data.homeworld.replace("https://swapi.dev/api", ""));
    })

    .catch(() => {
      setError("These aren't the droids your looking for!");
    });
}, [id]);

return (
  <div className="row">
    <div className="col-6 offset-3">
      {error ? (
        <>
          <h5 style={{ color: "red" }}>{error}</h5>
          <img
            src="https://www.denofgeek.com/wp-content/uploads/2019/08/star-wars-obi-wan-kenobi-1-scaled.jpg?resize=768%2C432"
            alt="Obi Wan"
          />
        </>
      ) : (
        <>
          <h4>{specs.name}</h4>
          <p>Mass: {specs.mass}</p>
          <p>Height: {specs.height}</p>
          <p>Hair Color: {specs.hair_color}</p>
          <p>Skin Color: {specs.skin_color}</p>
          <p>Homeworld: {homeworld}</p>
          <Link to={planetUrl}>Go to {homeworld}</Link>
        </>
      )}
    </div>
  </div>
);
};

export default Person;