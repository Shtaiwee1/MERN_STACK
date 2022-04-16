import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const Starship = () => {
    const{id} = useParams();
    const[specs, setSpecs] = useState("")
    const[error,setError] = useState("")

    useEffect(() => {
        setError("");
        axios
          .get(`https://swapi.dev/api/starships/${id}`)
          .then((res) => setSpecs(res.data))
          .catch(() => {
            setError("These aren't the droids your looking for!");
          });
      }, [id]);//use the id here so useEffect will fire every time the id is changed






  return (
    <div>
        {error ? () : ()}
    </div>
  )
}

export default Starship