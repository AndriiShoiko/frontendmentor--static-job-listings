import React from 'react';
import s from './FilterItem.module.scss';
import svg_img_close from '../../assets/images/close-filter-item.svg';

function FilterItem(props) {
    return (
        <div className={s.button} >
            <div className={s.button__lable} children={props.children}></div>
            <div className={s.button__close} {...props}>
                <img src={svg_img_close} alt='close' />
            </div>
        </div>
    )
}

export default FilterItem;
