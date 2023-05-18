import React from "react";

function Search({ pokemon, search, onSearch}) {

  //what are you doing with this data?
  //start from the bottom 

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={onSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
