import React from 'react';
import s from './CategoryItem.module.scss';

function CategoryItem(props) {
    return (
        <div className={s.button}>
            <div className={s.button__lable} children={props.children}></div>
        </div>
    )
}

export default CategoryItem;