import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import PersonForm from "../components/PersonForm";



const Main =() =>{
    return (
        <div>
            <h2>Welcome!</h2>
                <PersonForm/>
        </div>
    )
    }

export default Main;