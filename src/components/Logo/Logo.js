import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import bugerLogo from '../../assets/images/burger_logo.png'

const Logo = () => (
  <div className={styles.Logo}>
    <img src={bugerLogo}/>
  </div>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
