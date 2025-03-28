import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import MainPage from './pages/MainPage';

//서버 킬 때마다 주소 받아와서 package.json에서 proxy 바꿔주기

function App() {
  const [test, setTest] = useState('');
  useEffect(() => {
    axios.get('/main_app/test/',
      {headers: {
        "ngrok-skip-browser-warning": "true",  // 🚀 ngrok 경고 페이지 스킵
      },}
    )
      .then(response => {
        console.log(response.data);                // 객체 전체 콘솔 출력
        setTest(response.data.message);            // 상태로 message만 저장!
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {/* <li>{test}</li>   */}
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      
    </div>
  );
}

export default App;
