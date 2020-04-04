import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkout.module.css';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

const Checkout = (props) => {
  const [state,setState] = useState({
    ingredients:getIngredients()
  });

  const checkoutCancelhandler = () => {
    props.history.goBack();
  }

  const checkoutContinueHandler = () => {
    props.history.replace('/checkout/contact');
  }

  function getIngredients() {
    let ingredientsParams = new URLSearchParams(props.location.search);
    let ingredients ={};
    ingredientsParams.forEach((val, key) => {
      ingredients[key] = +val;
    });
    console.log(ingredients);
    return ingredients;
  }

  
  return (
    <div className={styles.Checkout}>
      <CheckoutSummary 
        ingredients={state.ingredients}
        checkoutCancelled={checkoutCancelhandler}
        checkoutContinued={checkoutContinueHandler}
        />
      
    <Route path={props.match.url+'/contact'} component={ContactData}/>
    </div>
  )
};

Checkout.propTypes = {};

Checkout.defaultProps = {};

export default Checkout;
