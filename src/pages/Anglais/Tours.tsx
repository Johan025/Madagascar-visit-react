import React from 'react';
import Navbar_tours from '../../components/Navbar_tours';
import Tours_content from '../../components/Tours_content';

const Tours = () => {
    
    return (
        <div className='tours'>
              <Navbar_tours/>
              <Tours_content/>
        </div>
    );
};

export default Tours;