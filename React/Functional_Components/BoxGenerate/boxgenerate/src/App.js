import Form from "./components/Form";
import Box from "./components/Box";
import "./App.css";
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);//why did we use a n empty array instead of empty quotation
  const ViewBox = (color, dimension) => {
    setBoxes([...boxes, { color, dimension }]);//spread operator is used to add as many boxes as you want to the list so spread operator will always represent everything inside the list in addition to the newly added boxes and leave one blank space for the new boxes to be added
  };

  return (
    <div className="App">
      <Form createBox={ViewBox} />
      <Box boxes={boxes} />
    </div>
  );
}

export default App;
//The function createbox is sent as a prop from the parent component App.js to the child component Form.js with empty parameters
//Then the the parameters are filled in the form (child component) submitted and sent back to the parent to fill the function parameters
//Then the parameters are sent again from App.js(parent component) to the other child component which is Box.js using props to render the boxes using the parameters sent from the parent(App.js)


