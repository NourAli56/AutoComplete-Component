
const ResultList = ({ loading, options, searchTerm, handleScroll, onOptionClick }) => {
  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: '#4eb5e5', color: 'white', padding: '1px 3px', borderRadius: '5px', margin: '0px 2px' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      {
        !loading && options?.length === 0 && searchTerm !== '' ? (
          <p className="no-results">No results found</p>
        ) :
          <ul className="result-list" onScroll={handleScroll}>
            {options.map((option, index) => (
              <li key={index} style={{ padding: '8px', borderBottom: '1px solid #ddd' }} onClick={() => onOptionClick(option.label)}>
                {highlightText(option.label, searchTerm)}
              </li>
            ))}
          </ul>
      }

    </>
  );
};

export default ResultList;