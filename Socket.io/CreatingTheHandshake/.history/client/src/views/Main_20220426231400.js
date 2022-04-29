import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "../components/Home";
import NewAuthor from "../components/NewAuthor";
import EditAuthor from "../components/Update";


const Main =() =>{
    return (
        <div>
            <h2>Favourite authors</h2>
            <BrowserRouter>
                <Routes>
                    <Route path="/"   element={<Home/>}/>
                    <Route path= "/new"  element={<NewAuthor/>}     />
                    <Route path= "/edit/:id"  element={<EditAuthor/>}    />
                </Routes>
            </BrowserRouter>
           
        </div>
    )
    }

export default Main;