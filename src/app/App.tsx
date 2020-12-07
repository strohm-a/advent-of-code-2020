import React, { Component } from 'react';
import { Day01 } from './AdventOfCodeDay01';
import '../scss/App.scss';
import { Day02 } from './AdventOfCodeDay02';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Day03 } from './AdventOfCodeDay03';
import { Day04 } from './AdventOfCodeDay04';
import { Day05 } from './AdventOfCodeDay05';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="header">
            <h1>Advent of Code 2020</h1>
            <div>Solutions:</div>
            <div className="solutions-grid">
              <div><Link to="/day01">Day 1</Link></div>
              <div><Link to="/day02">Day 2</Link></div>
              <div><Link to="/day03">
                Day 3
              </Link></div>
              <div><Link to="/day04">
                Day 4
              </Link></div>
              <div><Link to="/day05">
                Day 5
              </Link></div>
              <div>Day 6</div>
              <div>Day 7</div>
              <div>Day 8</div>
              <div>Day 9</div>
              <div>Day 10</div>
              <div>Day 11</div>
              <div>Day 12</div>
              <div>Day 13</div>
              <div>Day 14</div>
              <div>Day 15</div>
              <div>Day 16</div>
              <div>Day 17</div>
              <div>Day 18</div>
              <div>Day 19</div>
              <div>Day 20</div>
              <div>Day 21</div>
              <div>Day 22</div>
              <div>Day 23</div>
              <div>Day 24</div>
              <div>Day 25</div>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Redirect to="/day01"/>
            </Route>
            <Route path="/day01">
              <Day01 />
            </Route>
            <Route path="/day02">
              <Day02 />
            </Route>
            <Route path="/day03">
              <Day03 />
            </Route>
            <Route path="/day04">
              <Day04 />
            </Route>
            <Route path="/day05">
              <Day05 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
