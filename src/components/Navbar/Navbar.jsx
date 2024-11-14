import React from 'react';
import { Link } from 'react-router-dom';  // Import Link to handle navigation
import logo from '../../assets/logo.png';  // Import the logo image7
import dcchef from '../../assets/dcchef.png';  // Import the chef image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="arriba">
        <ul className="contiene-arriba">
          <li>
            <div className="navbar-left">
              
            </div>
            <div className="logo">
              <img src={logo} alt="RecipeBook" className="logo" />  {/* Logo image */}
            </div>
            <div className="navbar-right">
              <ul className="navbar-links">
                <li>
                  <Link to="/recetas">Ver Recetas</Link>  {/* Link to View Recipes page */}
                </li>
                <li>
                  <Link to="/create">Crear Receta</Link>  {/* Link to Create Recipe page */}
                </li>
              </ul>
            </div>
          </li>
          <li>
          <div className="dcchef-img">
              <img src={dcchef} alt="Chef" className="dcchef" />  {/* Chef image */}
          </div>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;