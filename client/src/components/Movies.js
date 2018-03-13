import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

class Movies extends React.Component {
  state = { movies: [], showForm: false };

  componentDidMount() {
    axios.get('/api/movies').then(res => this.setState({ movies: res.data }));
  }

  show() {
    let { movies } = this.state;
    return (
      <div>
        <div role="list" className="ui list">
          {movies.map(m => (
            <div key={m.id} role="listitem" className="item">
              <i aria-hidden="true" className="tv icon" />
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

  form() {
    return <Form submit={this.submit} />;
  }

  submit = movie => {
    let { movies } = this.state;
    axios
      .post('/api/movies', { movie })
      .then(res =>
        this.setState({ movies: [res.data, ...movies], showForm: false }),
      );
  };

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm };
    });
  };

  render() {
    let { showForm } = this.state;
    return (
      <div>
        <h1>Movies</h1>
        <button className="ui button" onClick={this.toggleForm}>
          {showForm ? 'Hide' : 'Show'} Form{' '}
        </button>
        <div className="ui divider" />
        {showForm ? this.form() : this.show()}
      </div>
    );
  }
}

export default Movies;
