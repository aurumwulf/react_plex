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
      <div className="ui center aligned container">
        <h1>{title}</h1>
        <div className="ui divider" />
        <div className="ui left aligned container">
          <h4>Director - {director}</h4>
          <h4>Producer - {producer}</h4>
          <h4>Genre - {genre}</h4>
        </div>
      </div>
    );
  }
}

export default Movie;
