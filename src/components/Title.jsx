import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    console.log(headline);
    return <h2>{ headline }</h2>;
  }
}

export default Title;

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
