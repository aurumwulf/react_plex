import React from 'react';

class Form extends React.Component {
  defaultValues = { title: '', director: '', producer: '', genre: '' };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    let movie = { ...this.state };
    this.props.submit(movie);
    this.setState({ ...this.defaultValues });
  };

  handleChange = e => {
    let { target: { id, value } } = e;
    this.setState({ [id]: value });
  };

  render() {
    let { title, director, producer, genre } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            id="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="field">
          <input
            id="producer"
            placeholder="Producer"
            value={producer}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            id="director"
            placeholder="Director"
            value={director}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            id="genre"
            placeholder="Genre"
            value={genre}
            onChange={this.handleChange}
          />
        </div>
        <button className="ui button">Submit</button>
      </form>
    );
  }
}

export default Form;
