import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import  './SideDrawer.css';
import Bachdrop from './../../Ui/Backdrop/Backdrop';
const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer' , 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer' , 'Open']
    }

    return (
        <React.Fragment>
            <Bachdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}
            onClick={props.closed}>
                <div className='Logo'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>

    )
}
export default sideDrawer;
