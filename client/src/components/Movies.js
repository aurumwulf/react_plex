import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Movies extends React.Component {
  state = { movies: [] };

  componentDidMount() {
    axios.get('/api/movies').then(res => this.setState({ movies: res.data }));
  }

  render() {
    let { movies } = this.state;
    return (
      <div>
        <h1>Movies</h1>
        <div role="list" className="ui list">
          {movies.map(m => (
            <div key={m.id} role="listitem" className="item">
              <i aria-hidden="true" className="marker icon" />
              <div className="content">
                <Link className="header" to={`/movies/${m.id}`}>
                  {m.title}
                </Link>
                <div className="description">Directed by {m.director}</div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
