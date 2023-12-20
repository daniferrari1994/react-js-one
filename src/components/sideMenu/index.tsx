import React, { useState } from "react";
import './syled.css';

const SideMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="container">
          <button className="toggle-button" onClick={toggleMenu}>
            {showMenu ? 'Ocultar Menú' : 'Mostrar Menú'}
          </button>
          <div className={showMenu ? 'sidebar show' : 'sidebar'}>
            <ul>
              <li><a href="#">Opción 1</a></li>
              <li><a href="#">Opción 2</a></li>
              <li><a href="#">Opción 3</a></li>
            </ul>
          </div>
        </div>
    );
};

export default SideMenu;