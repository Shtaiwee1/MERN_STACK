import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Status from "../components/Status";
import Homepage from "../components/Homepage";
import PlayerForm from "../components/PlayerForm";
import Table from "../components/Table";


const Main =() =>{
    return (
            <BrowserRouter>
            <Homepage/>
                <Routes>
                    <Route path="/players/list"   element={<Table/>}/>
                    <Route path= "/players/addPlayer"  element={<PlayerForm/>}     />
                    <Route path= "/status/game/:id"  element={<Status/>}    />
                </Routes>
            </BrowserRouter>
    )
    }

export default Main;
