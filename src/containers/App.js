import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      filteredRobots: [],
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users, filteredRobots: users });
      });
  }

  onSearchChange(e) {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    this.setState({ filteredRobots: filteredRobots });
  }
  render() {
    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading...</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.state.filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
