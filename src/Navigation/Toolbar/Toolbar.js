import React from 'react';
import './Toolbar.css';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from './../NavigationItems/NavigationItems';
const toolbar = (props) => (
    <header className='Toolbar'>
      <DrawerToggle clicked={props.drawerToggleclicked} />
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);
export default toolbar;