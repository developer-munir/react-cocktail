import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AlcoholicItems from './AlcoholicItems/AlcoholicItems';

const Alcoholic = () => {
    const alcoholic = useLoaderData();
    console.log(alcoholic.drinks);
    return (
      <div className="grid grid-cols-3 gap-8 m-10">
        {alcoholic?.drinks.map((cocktail) => (
          <AlcoholicItems
            cocktail={cocktail}
            key={cocktail?.idDrink}
          ></AlcoholicItems>
        ))}
      </div>
    );
};

export default Alcoholic;