import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import People from "./components/People";
import Planet from "./components/Planet";

function App() {
  return (
    /*render the form in the same page as the results*/
    <BrowserRouter>
      <div className="container my-5">
        <Form /> 
        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;