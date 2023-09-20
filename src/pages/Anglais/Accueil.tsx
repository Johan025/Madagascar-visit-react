import React from 'react';
import About from '../../components/About';
import Welcoming from '../../components/Welcoming';
import Choice from '../../components/Choice';

const Accueil = () => {
    return (
        <div className="accueil">
             <Welcoming/>
             <Choice/>
        </div>
    );
};

export default Accueil;