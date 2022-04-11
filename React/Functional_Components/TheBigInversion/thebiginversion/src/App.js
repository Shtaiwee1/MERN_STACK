import PersonCard from "./PersonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Mohammad" lastName="Omair" age={25} hairColor="Black"/>
      <PersonCard firstName="Muusab" lastName="Taffal" age={23} hairColor="Brown"/>
      <PersonCard firstName="Mahmoud" lastName="Issa" age={33} hairColor="Black"/>
      <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;