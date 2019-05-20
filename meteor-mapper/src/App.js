import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MeteorList from './components/MeteorList';
import MeteorMap from './components/MeteorMap';
import FilterByYear from './components/FilterByYear';
import FilterByClass from './components/FilterByClass';

class App extends Component {

  state = {
    meteors: [],
    filterByYear: 2013,
    uniqueClasses: [],
  }

  year = this.state.filterByYear;

  componentDidMount() {
    const meteorAPI = `https://data.nasa.gov/resource/y77d-th95.json?year=%27${this.state.filterByYear}%27`
    axios.get(meteorAPI)
      .then(({ data }) => {
        this.setState({ meteors: data, uniqueClasses: this.uniqueClasses(data) })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const meteorAPI = `https://data.nasa.gov/resource/y77d-th95.json?year=%27${this.state.filterByYear}%27`
    if (this.state.filterByYear !== prevState.filterByYear) {
      axios.get(meteorAPI)
        .then(({ data }) => {
          this.setState({ meteors: data, uniqueClasses: this.uniqueClasses(data) })
        })

      // this.uniqueClasses(this.state.meteors)

    }
  }

  render() {

    return (
      <div className="App grid-container">
        <div className='grid-header'>
          <h1>Meteor Mapper</h1>
          <FilterByYear handleFilterByYear={this.handleFilterByYear} />
          {/* passing handler function & array as props */}
          <FilterByClass handleFilterByClass={this.handleFilterByClass} uniqueClasses={this.state.uniqueClasses} />
        </div>
        <MeteorList meteors={this.state.meteors} />
        <MeteorMap meteors={this.state.meteors} />
      </div>
    );
  }

  handleFilterByYear = (event) => {
    this.setState({ filterByYear: event.target.value });
  }

  uniqueClasses = (arr) => {
    const uniqueClasses = [...new Set(arr.map(meteor => meteor.recclass))]
    // console.log(newArr.sort(), 'newArr')
    return uniqueClasses;
  }

  handleFilterByClass = (event) => {
    const newClass = event.target.value;
    const meteors = this.state.meteors;
    const filteredMeteors = meteors.filter(meteor => meteor.recclass === newClass)
    // console.log(filteredMeteors, 'filteredMeteors')
    this.setState({ meteors: filteredMeteors })
  }

}

export default App;