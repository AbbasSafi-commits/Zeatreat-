import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Product', to: 'product' },
    { label: 'Benefits', to: 'benefits' },
    { label: 'Ingredients', to: 'ingredients' },
    { label: 'How to Use', to: 'how-to-use' },
    { label: 'Why ZEETREAT', to: 'why-zeetreat' },
    { label: 'Reviews', to: 'reviews' },
    { label: 'FAQ', to: 'faq' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <h2 className="brand-text">ZEETREAT</h2>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              {item.label}
            </ScrollLink>
          ))}
          <button className="nav-btn-order">
            ORDER NOW
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="nav-mobile-toggle">
          <button onClick={toggleMenu} className="menu-button">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-menu-mobile">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="nav-link-mobile"
              onClick={closeMenu}
            >
              {item.label}
            </ScrollLink>
          ))}
          <button className="nav-btn-order-mobile">
            ORDER NOW
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
