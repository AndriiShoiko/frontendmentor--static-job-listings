import React from 'react';
import s from './ClearButton.module.scss';

function ClearButton(props) {
  return (
    <a className={s.link} children = {props.children} href='/'>    
    </a>
  )
}

export default ClearButton;
