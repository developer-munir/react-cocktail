import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='overflow-hidden'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;