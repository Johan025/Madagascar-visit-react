import React from 'react';
import Navbar_tours from '../../components/Navbar_tours';
import Classical_south_content from '../../components/Classical_south/Classical_south_content';



const Classical_south = () => {
    return (
        <div className='classical_south'>
            <Navbar_tours />
            <Classical_south_content />
        </div>
    );
};

export default Classical_south;