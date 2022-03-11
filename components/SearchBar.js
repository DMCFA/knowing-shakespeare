const SearchBar = ({ setSearch, newSearch }) => {
  let searchWord = setSearch;
  let setNewSearch = newSearch;

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewSearch(true);
    e.target.reset();
  };
  return (
    <div className='search-container'>
      <form role='searchbox' onSubmit={(e) => handleSubmit(e)}>
        <input
          className='search-bar'
          type='search'
          aria-label='Search for shakespeare quotes'
          onChange={(e) => searchWord(e.target.value)}
        />
        <button type='submit'>go</button>
      </form>
    </div>
  );
};

export default SearchBar;
