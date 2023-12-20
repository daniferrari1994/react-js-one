import React from 'react';
import DarkMode from '../utils/darkMode';
import SideMenu from '../sideMenu';

const HeaderMenu = () => {
    return(
        <nav className='headerMenu-nav' data-testid='headerMenu-nav'>
            <button className='btn-contact' data-testid='btn-contact'>Contact</button>
            <button className='btn-work' data-testid='btn-work'>Work</button>
            <button className='btn-certificates' data-testid='btn-certificates'>certificates</button>
            <DarkMode />
            <SideMenu />
        </nav>
    );  
};

export default HeaderMenu;