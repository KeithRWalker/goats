import React from 'react';

import goats from './goats';

import './App.scss';

class App extends React.Component {
  // This is where we do axis call to get data.  - Anything that modifies states
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats }); // goats: goats
  }

  render() {
    return (
      <div className="App">
        <div>Goat Yoga</div>
      {/* <GoatCorral goats={goats}/> */}
      </div>
    );
  }
}


export default App;
