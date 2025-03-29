import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoadingPage from './pages/LoadingPage'
import ResultPage from './pages/ResultPage';


//서버 킬 때마다 주소 받아와서 package.json에서 proxy 바꿔주기

function App() {
  const [loading, setLoading] = useState(false);  // 로딩 상태

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage setLoading={setLoading}/>} />
        <Route path="/loading" element={<LoadingPage loading={loading}/>} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
