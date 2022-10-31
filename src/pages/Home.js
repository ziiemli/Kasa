import React from 'react';
import Footer from '../components/Footer';
import Locations from '../components/Locations';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <header>
                <Navigation />
            </header>
            <h1>Chez vous, partout et ailleurs</h1>
            <Locations />
            <Footer />
        </div>
    );
};

export default Home;