import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; 
import '../styles/SearchBar.css';

function SearchBar({ setLoading }) {
  const [inputValue, setInputValue] = useState("");  // input 값 관리
  const navigate = useNavigate();  // 페이지 전환을 위한 navigate 함수

  // 입력값 변경 시 호출되는 함수
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 버튼 클릭 시 실행되는 함수
  const handleSubmit = async () => {
    if (inputValue.trim() !== "") {  // 빈 입력값 방지
      setLoading(true);  // 로딩 시작

      // 로딩 페이지로 이동
      navigate('/loading');

      try {
        const response = await axios.post('main_app/', { 
          input: inputValue, 
        });
        
        console.log('서버 응답:', response.data);  // 서버 응답 출력

      // 최소 로딩 시간을 보장하기 위해 setTimeout을 사용
      setTimeout(() => {
        setLoading(false);  // 응답 받았으므로 로딩 종료

        // 결과 페이지로 이동
        navigate('/result', { state: { result: response.data } });
      }, 5000);  // 최소 5초 후에 로딩 종료

      } catch (error) {
        console.error('서버 오류:', error);  // 오류 처리
        setLoading(false);  // 오류 발생 시에도 로딩 종료
      }
    } else {
      console.log('입력값을 확인해주세요.');
    }
  };

  return (
    <div className="main-content">
      <p className="instruction">URL 혹은 분석을 원하는 정보를 입력해주세요.</p>
      <div className="search-container">
        <input
          type="text"
          value={inputValue} 
          onChange={handleInputChange}  
          placeholder="url 혹은 정보 ex) 뉴스 기사, 블로그 등"
        />
        <button onClick={handleSubmit}>분석</button>
      </div>
    </div>
  );
}

export default SearchBar;