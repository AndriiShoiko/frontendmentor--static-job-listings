import React from 'react';
import ClearButton from '../../UI/ClearButton/ClearButton';
import FilterItem from '../../UI/FilterItem/FilterItem';
import s from './Filters.module.scss';

import { useSelector, useDispatch } from "react-redux";
import { selectAllFilters } from "../../store/filters/filtersSelector";
import { removeFilter, clearFilters } from "../../store/filters/filtersActions";

function Filters() {

  const filters = useSelector((store) => selectAllFilters(store));
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.container__items}>
          {filters.map(
            (element, index) => <FilterItem key={index}
              onClick={() => {
                dispatch(removeFilter(element));
              }}>{element}</FilterItem>
          )}
        </div>
        <div className={s.container__clear}>
          <ClearButton
            onClick={(event) => {
              event.preventDefault();
              dispatch(clearFilters());
            }}
          >
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  )
}

export default Filters;
