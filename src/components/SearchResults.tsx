import React, {useState} from 'react';
import { SearchResultsItem, SearchResultsResponse } from '../types/SearchResults';

interface SearchResultsProps {
   results: SearchResultsResponse
}

const SearchResults: React.FC<SearchResultsProps> = ({results}) => {

    return (
        <div className = "relative h-[28px] top-[28px] left-[160px]">
            <h3 className = "opacity-100 font-semibold font-['Open_Sans'] text-xl">
                Showing {results.Page}-{results.PageSize} of {results.TotalNumberOfResults}
            </h3>
            
            {results.ResultItems.map((item) => (
                <div key={item.DocumentId} className = "mt-8 mb-4 pb-2 w-[823px]">
                    <a href={item.DocumentURI} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        <h4 className="text-xl font-semibold">{item.DocumentTitle.Text}</h4>
                    </a>
                    <p className="text-gray-700 my-3">{item.DocumentExcerpt.Text}</p>
                    <a href={item.DocumentURI} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                        <p className = "text-sm font-normal">{item.DocumentURI}</p>
                    </a>
                </div>
            ))}
        </div>
        
    )
}

export default SearchResults;