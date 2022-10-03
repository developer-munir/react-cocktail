import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AlcoholicItems from './AlcoholicItems/AlcoholicItems';

const Alcoholic = () => {
    const alcoholic = useLoaderData();
    return (
      <div className="grid md:grid-cols-3 gap-4 m-10 ">
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