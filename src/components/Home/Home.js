import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coctail from './Cocktail/Coctail';

const Home = () => {
    const cocktails = useLoaderData();
    return (
      <div className="grid md:grid-cols-3 gap-4 m-10">
        {cocktails?.drinks.map((cocktail) => (
          <Coctail key={cocktail?.idDrink} cocktail={cocktail}></Coctail>
        ))}
      </div>
    );
};

export default Home;