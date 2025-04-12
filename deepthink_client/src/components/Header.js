import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

/**
 * Header Component
 *
 * This component renders a global header that includes:
 * - A clickable logo that navigates the user back to the home page
 * - The service name ("Deep Think")
 *
 * Navigation is handled via React Router's `useNavigate` hook.
 * Styling is applied via an external CSS file.
 */
function Header() {
  const navigate = useNavigate();

  /**
   * Event handler for logo click
   * Redirects the user to the root path ("/")
   */
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="header-container">
        {/* Application logo with click-to-home navigation */}
        <img 
          src={logo} 
          alt="logo" 
          className="logo" 
          onClick={handleLogoClick}
        />

        {/* Displayed service name */}
        <div className="service-name">Deep Think</div>
      </div>

      {/* Horizontal divider below the header */}
      <hr />
    </>
  );
}

export default Header;
