import React from 'react';
import ClearButton from '../../UI/ClearButton/ClearButton';
import FilterItem from '../../UI/FilterItem/FilterItem';
import s from './Filters.module.scss';

function Filters() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.container__items}>
          <FilterItem>Frontend</FilterItem>
          <FilterItem>CSS</FilterItem>
          <FilterItem>JavaScript</FilterItem>
          {/*<FilterItem>HTML</FilterItem>
        <FilterItem>Senior</FilterItem>*/}
        </div>
        <div className={s.container__clear}>
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  )
}

export default Filters;
