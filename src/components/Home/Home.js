import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coctail from './Cocktail/Coctail';

const Home = () => {
    const cocktails = useLoaderData();
    console.log(cocktails?.drinks);
    return (
      <div>
        {cocktails?.drinks.map((cocktail) => (
          <Coctail key={cocktail?.idDrink} cocktail={cocktail}></Coctail>
        ))}
        <p>Home</p>
      </div>
    );
};

export default Home;