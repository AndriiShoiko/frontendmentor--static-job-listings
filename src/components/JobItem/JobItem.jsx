import React from 'react';
import TagFeatured from '../../UI/TagFeatured/TagFeatured';
import TagNew from '../../UI/TagNew/TagNew';
import CategoryList from '../CategoryList/CategoryList';
import s from './JobItem.module.scss';

function JobItem(props) {
  return (
    <div className={s.container}>
    <div className={s.container__decoration}></div>
      <div className={s.description}>
        <img className={s.description__image} src={require('../../assets/images/image-company/photosnap.svg').default} alt='photosnap' />
        <div className={s.description__info}>
          <div className={s.description__company}>
            Photosnap
            <div className={s.description__main_tags}>
              <TagNew />
              <TagFeatured />
            </div>
          </div>
          <div className={s.description__position} children={props.children}></div>
          <div className={s.description__secondary_tags}>
            <ul>
              <li>
                1d ago
              </li>
              <li>
                Full Time
              </li>
              <li>
                USA only
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CategoryList />
    </div>
  )
}

export default JobItem;
