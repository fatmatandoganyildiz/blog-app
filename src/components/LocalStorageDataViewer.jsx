// App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';

function LocalStorageDataViewer() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const getAllData = () => {
      const allData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        allData[key] = value;
      }
      return allData;
    };

    const allData = getAllData();
    const matchingData = Object.keys(allData).filter(key =>
      allData[key].toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(matchingData);
    console.log(searchResults);
  };

  return (
    <div>
      <h1>Local Storage Arama Uygulaması</h1>
      <SearchBar onSearch={handleSearch} />
      <h2>Sonuçlar:</h2>
      <ul>
        {searchResults.map(result => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default LocalStorageDataViewer;
