import * as types from '../ActionType';

const initState = {
    result: [],
};

const SearchResultReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_RESULT:
            return { ...state, result: action.payload };
        default:
            return state;
    }
};

export default SearchResultReducer;