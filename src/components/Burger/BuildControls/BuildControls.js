import React , { Component }from "react";
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
]
class BuilderControls extends Component {
    render () {
        let buildControls = controls.map((ctrl) => {
            return <BuildControl 
                added={() => this.props.ingredientAdded(ctrl.type)}
                removed={() => this.props.ingredientRemoved(ctrl.type)}
                label={ctrl.label} 
                key={ctrl.type}/>
        })
        return (
            <div className={classes.BuilderControls}>
                <p>Current Price: <strong>{this.props.totalPrice}</strong></p>
                {buildControls}
                <button 
                    className={classes.OrderButton}
                    disabled={!this.props.purchaseable}
                    onClick={this.props.onPurchase}
                >Order Now</button>
            </div>
        );
    }
}

export default BuilderControls;