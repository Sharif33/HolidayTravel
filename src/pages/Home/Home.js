import React from 'react';
import Resorts from '../Resorts/Resorts';
import Banner from './Banner';
import Banner1 from './Banner1';


const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <Banner></Banner>
            <Resorts></Resorts>
        </div>
    );
};

export default Home;