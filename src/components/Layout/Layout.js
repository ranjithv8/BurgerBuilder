import React , {useState} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const initialState = {
        showSideDrawer: false
    }

    const [state, setstate] = useState(initialState);

    const sideDrawerToggleHandler = () => {
        setstate({
            showSideDrawer: !state.showSideDrawer
        })
    };

    return (
        <Aux>
            <Toolbar menuClicked={sideDrawerToggleHandler}/>
            <SideDrawer toggleHandler={sideDrawerToggleHandler} open={state.showSideDrawer}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}
export default Layout;