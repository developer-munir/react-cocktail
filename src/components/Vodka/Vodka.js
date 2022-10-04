import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VodkaCoctail from './VodkaCocktail/VodkaCoctail';

const Vodka = () => {
    const vodkaCocktail = useLoaderData();
    return (
      <div className="grid md:grid-cols-3 gap-4 m-10">
        {vodkaCocktail?.drinks.map((cocktail) => (
          <VodkaCoctail
            key={cocktail?.idDrink}
            cocktail={cocktail}
          ></VodkaCoctail>
        ))}
      </div>
    );
};

export default Vodka;