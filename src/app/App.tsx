import React, { Component, ReactElement } from 'react';
import { AdventOfCodeDay1 } from './AdventOfCodeDay1';
import '../scss/App.scss';

class App extends Component {
  render() {
    let adventDay1: AdventOfCodeDay1 = new AdventOfCodeDay1();
    let numbers: number[] = [];

    let day1Solution1: ReactElement = <div>No match found</div>;
    numbers = adventDay1.solvePart1();
    if (numbers.length > 0) {
      day1Solution1 = (
        <div className="solution">
          <p>
            Numbers are: {numbers[0]} + {numbers[1]} = {numbers[0] + numbers[1]}
          </p>
          <p>Product = {numbers[0] * numbers[1]}</p>
        </div>
      );
    }

    let day1Solution2: ReactElement = <div>No match found</div>;
    numbers = adventDay1.solvePart2();
    if (numbers.length > 0) {
      day1Solution2 = (
        <div className="solution">
          <p>
            Numbers are: {numbers[0]} + {numbers[1]} + {numbers[2]} = {numbers[0] + numbers[1] + numbers[2]}
          </p>
          <p>Product = {numbers[0] * numbers[1] * numbers[2]}</p>
        </div>
      );
    }

    return (
      <div className="app">
        <div className="header">Advent of Code 2020</div>

        <div className="section">
          <div className="section-header">Day 1 - Problem 1</div>
          <p> {day1Solution1}</p>
        </div>

        <div className="section">
          <div className="section-header">Day 1 - Problem 2</div>
          <p> {day1Solution2}</p>
        </div>
      </div>
    );
  }
}

export default App;
