import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const Starship = () => {
    const{id} = useParams();
    const[specs, setSpecs] = useState("")
    const[error,setError] = useState("")

    axios
    .get
    .then
    .catch






  return (
    <div>Starship</div>
  )
}

export default Starship