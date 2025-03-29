import React from 'react';
import logo from '../assets/logo.png'; 
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();

  // 로고 클릭 시 메인 페이지로 이동하는 함수
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" onClick={handleLogoClick}/>
        <div className="service-name">Deep Think</div>
      </div>
      <hr />
    </>
  );
}

export default Header;