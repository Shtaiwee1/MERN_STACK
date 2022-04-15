import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  const tabs = [
    { name: "Tab1", text: "Tab 1 content is showing here" },
    { name: "Tab2", text: "Hello I'm Tab 2" },
    { name: "Tab3", text: "What's up I'm Tab 3" },
  ];
  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;