import React from 'react';
import Header from '../components/Header';
import Progress from '../components/Progress'

function LoadingPage({ loading }) {
  
  return (
    <div>
      <Header /> 
      <p><Progress loading={loading}/></p>
    </div>
  );
}

export default LoadingPage;