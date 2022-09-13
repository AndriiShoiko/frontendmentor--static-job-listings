import React from 'react';
import s from './JobList.module.scss';
import JobItem from '../JobItem/JobItem';
import { useSelector } from "react-redux";
import { selectVacanciesByFilter } from "../../store/vacancies/vacanciesSelectors";


function JobList() {

  const vacancies = useSelector((state) => selectVacanciesByFilter(state, []));

  return (
    <div className={s.list + " " + s.list_active_search}>
      {vacancies.map((data) =>
        <JobItem key={data.id} data={data}>{data.position}</JobItem>
      )}
    </div>
  )
}

export default JobList;
