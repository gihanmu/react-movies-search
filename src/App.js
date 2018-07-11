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
       console.log(movie.title)     
        const movieRow = <Movie movie={movie}/>
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
        <input type="text" placeholder="Search your movie"/>
       
        {this.state.movies}
      </div>

      
    );
  }
}

export default App;
