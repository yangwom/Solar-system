import React from 'react';
import Header from './components/Header';
import SolarSistem from './components/SolarSystem';
import './App.css';
import Missions from './components/Missions';

class App extends React.Component {
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
