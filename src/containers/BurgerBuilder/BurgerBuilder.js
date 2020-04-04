import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuilderControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from 'axios';
import Loader from "../../components/UI/Loader/Loader";
import Checkout from "../Checkout/Checkout";

const INGRIDEINT_PRICES={
    salad: 0.1,
    bacon: 0.5,
    cheese: 0.3,
    meat: 0.5
}
class BurgerBuilder extends Component {

    componentDidMount () {
        this.setState({loading: true})
        axios.get('https://react-burger-builder-d7350.firebaseio.com/ingredients.json')
            .then((response) => {
                this.setState({ingredients: response.data});
                this.setState({loading: false})
            })
    }

    state= {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = this.state.ingredients[type]+1;
        this.setState({
            totalPrice: this.state.totalPrice+INGRIDEINT_PRICES[type],
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] === 0){
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = this.state.ingredients[type]-1;
        this.setState({
            totalPrice: this.state.totalPrice-INGRIDEINT_PRICES[type],
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum,el) => {
                return sum+el;
            })
        this.setState({purchaseable:sum > 0})
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }

    purchaseContinueHandler = () => {
        // this.setState({loading: true})
        // axios.post('https://react-burger-builder-d7350.firebaseio.com/order.json', {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice
        // }).then(() => {
        //     console.log('Order Created');
        //     this.setState({loading: false})
        // }).catch(() => {
        //     console.log('Something went wrong');
        //     this.setState({loading: false})
        // })
        const ingredientsAsParams = Object.keys(this.state.ingredients).map(key => key + '=' + this.state.ingredients[key]).join('&');
        this.props.history.push(`/checkout?${ingredientsAsParams}`);
    }

    render () {
        let burger = this.state.ingredients 
                        ? (
                            <Aux>
                                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                                    <OrderSummary 
                                        ingredients={this.state.ingredients} 
                                        cancelPurchase={this.purchaseCancelHandler} 
                                        continuePurchase={this.purchaseContinueHandler}
                                        totalPrice={this.state.totalPrice}
                                    />
                                </Modal>
                                <Burger ingredients={this.state.ingredients}/>
                            </Aux>
                          )
                        : <p> Loading...</p>;
                        
        return (
            
            <Aux>
                <Loader show={this.state.loading}/>
                {burger}
                <BuilderControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    onPurchase={this.purchaseHandler}
                />)
            </Aux>
        )
    }
}

export default BurgerBuilder;