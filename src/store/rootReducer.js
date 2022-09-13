import { combineReducers } from "redux";
import { vacanciesReducer } from "./vacancies/vacanciesReducer";
import { filtersReducer } from "./filters/filtersReducer";

export const rootReducer = combineReducers({
    vacancies: vacanciesReducer,
    filters: filtersReducer
});