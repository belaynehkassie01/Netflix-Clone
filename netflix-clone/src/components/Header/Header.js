import React, { useState, useEffect } from 'react'
import "./Header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.jpg";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'TV Shows' },
    { id: 3, label: 'Movies' },
    { id: 4, label: 'New & Popular' },
    { id: 5, label: 'My List' },
    { id: 6, label: 'Browse by Language' },
  ];

  return (
    <>
      <div className='header_outer_container'>
        <div className='header_container'>
          <div className='header_left'>
            <ul>
              <li>
                <img src={NetflixLogo} alt="NetflixLogo" width="100" />
              </li>
              {menuItems.map(item => (
                <li key={item.id}>{item.label}</li>
              ))}
            </ul>
            <button 
              className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className='header_right'>
            <ul>
              <li><SearchIcon /></li>
              <li><NotificationsIcon /></li>
              <li><AccountBoxIcon /></li>
              <li><ArrowDropDownIcon /></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-menu">
          {menuItems.map(item => (
            <div 
              key={item.id} 
              className="mobile-nav-item"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header