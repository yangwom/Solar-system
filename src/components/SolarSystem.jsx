import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

class SolarSistem extends Component {
  render() {
    const naTela = Planets.map((renderizar) => (<PlanetCard
      planetName={ renderizar.name }
      planetImage={ renderizar.image }
      key={ renderizar.name }
    />));
    return (
      <section className="containers">
        <div className="center">
          <div className="stylePlanetas" data-testid="solar-system">
            <Title headline="Planetas" />
          </div>
        </div>
        <ul className="hover-card">{naTela}</ul>
      </section>
    );
  }
}

export default SolarSistem;
