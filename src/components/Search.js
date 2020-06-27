import React, { useState } from "react";

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleTextChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div id="search">
      <form>
        <input
          type="text"
          placeholder="Search....or follow below"
          value={searchInput}
          onChange={handleTextChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
