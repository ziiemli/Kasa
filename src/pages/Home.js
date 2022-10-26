import React from 'react';
import Locations from '../components/Locations';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <h1>HOME</h1>
            <Locations />
        </div>
    );
};

export default Home;