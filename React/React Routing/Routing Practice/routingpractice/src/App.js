import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";

function App() {
  return (
    /*Using Routes instead of Switch in react-router v6*/
    /*All component children of <Routes> must be a <Route> or <React.Fragment>*/
     
    <BrowserRouter> 
      <Routes>
    { /* this should display the homepage with a welcome message */} 
        <Route path="/" element={<Home/>}   />
          
          {/* /*this should display anything sent through par which serves as a variable that we can access in t he component*/}
        <Route path="/:par" element={<Display/>} />
          
          
        <Route path="/:par/:textColor/:bgColor" element={<Display/>}/>
          
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* See this thread for more info:https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom*/