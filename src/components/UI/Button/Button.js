import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
    <button
      onClick={props.clicked}
      className={[styles.Button,styles[props.buttonType]].join(' ')}
    >{props.children}</button>
);


Button.defaultProps = {};

export default Button;
