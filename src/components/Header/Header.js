import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-evenly align-middle w-2/3 block m-auto font-mono font-semibold p-5 ">
            <NavLink to='/'>Home</NavLink>
        <NavLink to="/alcoholic">Alcoholic</NavLink>
        <NavLink to="/nonalcoholic">NonAlcoholic</NavLink>
        <NavLink to="/gin">Gin</NavLink>
        <NavLink to="/vodka">Vodka</NavLink>
        <NavLink to="/ordinarydrink">Ordinary</NavLink>
      </div>
    );
};

export default Header;