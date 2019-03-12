import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MeteorList from './components/MeteorList';

const meteorAPI = 'https://data.nasa.gov/resource/y77d-th95.json?$where=year%20%3E%20%222000-01-01T00:00:00.000%22'


class App extends Component {

  state = {
    meteors: []
  }

  componentDidMount() {
    axios.get(meteorAPI)
      .then(({ data }) => {
        this.setState({meteors: data})
      })
  }

  render() {
    console.log(this.state.meteors)
    return (
      <div className="App">
        <h1>Meteor Mapper</h1>
        <MeteorList meteors={this.state.meteors}/>
      </div>
    );
  }

}

export default App;
