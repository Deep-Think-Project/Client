import React from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();  // 전달된 상태 가져오기
  const { result } = location.state || {};  // 결과 데이터

  return (
    <div>
      <Header /> 
      <div>
        {result ? (
          <div>
            <p>{result.type}</p> 
            <p>{JSON.stringify(result.output)}</p> 
          </div>
        ) : (
          <p>결과를 불러올 수 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
