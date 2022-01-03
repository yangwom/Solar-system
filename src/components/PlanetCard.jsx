import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <li data-testid="planet-card">
        <h5 data-testid="planet-name">{planetName}</h5>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </li>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropsTypes.string.isRequired,
  planetImage: PropsTypes.string.isRequired,
};

export default PlanetCard;
