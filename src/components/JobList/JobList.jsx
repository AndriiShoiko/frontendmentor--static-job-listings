import React from 'react';
import s from './JobList.module.scss';
import JobItem from '../JobItem/JobItem';
import { useSelector } from "react-redux";
import { selectVacanciesByFilter } from "../../store/vacancies/vacanciesSelectors";
import {selectAllFilters} from "../../store/filters/filtersSelector";


function JobList() {

  const filters = useSelector((store) => selectAllFilters(store));
  const vacancies = useSelector((store) => selectVacanciesByFilter(store, filters));

  return (
    <div className={filters.length > 0 ? s.list + " " + s.list_active_search : s.list}>
      {vacancies.map((data) =>
        <JobItem key={data.id} data={data}>{data.position}</JobItem>
      )}
    </div>
  )
}

export default JobList;
