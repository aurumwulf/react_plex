import React from 'react';
import axios from 'axios';

class Movie extends React.Component {
  state = { movie: [] };

  componentDidMount() {
    axios
      .get(`/api/movies/${this.props.match.params.id}`)
      .then(res => this.setState({ movie: res.data }));
  }

  render() {
    let { movie: { title, director, producer, genre } } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{director}</h3>
        <h3>{producer}</h3>
        <h3>{genre}</h3>
      </div>
    );
  }
}

export default Movie;
