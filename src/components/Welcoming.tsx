import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import About from './About';

const Welcoming: React.FC = () => {
    return (
        <div className='Welcoming'>
                <Navbar/>
                <Carousel/>
                <About/>
        </div>
    );
};

export default Welcoming;