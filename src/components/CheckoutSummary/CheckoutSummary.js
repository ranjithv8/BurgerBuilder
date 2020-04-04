import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckoutSummary.module.css';
import Button from '../UI/Button/Button';
import Burger from '../Burger/Burger';

const CheckoutSummary = (props) => (
  <div className={styles.CheckoutSummary}>
    <p>Your Burger!!</p>
    <Burger ingredients={props.ingredients}/>
    <Button clicked={props.checkoutCancelled} buttonType='Danger'>CANCEL</Button>
    <Button clicked={props.checkoutContinued} buttonType='Success'>CONTINUE</Button>
  </div>
);

CheckoutSummary.propTypes = {};

CheckoutSummary.defaultProps = {};

export default CheckoutSummary;
