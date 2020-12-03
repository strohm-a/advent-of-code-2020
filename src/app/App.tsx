import React, { Component, ReactElement } from 'react';
import { AdventOfCodeDay1 } from './AdventOfCodeDay1';
import '../scss/App.scss';
import { AdventOfCodeDay2 } from './AdventOfCodeDay2';

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

    let day2Solution1: ReactElement = (
      <div className="solution">
        <p>No invalid passwords found</p>
      </div>
    );

    let adventDay2: AdventOfCodeDay2 = new AdventOfCodeDay2();
    let validPasswords: string[] = adventDay2.solvePart2();
    if (validPasswords.length > 0) {
      day2Solution1 = (
        <div className="solution">
          <p>Number of valid passwords: {validPasswords.length}</p>
{/*           <ul className="list-group">
            {validPasswords.map((listitem) => <li className="list-group-item">{listitem}</li>)}
          </ul>
 */}        </div>
      );
    }

    return (
      <div className="app">
        <div className="header">Advent of Code 2020</div>

        <div className="section">
          <div className="section-header">Day 1 - Problem 1</div>
          {day1Solution1}
        </div>

        <div className="section">
          <div className="section-header">Day 1 - Problem 2</div>
          {day1Solution2}
        </div>

        <div className="section">
          <div className="section-header">Day 2 - Problem 1</div>
          {day2Solution1}
        </div>
      </div>
    );
  }
}

export default App;
