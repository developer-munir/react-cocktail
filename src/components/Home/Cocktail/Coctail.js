import React from 'react';
import Card from '../../../common/Card';

const Coctail = ({ cocktail }) => {
    // console.log(cocktail)
    return (
        <div>
            <Card cocktail={cocktail}></Card>
        </div>
    );
};

export default Coctail;