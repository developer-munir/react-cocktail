import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrdinaryCoctail from './OrdinaryCoctail/OrdinaryCoctail';

const OrdinaryDrink = () => {
    const ordinaryCoctail = useLoaderData();
    return (
      <div className="grid md:grid-cols-3 gap-4 m-10">
        {ordinaryCoctail?.drinks.map((cocktail) => (
          <OrdinaryCoctail
            key={cocktail?.idDrink}
            cocktail={cocktail}
          ></OrdinaryCoctail>
        ))}
      </div>
    );
};

export default OrdinaryDrink;