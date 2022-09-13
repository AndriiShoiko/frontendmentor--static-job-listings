import React from 'react';
import TagFeatured from '../../UI/TagFeatured/TagFeatured';
import TagNew from '../../UI/TagNew/TagNew';
import CategoryList from '../CategoryList/CategoryList';
import s from './JobItem.module.scss';

import { svgSelector } from '../../assets/images/image-company/svgSelector';

function JobItem(props) {
  const data = props.data;
  return (
    <div className={s.container}>
      <div className={s.container__decoration}></div>
      <div className={s.description}>
        <img className={s.description__image} src={svgSelector(data.id)} alt={data.company} />
        <div className={s.description__info}>
          <div className={s.description__company}>
            {data.company}
            <div className={s.description__main_tags}>
              {data.new && <TagNew />}
              {data.featured && <TagFeatured />}
            </div>
          </div>
          <div className={s.description__position} children={props.children}></div>
          <div className={s.description__secondary_tags}>
            <ul>
              <li>
                {data.postedAt}
              </li>
              <li>
                {data.contract}
              </li>
              <li>
                {data.location}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.description__category_list}>
        <CategoryList id={data.id} />
      </div>
    </div>
  )
}

export default JobItem;
