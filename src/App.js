import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './Movie.js'
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};    
    this.performMovieSearch();
  }

  performMovieSearch() {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3f1f4529ce42fc9e738d4f1f7dc87a60&language=en-US';
    $.ajax({
      url : url,
      success : (searchResults) => {
        const results = searchResults.results;
        let movieRows = [];
        results.forEach((movie) => {
          const movieRow = <Movie movie={movie}/>
          movieRows.push(movieRow);

        });

        this.setState({movies : movieRows});
      },
      error : (xhr, status, err) => {
        console.log("Failed to fetch data");

      }
    })
    console.log("Alrighty")
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
