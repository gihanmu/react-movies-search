import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './Movie.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    const movies = [
      {
        'id' : 0,
        'title' : 'Avengers, infinity war',
        'overview' : 'overview 1',
        'img' : 'http://www.omdbapi.com/src/poster.jpg'
      },
      {
        'id' : 1,
        'title' : 'Jurasic World',
        'overview' : 'overview 2',
        'img' : 'http://www.omdbapi.com/src/poster.jpg'
      }
    ];

    let movieRows = [];
    movies.forEach(movie => {
        // const movieRow = <div key={movie.id}>
        //   <img src={movie.img}/>
        //   <h3 >{movie.title}</h3>
        //   <small>{movie.overview}</small>
        // </div>
        const movieRow = <Movie/>
        movieRows.push(movieRow);
    });

    this.state = {
      movies : movieRows
    }

  }
  render() {
    return (
      
      <div className="App">
        <h1 className="title-bar">Movies DB Search</h1>
        <Movie/>
        <input type="text" placeholder="Search your movie here"/>
        {this.state.movies}
      </div>

      
    );
  }
}

export default App;
