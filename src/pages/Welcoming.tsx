import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

const Welcoming: React.FC = () => {
    return (
        <div className='Welcoming'>
                <Navbar/>
                <Carousel/>
        </div>
    );
};

export default Welcoming;