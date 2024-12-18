import React, { useContext } from "react";
import logo from '../Assets/logosss.png'
import cart_icon from '../Assets/cart_icon.png'
import user from '../Assets/user-circle.png'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/ShopContext';
import { ShopContext } from '../../Context/ShopContext'
import './Navbar.css'

const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext)
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
            <Link style={{ textDecoration: 'none'}} to='/'>Accueil</Link>
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Nos Produits
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              A Propos
            </button>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item navlogin">
            {localStorage.getItem('auto-token')
            ?<button onClick={()=>{
              localStorage.removeItem('auto-token');
              window.location.replace('/')
            }}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            
            
          </li>
          <li className="nav-item">
            
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
