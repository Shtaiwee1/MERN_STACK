import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";


const People = () => { 
  const{id} = useParams();
  const[specs, setSpecs] = useState("")
  const [error, setError] = useState("");
  const[homeworld, setHomeworld] = useState("")
//we want to make the call when the component first renders that is why we are using
useEffect(() => {
  setError("");
  axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((res) => {setSpecs(res.data))
    
  axios
    .get(res.data.homeworld)
    .then((res) => setHomeworld(res.data.homeworld.replace("https://swapi.dev/api", "")))
    .catch(() => {
      setError("These aren't the droids your looking for!");
    });
}, [id]);//use the id here so useEffect will fire every time the id is changed

return (
  <div className="row">
    <div className="col-6 ">
      {error ? (
        <>
          <h5>{error}</h5>
          <img
            src="https://www.denofgeek.com/wp-content/uploads/2019/08/star-wars-obi-wan-kenobi-1-scaled.jpg?resize=768%2C432"
            alt="Obi Wan"/>
        </>
      ) : (
        <>
          <h1>{specs.name}</h1>
          <p>Mass: {specs.mass}</p>
          <p>Height: {specs.height}</p>
          <p>Hair Color: {specs.hair_color}</p>
          <p>Skin Color: {specs.skin_color}</p>
          <p>Homeworld: {homeworld}</p>
        </>
      )}
    </div>
  </div>
);
};

export default People;