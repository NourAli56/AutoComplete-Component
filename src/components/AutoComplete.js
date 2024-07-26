import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import ResultList from './ResultList';
import { AbstructVar } from './general/generalComponent/AbstructVar';
import { useSelectorCustom } from './general/generalComponent/useSelectorCustom';
import { fetchOptions } from '../api/fetchOptions';
import icon from '../assets/icons/auto.png'

const AutoComplete = () => {
  let { dispatch } = AbstructVar()
  const { result } = useSelectorCustom()
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const itemsPerPage = 10;

  useEffect(() => {
    const loadOptions = async () => {
      setLoading(true);
      const moreDataAvailable = await fetchOptions(searchTerm, page, itemsPerPage, result, dispatch);
      setHasMore(moreDataAvailable);
      setLoading(false);
    };

    if (searchTerm && hasMore) {
      loadOptions();
    }
  }, [searchTerm, page, hasMore]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredOptions(
        result.filter(option =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredOptions([]);
    }
  }, [searchTerm, result]);

  const handleScroll = e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 100 && hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setFilteredOptions([]);
    setPage(1);
    setHasMore(true);
  };

  const handleOptionClick = (label) => {
    setSearchTerm(label);
    setHasMore(false)
    setFilteredOptions([]);
  };

  return (
    <div className="auto-completed">
      <div className='div-auto-icon' >
        <img className='auto-icon' src={icon} />
        <span>Auto Completed</span>
      </div>
      <SearchInput onSearchChange={handleSearchChange} searchTerm={searchTerm} />
      {loading && <p>Loading...</p>}
      <ResultList loading={loading} options={filteredOptions} searchTerm={searchTerm} handleScroll={handleScroll} onOptionClick={handleOptionClick} />
    </div>
  );
};

export default AutoComplete;