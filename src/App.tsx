import React from 'react';
import Accueil from './pages/Anglais/Accueil';
import Tours from './pages/Anglais/Tours';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import South_welcome from './pages/Anglais/South_welcome';

const App: React.FC = () => {
  return (
    <div>
       
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
           <Route path="/tours" element={<Tours/>} />
           <Route path="/tours/south-anglais" element={<South_welcome/>} />
           <Route path="/tours/north" element={<South_welcome/>} />
          {/*<Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;