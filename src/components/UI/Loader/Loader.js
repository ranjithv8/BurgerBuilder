import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';
import BackDrop from '../BackDrop/BackDrop';

const Loader = (props) => (
  <div className={props.show? styles.Open:styles.Closed}>
    <BackDrop show/>
    <div className={styles.Loader}>Loading...</div>
  </div>
);

Loader.propTypes = {};

Loader.defaultProps = {};

export default Loader;
