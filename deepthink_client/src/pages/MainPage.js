import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import '../styles/MainPage.css';

/**
 * MainPage Component
 *
 * This component serves as the primary landing page of the application.
 * It renders the global Header and a SearchBar component.
 * 
 * Props:
 * - setLoading (function): A state setter passed down to control the loading state
 *   during asynchronous operations (e.g., API calls triggered by the SearchBar).
 *
 * Layout:
 * - The page is styled using 'MainPage.css'.
 * - All main-level elements are wrapped in a div with the class 'main-page'.
 */
function MainPage({ setLoading }) {
  return (
    <div className='main-page'>
      <Header /> 
      <SearchBar setLoading={setLoading} />
    </div>
  );
}

export default MainPage;
