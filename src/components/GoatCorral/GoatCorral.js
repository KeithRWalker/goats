import React from 'react';

class GoatCorrall extends React.Component {
  render() {
    // const makeGoats = this.props.makeGoats;
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
      <h2>{goat.name}</h2>
      // <Goat goat={goat} />
    ));
    return (
      <div>
      {/* <button>GOAT CORRAL</button>
      {console.error(this.props.goats)} */}
      { makeGoats }
      </div>
    );
  }
}

export default GoatCorrall;
