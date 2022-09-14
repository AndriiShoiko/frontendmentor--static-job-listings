import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from "./filtersConst";

export function addFilter(description) {
    return {
        type: ADD_FILTER,
        description
    }
}

export function removeFilter(description) {
    return {
        type: REMOVE_FILTER,
        description
    }
}

export function clearFilters() {
    return {
        type: CLEAR_FILTERS
    }
}