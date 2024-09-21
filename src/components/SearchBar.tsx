import React, {useState, useEffect} from 'react';
import { IconSearch, IconX } from '@tabler/icons-react';
import { fetchSearchResults, fetchSuggestions } from '../services/api';
import useDebounce from '../hooks/useDebounce';
import SuggestionDropdown from './SuggestionDropdown';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch, onClear}) => {
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [removeSuggestions, setRemoveSuggestions] = useState<boolean>(false);
    const [activeSuggestion, setActiveSuggestion] = useState<number>(-1);

    // Reduce unnecessary API requests 
    const debouncedQuery = useDebounce(query, 100);

    // Everytime where debouncedQuery changed
    useEffect(() => {
        const getSuggestions = async () => {
            if (debouncedQuery.length >= 2 && !removeSuggestions ) {
                try {
                    const data = await fetchSuggestions(debouncedQuery);
                    setSuggestions(data.suggestions.slice(0,6));
                    setShowSuggestions(true);
                } catch (error) {
                    console.error(error);
                    setSuggestions([]);
                    setShowSuggestions(false);
                }
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
                setRemoveSuggestions(false)
            }
        };

        getSuggestions();
    }, [debouncedQuery]);

    const handleSearch = async () => {
        console.log(query)
        onSearch(query)
        setShowSuggestions(false);
    }

    const handleClear = async () => {
        setQuery('');
        setSuggestions([]);
        setShowSuggestions(false);
        setRemoveSuggestions(false);
        onClear();
    }

    // const handleKeyDown = (event: any) => {
    //     if (event.key === 'Enter' && !event.shiftKey) {
    //       event.preventDefault();
    //       handleSearch()
    //     }
    //   };

      const handleSuggestionClick = (suggestions: string) => {
        setSuggestions([]);
        setQuery(suggestions);
        onSearch(suggestions);
        setShowSuggestions(false);
        setRemoveSuggestions(true);
      }

      const handleBlur = () => {
        // Delay hiding suggestions to allow click event to register
        setTimeout(() => {
          setShowSuggestions(false);
        }, 100);
      };

      const handleKeyDown = (e: any) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveSuggestion((prev) => prev < suggestions.length - 1 ? prev + 1: prev)
        }else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveSuggestion((prev) => prev > 0 ? prev - 1 : prev)
        } else if (e.key === 'Enter') {
            if (showSuggestions && activeSuggestion >= 0) {
              e.preventDefault(); // Prevent form submission
              setQuery(suggestions[activeSuggestion]);
              onSearch(suggestions[activeSuggestion]);
              setShowSuggestions(false);
              setRemoveSuggestions(true);
              setSuggestions([]); // Clear suggestions to prevent reopening
            } else {
              handleSearch();
            }
          } else if (e.key === 'Escape') {
            setShowSuggestions(false);
          }
      }
    

    return (
        <div className="relative" style={{ top: '48px', left: '160px', width: '1120px', height: '48px' }}>
            <div className = "flex items-center h-full gap-0 border border-gray-300 rounded-lg overflow-hidden">
                <input 
                    type="text"
                    className = "flex-grow px-4 h-full outline-none"
                    placeholder = "Search"
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
                    onKeyDown = {handleKeyDown}
                    onBlur = {handleBlur}
                />
                {/*If query is typed then 'X' button sohuld appear*/}
                {query && (
                    <button className = "px-2.5" onClick = {handleClear}>
                        <IconX stroke={2} color='#6c7a91'/>
                    </button>
                )}
                <button 
                    className = "flex items-center gap-x-1 bg-[#1C76D5] text-white px-6 h-full hover:bg-blue-700 rounded-lg transition-opacity duration-300"
                    onClick = {handleSearch}
                >
                    <IconSearch stroke={2} color = "white" />
                    <span className = "text-white" style={{top: '15px', left: '35px'}}>Search</span>
                </button>
                {showSuggestions && suggestions.length > 0 && (
                    <SuggestionDropdown suggestions={suggestions} activeSuggestions={activeSuggestion} onSuggestionClick={handleSuggestionClick}/>
                )}
                
                
            </div>
        </div>
        
    )
}

export default SearchBar