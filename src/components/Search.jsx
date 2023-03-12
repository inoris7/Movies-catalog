import React from "react";

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (evt) => {
    if (evt.key === "Enter") {
      this.props.setSearch(this.state.search, this.state.type);
    }
  };

  handleType = (evt) => {
    this.setState(() => ({type: evt.target.name}), () => this.props.setSearch(this.state.search, this.state.type))
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <input
            className="validate"
            type="search"
            placeholder="search"
            value={this.state.search}
            onChange={(evt) => {
              this.setState({ search: evt.target.value });
            }}
            onKeyDown={this.handleKey}
          />
          <button
            className="search-button"
            onClick={() => this.props.setSearch(this.state.search, this.state.type)}
          >
            Search
          </button>
        </div>
        <form className="radio-form" action="#">
          <p>
            <label>
              <input
                className="with-gap"
                name="all"
                type="radio"
                onChange={this.handleType}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="movie"
                type="radio"
                onChange={this.handleType}
                checked={this.state.type === 'movie'}
              />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="series"
                type="radio"
                onChange={this.handleType}
                checked={this.state.type === 'series'}
              />
              <span>Series</span>
            </label>
          </p>
        </form>
      </div>
    );
  }
}

export { Search };
