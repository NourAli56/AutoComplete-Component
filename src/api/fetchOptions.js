import axios from 'axios';
import { storeResult } from '../Redux/Actions/ActionSearchResult';

export const fetchOptions = async (searchTerm, page, itemsPerPage, result, dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: { q: searchTerm, _page: page, _limit: itemsPerPage },
    });

    if (response.data.length > 0) {
      const newOptions = response.data.map(datum => ({
        value: datum.id,
        label: datum.title,
      }));
      const allOptions = [...result, ...newOptions];
      const uniqueOptions = allOptions.filter(
        (option, index, self) =>
          index === self.findIndex((o) => o.value === option.value)
      );
      //store in redux ^_^
      dispatch(storeResult(uniqueOptions));
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return false; 
  }
  return true; 
};