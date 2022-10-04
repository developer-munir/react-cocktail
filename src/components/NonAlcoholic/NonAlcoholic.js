import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NonAlcoholicCocktail from './NonAlcoholicCocktail/NonAlcoholicCocktail';

const NonAlcoholic = () => {
    const nonAlcoholic = useLoaderData(); 
    console.log(nonAlcoholic.drinks);
    return (
      <div className="grid md:grid-cols-3 gap-4 m-10">
        {nonAlcoholic?.drinks.map((cocktail) => (
          <NonAlcoholicCocktail
            cocktail={cocktail}
            key={cocktail?.idDrink}
          ></NonAlcoholicCocktail>
        ))}
      </div>
    );
};

export default NonAlcoholic;