import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Alcoholic from '../src/components/Alcoholic/Alcoholic';
import NonAlcoholic from '../src/components/NonAlcoholic/NonAlcoholic';
import Gin from '../src/components/Gin/Gin';
import Vodka from '../src/components/Vodka/Vodka';
import OrdinaryDrink from '../src/components/OrdinaryDrink/OrdinaryDrink';
import Home from './components/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, []);
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
          loader: async () => {
            return fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
            );
          },
          element: <NonAlcoholic></NonAlcoholic>,
        },
        {
          path: "/gin",
          loader: async () => {
            return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
          },
          element: <Gin></Gin>,
        },
        {
          path: "/vodka",
          loader: async () => {
            return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');
          },
          element: <Vodka></Vodka>,
        },
        {
          path: "/ordinarydrink",
          loader: async () => {
            return fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
            );
          },
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
