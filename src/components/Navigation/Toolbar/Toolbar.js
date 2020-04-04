import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamBurger from '../HamBurger/HamBurger';
const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <HamBurger clicked={props.menuClicked}/>
      <div className={styles.Logo}>
        <Logo/>
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems/>
      </nav>
    </header>
  )
};


export default Toolbar;
