import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MeteorList from './components/MeteorList';
import MeteorMap from './components/MeteorMap';
import FilterByYear from './components/FilterByYear';


class App extends Component {

  state = {
    meteors: [],
    filterByYear: 2013,
  }

  year = this.state.filterByYear;

  componentDidMount() {
    const meteorAPI = `https://data.nasa.gov/resource/y77d-th95.json?year=%27${this.state.filterByYear}%27`
    axios.get(meteorAPI)
      .then(({ data }) => {
        this.setState({ meteors: data })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const meteorAPI = `https://data.nasa.gov/resource/y77d-th95.json?year=%27${this.state.filterByYear}%27`
    if (this.state.filterByYear !== prevState.filterByYear) {
      axios.get(meteorAPI)
        .then(({ data }) => {
          this.setState({ meteors: data })
        })
    }
  }

  render() {

    console.log(this.state.filterByYear)
    return (

      <div className="App grid-container">
        <div className='grid-header'>
          <h1>Meteor Mapper</h1>
          <FilterByYear handleSelect={this.handleSelect} />
        </div>
        <MeteorList meteors={this.state.meteors} />
        <MeteorMap meteors={this.state.meteors} />
      </div>
    );
  }

  handleSelect = (event) => {
    // console.log(event.target.value)
    this.setState({ filterByYear: event.target.value });
  }

}

export default App;
