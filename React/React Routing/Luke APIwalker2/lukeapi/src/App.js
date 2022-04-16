import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import People from "./components/Person";
import Planet from "./components/Planet";

function App() {
  return (
    <BrowserRouter>
      
        <Form />
        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;