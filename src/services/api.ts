import { SearchResultsResponse } from "../types/SearchResults";
import { SuggestionsItem } from "../types/Suggestions";

export const fetchSearchResults = async (query: string): Promise<SearchResultsResponse> => {
    const response = await fetch(
      `https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    const data = await response.json();
    console.log(data)
    // Assuming the API returns an array of results
    return data;
  };

  export const fetchSuggestions = async (query: string): Promise<SuggestionsItem> => {
    const response = await fetch(
      'https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }

    const data = await response.json();

    return data
  }