import React from 'react';
import './App.css';
import SiteContainer from './components/SiteContainer';
import MainRoute from './config/routes';
function App() {
  
  return (
    <div className="App">
      <SiteContainer>
        <MainRoute />
      </SiteContainer>
    </div>
  );
}

export default App;
