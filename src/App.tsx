import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import { fetchSearchResults } from './services/api';
import { SearchResultsResponse } from './types/SearchResults';
import SearchResults from './components/SearchResults';

function App() {
  const [results, setResults] = useState<SearchResultsResponse | null>(null)

  const handleSearch = async (query: string) => {
    const search_results = await fetchSearchResults(query)
    console.log(search_results)
    console.log(search_results.ResultItems)
    if (search_results) {
      setResults(search_results)
    }

  }

  const handleClear = () => {
    

  }

  return (
    <div className = "flex flex-col relative w-full min-h-screen pb-8">
      <Banner />
      <div className="shadow-lg" style={{ top: '24px', height: '152px'}}>
        <SearchBar onSearch={handleSearch} onClear={handleClear} />
      </div>
      <div className = "flex-1">
        {results ? <SearchResults results = {results}/> : <></>} 
      </div>
      
    </div>
  );
}

export default App;
