import React from 'react';
import Card from '../../../common/Card';

const GinCocktail = ({cocktail}) => {
    return (
        <div>
            <Card cocktail={cocktail}></Card>
        </div>
    );
};

export default GinCocktail;