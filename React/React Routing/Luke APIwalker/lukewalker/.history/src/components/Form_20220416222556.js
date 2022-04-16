import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

/*To read more about the initial value of useState got to:https://maxrozen.com/how-to-use-react-usestate-hook-initial-value*/
const Form = () => {
  const[id , setId] = useState("")
  const[category, setCategory] = useState("People")
//useState here is set initially to "People" to prevent the delay in updating state rendering
//If you navigate to the form directly put an id and click search you will get an error becuase the state value wasn't updated in the select to People
//So you have to choose planets and then rechoose people inorder for it to work but that can be fixed through settting the initial valye for "People" instead of null
  const navigate = useNavigate();
//history will only work with reat v5 if you are using react v6 you have to use "navigate instead" see this thread for more info:
//https://reactrouter.com/docs/en/v6/upgrading/v5#upgrading-from-v5
  const useSubmitHandler =(e) =>{
    e.preventDefault();
    navigate(`/${category}/${id}`)
  }


  return (
    <div>
      <form onSubmit={useSubmitHandler}>
        <label>Search for:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="People">People</option>
          <option value="Planets">Planets</option>
        </select>
        <label>ID:</label>
        <input value={id} type="number" onChange={(e) => setId(e.target.value)} />
        <button type='sumbit'>Search</button>
      </form>
    </div>
  )
}

export default Form