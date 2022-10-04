import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GinCocktail from './GinCocktail/GinCocktail';

const Gin = () => {
    const gin = useLoaderData();
    return (
      <div className="grid md:grid-cols-3 gap-4 m-10">
        {gin?.drinks.map((cocktail) => (
          <GinCocktail key={cocktail.idDrink} cocktail={cocktail}></GinCocktail>
        ))}
      </div>
    );
};

export default Gin;