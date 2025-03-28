import React from 'react';
import '../styles/SearchBar.css';

function SearchBar() {
  return (
    <div className="main-content">
      <p className="instruction">URL 혹은 분석을 원하는 정보를 입력해주세요.</p>
      <div className="search-container">
        <input
          type="text"
          placeholder="url 혹은 정보 ex) 뉴스 기사, 블로그 등"
        />
        <button>분석</button>
      </div>
    </div>
  );
}

export default SearchBar;