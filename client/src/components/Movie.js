import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import Form from './Form';

class Movie extends React.Component {
  state = { movie: [], edit: false, redirect: false };

  componentDidMount() {
    axios
      .get(`/api/movies/${this.props.match.params.id}`)
      .then(res => this.setState({ movie: res.data }));
  }

  toggleEdit = () => {
    this.setState(state => {
      return { edit: !this.state.edit };
    });
  };

  submit = movie => {
    axios
      .put(`/api/movies/${this.props.match.params.id}`, {
        movie,
      })
      .then(res =>
        this.setState({
          movie: res.data,
          edit: false,
        }),
      );
  };

  show() {
    let {
      movie: { title, director, producer, genre },
    } = this.state;
    return (
      <div className="ui center aligned container">
        <h1>{title}</h1>
        <div className="ui divider" />
        <div className="ui left aligned container">
          <h4>Director - {director}</h4>
          <h4>Producer - {producer}</h4>
          <h4>Genre - {genre}</h4>
        </div>
        <div className="ui divider" />
      </div>
    );
  }

  edit() {
    return (
      <Form {...this.state.movie} submit={this.submit} />
    );
  }

  delete = () => {
    axios
      .delete(`/api/movies/${this.props.match.params.id}`)
      .then(res =>
        this.setState({ movie: res.data, redirect: true }),
      );
  };

  render() {
    let { edit, redirect } = this.state;

    return (
      <div className="ui center aligned container">
        {edit ? this.edit() : this.show()}
        <button
          className="ui button"
          onClick={this.toggleEdit}>
          {edit ? 'Cancel' : 'Edit'}
        </button>
        <button
          className="ui red button"
          onClick={() => {
            this.delete();
          }}>
          Delete
        </button>
        {redirect && <Redirect to="/movies" />}
      </div>
    );
  }
}

export default Movie;
