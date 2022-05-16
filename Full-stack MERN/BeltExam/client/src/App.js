import './App.css';
import Main from './views/Main';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NewTask from './components/NewTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tasks/new" element={<NewTask />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;