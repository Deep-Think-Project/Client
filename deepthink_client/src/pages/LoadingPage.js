import React from 'react';
import Header from '../components/Header';
import Progress from '../components/Progress'
import ToolTip from '../components/ToolTip';

function LoadingPage({ loading }) {
  
  return (
    <div>
      <Header /> 
      <p><Progress loading={loading}/></p>
      <p><ToolTip/></p>
    </div>
  );
}

export default LoadingPage;