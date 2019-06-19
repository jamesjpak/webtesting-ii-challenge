import React from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0,
  }

  // resetState = () => {

  // }

  addStrike = () => {
   if (this.state.strikes + 1 > 2) {
      this.setState({ strikes: 0 })
    } else {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  }

  addBall = () => {
    console.log(this.state.balls)
    
    if (this.state.balls + 1 > 3) {
      this.setState({ balls: 0 })
    } else {
      this.setState({ balls: this.state.balls + 1 })
    } 
  }

  addFoul = () => {
    this.setState({ fouls: this.state.fouls + 1 });

    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 })
    }
  }

  addHit = () => {
    this.setState({ hits: this.state.hits + 1 });
    this.setState({ strikes: 0, balls: 0 })
  }

  render() {
    console.log('state in app.js', this.state)
    return (
      <div className="App">
        <Display stats={this.state} />

        <Dashboard
          addStrike={this.addStrike}
          addBall={this.addBall}
          addFoul={this.addFoul}
          addHit={this.addHit}
        />

      </div>
    );
  }

}

export default App;
