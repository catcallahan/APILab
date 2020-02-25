import React, { Component } from "react";

import "isomorphic-fetch";
import "es6-promise";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      people: []
    };
  }

  loadFilmList= (e) => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films: films }))
      .then(newlist => this.state.films.map(film => {
      return (<h1>{film.title}</h1>)
        }))
  }

  render() {
    return(<button onClick = {this.loadFilmList}>click me</button>)
        
    
  }
}

export default App;
