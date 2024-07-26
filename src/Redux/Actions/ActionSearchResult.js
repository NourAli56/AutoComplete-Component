import * as types from "../ActionType";


export const storeResult = (result) => {
    return ({
        type: types.GET_RESULT,
        payload: result
    })
}







