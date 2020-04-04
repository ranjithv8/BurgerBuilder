import React , {useEffect} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
      .map((item) => {
        return (<li>
                  <span style={{textTransform:"capitalize"}}>{item}</span>:{props.ingredients[item]}
                </li>)
      });


  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <strong>Price:{props.totalPrice.toFixed(2)}</strong>
      <p>Continue to Checkout</p>
      <Button clicked={props.cancelPurchase} buttonType='Danger'>CANCEL</Button>
      <Button clicked={props.continuePurchase} buttonType='Success'>CONTINUE</Button>
    </Aux>
  )
};

OrderSummary.propTypes = {};

OrderSummary.defaultProps = {};

export default OrderSummary;
