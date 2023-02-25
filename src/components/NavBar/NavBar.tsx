import css from './NavBar.module.scss'
import { useState } from 'react'
import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';

export const NavBar = () => {
    return (
        <div className={css.NavBar}>
            <Navigation />
            <MobileNavigation />
            
        </div>



    )
}

export default NavBar;