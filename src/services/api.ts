export const fetchSearchResults = async (query: string) => {
    const response = await fetch(
      `https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b978`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    const data = await response.json();
    console.log(data)
    // Assuming the API returns an array of results
    return data.results;
  };