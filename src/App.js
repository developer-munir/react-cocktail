import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Alcoholic from '../src/components/Alcoholic/Alcoholic';
import NonAlcoholic from '../src/components/NonAlcoholic/NonAlcoholic';
import Gin from '../src/components/Gin/Gin';
import Vodka from '../src/components/Vodka/Vodka';
import OrdinaryDrink from '../src/components/OrdinaryDrink/OrdinaryDrink';
import Home from './components/Home/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
              );
            }, 
            element: <Home></Home>
          },
        {
          path: "/alcoholic",
          loader: async () => {
            return fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
            );
          },
          element: <Alcoholic></Alcoholic>,
        },
        {
          path: "/nonalcoholic",
          element: <NonAlcoholic></NonAlcoholic>,
        },
        {
          path: "/gin",
          element: <Gin></Gin>,
        },
        {
          path: "/vodka",
          element: <Vodka></Vodka>,
        },
        {
          path: "/ordinarydrink",
          element:<OrdinaryDrink></OrdinaryDrink>
        },
      ],
    },
    {
      path: '*',
      element:<p>Page not founded</p>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
