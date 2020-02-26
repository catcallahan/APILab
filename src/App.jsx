import React, { Component } from "react";
import * as Ghiblilogo from "./Component/ghiblilogo.png";
import "isomorphic-fetch";
import "es6-promise";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      people: [],
      isFilmLoaded: false,
      isPeopleLoaded: false
    };
  }

  loadFilmList = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films =>
        this.setState({
          films: films,
          isFilmLoaded: true,
          isPeopleLoaded: false
        })
      )
      .catch(err => console.log(err));
  };

  loadPeopleList = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(people =>
        this.setState({
          people: people,
          isFilmLoaded: false,
          isPeopleLoaded: true
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.isFilmLoaded) {
      return this.state.films.map(film => {
        return (
          <div key={`film-number ${film.id}`} className="card ml-3">
            <h1 className="card-body">{film.title}</h1>
            <p className="card-body">{film.description}</p>
          </div>
        );
      });
    } else if (this.state.isPeopleLoaded) {
      return this.state.people.map(people => {
        return (
          <div key={`film-number ${people.id}`} className="card ml-3">
            <h1 className="card-body">{people.name}</h1>
            <p>{`Their age is ${people.age} and their gender is ${people.gender}`}</p>
          </div>
        );
      });
    } else {
      return (
        <div className="d-flex container-lg">
          <img src={Ghiblilogo} alt="logo" />
          <div className="d-flex flex-row row-4 justify-content-between align-items-center pl-4 mt-4 ">
            <button className="mt-4" onClick={this.loadFilmList}>
              click me for films
            </button>
            <button className="mt-4" onClick={this.loadPeopleList}>
              click me for people
            </button>
          </div>
        </div>
      );
    }
  }
}

export default App;
