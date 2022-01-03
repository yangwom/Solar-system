import React from 'react';
import Header from './components/Header';
import SolarSistem from './components/SolarSystem';
import './App.css';
import Missions from './components/Missions';

class App extends React.Component {
  // pelo amor de Deus namoral erro de ccs por causa de poscionamento que test...
  render() {
    return (
      <>
        <Header />
        <SolarSistem />
        <Missions />
      </>);
  }
}

export default App;
