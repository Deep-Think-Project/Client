import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import '../styles/MainPage.css'

function MainPage({ setLoading }) {
  return (
    <div className='main-page'>
      <Header /> 
      <SearchBar setLoading={setLoading} />
    </div>
  );
}

export default MainPage;