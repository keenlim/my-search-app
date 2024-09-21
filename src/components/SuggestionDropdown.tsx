import React from 'react';

export interface SuggestionDropdownProps {
    suggestions: string[];
    activeSuggestions: number;
    onSuggestionClick: (suggestion: string) => void;
}

const SuggestionDropdown: React.FC<SuggestionDropdownProps> = ({suggestions, activeSuggestions, onSuggestionClick}) => {
    if (suggestions.length === 0) {
        return null;
    }

    return (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-72 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => (
            <li
            key={index}
            className={`px-4 py-2 cursor-pointer ${
                index === activeSuggestions
                  ? 'bg-blue-500 text-white font-semibold'
                  : 'hover:bg-blue-100'
              }`}
            onMouseDown={() => onSuggestionClick(suggestion)} // Use onMouseDown to prevent input blur before click
            >
            {suggestion}
            </li>
        ))}
        </ul>
    )
}

export default SuggestionDropdown;