import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coctail from './Cocktail/Coctail';

const Home = () => {
    const cocktails = useLoaderData();
    console.log(cocktails?.drinks);
    return (
      <div className="grid grid-cols-3 gap-8 m-10">
        {cocktails?.drinks.map((cocktail) => (
          <Coctail key={cocktail?.idDrink} cocktail={cocktail}></Coctail>
        ))}
      </div>
    );
};

export default Home;