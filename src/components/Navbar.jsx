import { Link, useLocation } from 'react-router-dom';
import { Video, Home, ShoppingBag, Layers, Mail, Menu, X, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Products', path: '/products', icon: <ShoppingBag size={18} /> },
    { name: 'Categories', path: '/categories', icon: <Layers size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="glass-panel navbar container rgb-border-nav">
        <div className="logo-container">
          <Link to="/" className="logo">
            <Video className="logo-icon" />
            <span className="text-gradient logo-text">RISHI EDITX</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Auth & Cart section */}
        <div className="nav-actions">
           <Link to="/login" className="action-btn auth-link">
              <User size={18} /> Login
           </Link>
           <Link to="/signup" className="action-btn signup-link rgb-border">
              Sign Up
           </Link>
           <Link to="/cart" className="action-btn cart-btn">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && <span className="cart-badge bg-gradient-neon">{cartItemCount}</span>}
           </Link>
           
           {/* Mobile Toggle */}
           <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
             {isOpen ? <X color="white" /> : <Menu color="white" />}
           </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="mobile-dropdown glass-panel">
            <ul className="nav-links mobile-nav">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li style={{borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: '0.5rem'}}>
                <Link to="/login" className="nav-link" onClick={() => setIsOpen(false)}>Login</Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link" onClick={() => setIsOpen(false)}>Sign Up</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
