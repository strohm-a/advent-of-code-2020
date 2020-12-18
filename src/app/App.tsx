import React, { Component } from 'react';
import { Day01 } from './AdventOfCodeDay01';
import '../scss/App.scss';
import { Day02 } from './AdventOfCodeDay02';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Day03 } from './AdventOfCodeDay03';
import { Day04 } from './AdventOfCodeDay04';
import { Day05 } from './AdventOfCodeDay05';
import { Day06 } from './AdventOfCodeDay06';
import { Day07 } from './AdventOfCodeDay07';
import { Day08 } from './AdventOfCodeDay08';
import { Day09 } from './AdventOfCodeDay09';
import { Day10 } from './AdventOfCodeDay10';
import { Day11 } from './AdventOfCodeDay11';
import { Day12 } from './AdventOfCodeDay12';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="header">
            <h1>Advent of Code 2020</h1>
            <div>Solutions:</div>
            <div className="solutions-grid">
              <div><Link to="/day01.html">Day 1</Link></div>
              <div><Link to="/day02.html">Day 2</Link></div>
              <div><Link to="/day03.html">
                Day 3
              </Link></div>
              <div><Link to="/day04.html">
                Day 4
              </Link></div>
              <div><Link to="/day05.html">
                Day 5
              </Link></div>
              <div><Link to="/day06.html">
                Day 6
              </Link></div>
              <div><Link to="/day07.html">
                Day 7
              </Link></div>
              <div><Link to="/day08.html">
                Day 8
              </Link></div>
              <div><Link to="/day09.html">
                Day 9
              </Link></div>
              <div><Link to="/day10.html">
                Day 10
              </Link></div>
              <div><Link to="/day11.html">
                Day 11
              </Link></div>
              <div><Link to="/day12.html">
                Day 12
              </Link></div>
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
              <Redirect to="/day01.html"/>
            </Route>
            <Route path="/day01.html">
              <Day01 />
            </Route>
            <Route path="/day02.html">
              <Day02 />
            </Route>
            <Route path="/day03.html">
              <Day03 />
            </Route>
            <Route path="/day04.html">
              <Day04 />
            </Route>
            <Route path="/day05.html">
              <Day05 />
            </Route>
            <Route path="/day06.html">
              <Day06 />
            </Route>
            <Route path="/day07.html">
              <Day07 />
            </Route>
            <Route path="/day08.html">
              <Day08 />
            </Route>
            <Route path="/day09.html">
              <Day09 />
            </Route>
            <Route path="/day10.html">
              <Day10 />
            </Route>
            <Route path="/day11.html">
              <Day11 />
            </Route>
            <Route path="/day12.html">
              <Day12 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
