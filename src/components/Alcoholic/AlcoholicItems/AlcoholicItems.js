import React from 'react';
import Card from '../../../common/Card';

const AlcoholicItems = ({ cocktail }) => {
  return (
    <div>
      <Card cocktail={cocktail}></Card>
    </div>
  );
};

export default AlcoholicItems;