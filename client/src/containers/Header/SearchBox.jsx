import React from 'react';

import './SearchBox.scss';

const SearchBox = () => (
  <div className="search-box">
    <span className="search-title">Find your movie</span>
    <br />
    <input className="search-input" />
    <div className="row">
      <div className="column">
        <span className="search-title">Search by</span>
        <input type="button" value="Title" />
        <input type="button" value="Genre" />
      </div>
      <div className="column left">
        <input className="search-button" type="button" value="Search" />
      </div>
    </div>
  </div>
);

export default SearchBox;
