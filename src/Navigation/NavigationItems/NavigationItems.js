import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' exact={props.exact}> UNIT-1</NavigationItem>
        <NavigationItem link='/UNIT-2' > UNIT-2 </NavigationItem> 
       <NavigationItem link='/UNIT-3' > UNIT-3 </NavigationItem>
    </ul>

);
export default navigationItems;
