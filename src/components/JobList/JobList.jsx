import React from 'react';
import s from './JobList.module.scss';
import JobItem from '../JobItem/JobItem';

function JobList() {
  return (
    <div className={s.list}>
      <JobItem>Senior frontend developer</JobItem>
      <JobItem>Senior frontend developer</JobItem>
      <JobItem>Senior frontend developer</JobItem>
      <JobItem>Senior frontend developer</JobItem>
      <JobItem>Senior frontend developer</JobItem>
      <JobItem>Senior frontend developer</JobItem>
      <JobItem>Senior frontend developer</JobItem>
      <JobItem>Senior frontend developer</JobItem>
      <JobItem>Senior frontend developer</JobItem>
    </div>
  )
}

export default JobList;