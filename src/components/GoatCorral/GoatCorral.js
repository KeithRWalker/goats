import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

import './GoatCorral.scss';

import Goat from '../Goat/Goat';

class GoatCorrall extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  };

  render() {
    // const makeGoats = this.props.makeGoats;
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
      <Goat key={goat.id} goat={goat} />
    ));
    return (
      <div className="GoatCorral d-flex flex-wrap">
      {/* <button>GOAT CORRAL</button>
      {console.error(this.props.goats)} */}
      { makeGoats }
      </div>
    );
  }
}

export default GoatCorrall;
