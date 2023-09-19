import React from 'react';
import Welcoming from './pages/Welcoming';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <div>
      <Welcoming/>
      <About/>
    </div>
  );
};

export default App;