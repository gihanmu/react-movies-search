import React from 'react';

class Movie extends React.Component {
    render(){
        return (
            <div className="movie">
                <h3>{this.props.movie.title}</h3>
                <img src={'http://image.tmdb.org/t/p/w185/'+this.props.movie.poster_path}/>
                <p>{this.props.movie.overview && this.props.movie.overview.length > 25 ? this.props.movie.overview.trim(0, 25) + "...." : this.props.movie.overview}</p>
            </div>            
            
        )
        
    }
}

export default Movie;