import React from 'react';
import './Toolbar.css';
import Logo from '../../logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from './../NavigationItems/NavigationItems';
const toolbar = (props) => (
    <header className='Toolbar'>
      <DrawerToggle clicked={props.drawerToggleclicked} />
        <div className ='Logo'> 
            <Logo />
        </div>

        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);
export default toolbar;