import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/products/" element={<Main />}/>
            
          <Route path="products/:id" element={<Detail />}/>
            
          <Route path="/products/:id/edit" element={<Update />}/>
            
        </Routes>
      </div>
    </BrowserRouter>
  );
}
    
export default App;