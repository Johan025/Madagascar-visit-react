import React from 'react';
import Accueil from './pages/Anglais/Accueil';
import Tours from './pages/Anglais/Tours';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
       
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
           <Route path="/tours" element={<Tours/>} />
          {/*<Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;