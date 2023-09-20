import React from 'react';
import About from '../../components/About';
import Welcoming from '../../components/Welcoming';
import Choice from '../../components/Choice';
import Travel from '../../components/Travel';

const Accueil = () => {
    return (
        <div className="accueil">
             <Welcoming/>
             <Choice/>
             <Travel/>
        </div>
    );
};

export default Accueil;