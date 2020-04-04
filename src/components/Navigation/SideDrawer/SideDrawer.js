import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';


const SideDrawer = (props) => {
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.toggleHandler}/>
      <div className={[styles.SideDrawer,props.open? styles.Open : styles.Close].join(' ')}>
        <div className={styles.Logo}>
          <Logo/>
        </div>
        <NavigationItems/>
      </div>
    </Aux>
  )
};

SideDrawer.propTypes = {};

SideDrawer.defaultProps = {};

export default SideDrawer;
