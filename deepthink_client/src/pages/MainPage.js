import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import '../styles/MainPage.css'

function MainPage() {
  return (
    <div className='main-page'>
      <Header /> 
      <SearchBar />
    </div>
  );
}

export default MainPage;