import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from "./filtersConst";

export function filtersReducer(state = [], action) {

    if (action.type === ADD_FILTER) {
        const findFiter = state.find(element => element === action.description);
        if (!findFiter) {
            return [...state, action.description];
        }
        return state;
    }

    if (action.type === REMOVE_FILTER) {
        return state.filter(element => element !== action.description);
    }

    if (action.type === CLEAR_FILTERS) {
        return [];
    }

    return state;

}