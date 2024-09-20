import React, {useState} from 'react';
import { IconSearch, IconX } from '@tabler/icons-react';
import { fetchSearchResults } from '../services/api';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch, onClear}) => {
    const [query, setQuery] = useState<string>('')

    const handleSearch = async () => {
        await fetchSearchResults("Hello")
        console.log(query)
        onSearch(query)
    }

    const handleClear = async () => {
        setQuery('');
        onClear();
    }

    return (
        <div className="absolute" style={{ top: '48px', left: '160px', width: '1120px', height: '48px' }}>
            <div className = "flex items-center h-full gap-0 border border-gray-300 rounded-lg overflow-hidden">
                <input 
                    type="text"
                    className = "flex-grow px-4 h-full outline-none"
                    placeholder = "Search"
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
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

                
            </div>
        </div>
        
    )
}

export default SearchBar