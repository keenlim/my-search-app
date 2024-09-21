import React, {useState} from 'react';
import { SearchResultsResponse } from '../types/SearchResults';
import highlightText from '../utils/highlightText';

interface SearchResultsProps {
   results: SearchResultsResponse
}

const SearchResults: React.FC<SearchResultsProps> = ({results}) => {

    return (
        <div className = "relative mt-8 mb-8 px-4 ml-36">
            <h3 className = "opacity-100 font-semibold font-['Open_Sans'] text-xl">
                Showing {results.Page}-{results.PageSize} of {results.TotalNumberOfResults}
            </h3>
            
            {results.ResultItems.map((item) => (
                <div key={item.DocumentId} className = "mt-8 mb-4 pb-2 w-[823px]">
                    <a href={item.DocumentURI} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        <h4 className="text-xl font-semibold">{highlightText(item.DocumentTitle.Text, item.DocumentTitle.Highlights)}</h4>
                    </a>
                    <p className="text-gray-700 my-3">{highlightText(item.DocumentExcerpt.Text, item.DocumentExcerpt.Highlights)}</p>
                    <a href={item.DocumentURI} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                        <p className = "text-sm font-normal">{item.DocumentURI}</p>
                    </a>
                </div>
            ))}
        </div>
        
    )
}

export default SearchResults;