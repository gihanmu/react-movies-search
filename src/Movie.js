import React from 'react';

class Movie extends React.Component {
    render(){
        return (
            <div className="movie">
                <h3>{this.props.movie.title}</h3>
                <img src={this.props.movie.img}/>
                <p>{this.props.movie.overview}</p>
            </div>            
            
        )
        
    }
}

export default Movie;