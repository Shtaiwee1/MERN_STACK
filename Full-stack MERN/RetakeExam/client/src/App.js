import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import FoodList from './components/FoodList';
import FoodDetail from './components/FoodDetail';
import FoodUpdate from './components/FoodUpdate';
import Main from './views/Main'
import NewFood from './components/NewFood';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/dashboard" element={<Main />} />
            <Route path="/list" element={<FoodList />} />
            <Route path="/detail/:id" element={<FoodDetail />} />
            <Route path="/edit/:id" element={<FoodUpdate />} />
            <Route path="/form" element={<NewFood />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;