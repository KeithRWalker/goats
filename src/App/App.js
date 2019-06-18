import React from 'react';

import myGoats from './goats';
import GoatCorral from '../components/GoatCorral/GoatCorral';

import './App.scss';

class App extends React.Component {
  // This is where we do axis call to get data.  - Anything that modifies states
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats: myGoats }); // goats: goats
  }

  render() {
    const { goats } = this.state;
    return (
      <div className="App">
        <div>Goat Yoga</div>
      <GoatCorral goats={goats}/>
      </div>
    );
  }
}


export default App;
