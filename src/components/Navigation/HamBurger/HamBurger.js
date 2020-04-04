import React from 'react';
import PropTypes from 'prop-types';
import styles from './HamBurger.module.css';

const HamBurger = (props) => (
  <div className={styles.HamBurger} onClick={props.clicked}>
    <div/>
    <div/>
    <div/>
  </div>
);

HamBurger.propTypes = {};

HamBurger.defaultProps = {};

export default HamBurger;
