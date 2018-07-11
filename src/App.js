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

  performMovieSearch(searchTerm) {
    searchTerm = !searchTerm ? 'Avengers' : searchTerm
    const url = 'https://api.themoviedb.org/3/search/movie?query=marvel&api_key=3f1f4529ce42fc9e738d4f1f7dc87a60&language=en-US&query='+searchTerm;
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

  onSearchHandler(event){
    const searchTerm = event.target.value;
    this.performMovieSearch(searchTerm);

  }
  render() {
    return (
      
      <div className="App">
        <h1 className="title-bar">Movies DB Search</h1>
        <input type="text" placeholder="Search your movie" onChange={this.onSearchHandler.bind(this)}/>
       
        {this.state.movies}
      </div>

      
    );
  }

  
}

export default App;
