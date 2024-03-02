import React, { useState } from "react";
import { useGlobalContext } from "./context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for images..."
          className=" form-input search-input"
          name="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
