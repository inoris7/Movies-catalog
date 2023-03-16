import React, {useState} from "react";


function Search(props) {

  const {
    searchFilm = Function.prototype
  } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (evt) => {
    if (evt.key === "Enter") {
      searchFilm(search, type);
    }
  };

  const handleType = (evt) => {
    setType(evt.target.name); 
    searchFilm(search, evt.target.name);
  }
  
  return (
    <div className="row">
      <div className="col s12">
        <input
          className="validate"
          type="search"
          placeholder="search"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn"
          onClick={() => searchFilm(search, type)}
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
              onChange={handleType}
              checked={type === 'all'}
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
              onChange={handleType}
              checked={type === 'movie'}
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
              onChange={handleType}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </p>
      </form>
    </div>
  );
}


export { Search };
