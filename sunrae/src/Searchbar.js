import React from "react";
import Header from "./Header";

function SearchBar() {
  return (
    <div>
      <Header />

      <main className="search__container">
        <section>
          <h1 className="search__results">Search Results</h1>
        </section>
      </main>
    </div>
  );
}

export default SearchBar;
