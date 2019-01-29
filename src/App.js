import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation modules={this.props.modules} tags={this.props.tags} />
        </header>
      </div>
    );
  }
}

export default App;
