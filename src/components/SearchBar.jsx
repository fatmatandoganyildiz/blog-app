import React from "react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSearch(searchTerm)
    };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <input
        placeholder="Search..."
        className="border"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Ara</button>
      </form>
    </div>
  );
}

export default SearchBar;
