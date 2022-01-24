import './styles/App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { addSauces, addIngredients, addPizzas } from '../redux/actions'
import NavBar from './NavBar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Order from './pages/Order';
import PizzaList from './pages/PizzaList';
import SauceList from './pages/SauceList';

export const API = "http://192.168.1.11:3333/api/"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${API}sauce`)
      .then((response) => response.json())
      .then((data) => dispatch(addSauces(data)))
      .catch((error) => {
        // console.log(error)
      });
    fetch(`${API}ingredient`)
      .then((response) => response.json())
      .then((data) => dispatch(addIngredients(data)))
      .catch((error) => {
        // console.log(error)
      });
    fetch(`${API}pizza`)
      .then((response) => response.json())
      .then((data) => dispatch(addPizzas(data)))
      .catch((error) => {
        // console.log(error)
      });
  })

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}>
        </Route>

        <Route
          path="/pizzas"
          element={<PizzaList />}>
        </Route>

        <Route
          path="/sauces"
          element={<SauceList />}>
        </Route>

        <Route
          path="/order"
          element={<Order />}>
        </Route>

        <Route
          path="*"
          element={<NotFound />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
