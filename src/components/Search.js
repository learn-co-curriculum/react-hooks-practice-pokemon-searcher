import React from "react";

function Search({ search, onSearch }) {

  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" className="prompt" onChange={(e) => onSearch(e.target.value)} value={search}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;