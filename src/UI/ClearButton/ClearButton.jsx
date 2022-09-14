import React from 'react';
import s from './ClearButton.module.scss';

function ClearButton(props) {
  return (
    <a className={s.link} children = {props.children} {...props} href='/'>    
    </a>
  )
}

export default ClearButton;
