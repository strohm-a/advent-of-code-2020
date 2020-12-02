import React, { Component, ReactElement } from 'react';
import { AdventOfCodeDay1 } from './AdventOfCodeDay1';
import '../scss/App.scss';

class App extends Component {
  render() {
    let adventDay1: AdventOfCodeDay1 = new AdventOfCodeDay1();
    let numbers: number[] = adventDay1.solvePart1();

    let adventDay1Element: ReactElement = <div>No match found</div>;
    if (null != numbers) {
      adventDay1Element = (
        <div className="solution">
          <p>
            Numbers are: {numbers[0]} + {numbers[1]} = 2020
          </p>
          <p>
            Product = {numbers[0]*numbers[1]}
          </p>
        </div>
      );
    }

    return (
      <div className="app">
        <div className="header">Advent of Code 2020</div>
        <div className="section">
          <div className="section-header">Day 1</div>
          <p> {adventDay1Element}</p>
        </div>
      </div>
    );
  }
}

export default App;
