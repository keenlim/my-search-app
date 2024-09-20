import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';

function App() {
  const handleSearch = () => {

  }

  const handleClear = () => {

  }

  return (
    <div>
      <Banner />
      <div className="absolute shadow-lg w-full" style={{ top: '24px', height: '152px'}}>
        <SearchBar onSearch={handleSearch} onClear={handleClear} />
      </div>
      
    </div>
  );
}

export default App;
