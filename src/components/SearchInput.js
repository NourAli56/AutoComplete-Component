

const SearchInput = ({ onSearchChange, searchTerm }) => {
  return (
    <input
      className="auto-completed-input"
      type="text"
      placeholder="Search ..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchInput;