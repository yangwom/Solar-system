import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsData from '../data/missions';

class Missions extends Component {
  render() {
    const impossivel = MissionsData.map((nameMission) => (
      <MissionCard
        key={ nameMission.name }
        name={ nameMission.name }
        year={ nameMission.year }
        country={ nameMission.country }
        destination={ nameMission.destination }
      />
    ));
    return (
      <section className="center">
        <div className="stylePlanetas" data-testid="missions">
          <Title headline="Missões" />
        </div>
        <ul>{impossivel}</ul>

      </section>
    );
  }
}

export default Missions;
