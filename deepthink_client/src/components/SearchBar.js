import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.css';

/**
 * SearchBar Component
 *
 * This component allows the user to input a URL or text for analysis.
 * On submission, it initiates a POST request to the backend and navigates through the app accordingly.
 *
 * Props:
 * - setLoading (function): Updates the global loading state, triggering the loading screen.
 *
 * Behavior:
 * - Validates non-empty input before submission.
 * - Navigates to the loading screen while awaiting a response from the server.
 * - Upon successful response, waits 5 seconds before navigating to the result page.
 * - Handles errors gracefully with console output.
 */
function SearchBar({ setLoading }) {
  const [inputValue, setInputValue] = useState(""); // Stores user input from the text field
  const navigate = useNavigate(); // Provides access to navigation API

  // 1. Read 'auto_url' from query string and use it in input and handleSubmit
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  // Get the query parameter (?auto_url=...) from the browser URL
  const autoUrl = params.get('auto_url');
  // If auto_url exists,
  if (autoUrl) {
    const decodedUrl = decodeURIComponent(autoUrl);
    // Automatically fill the input field with the decoded value
    setInputValue(decodedUrl);
    setTimeout(() => {
      handleSubmitFromEffect(decodedUrl);
    }, 300); // Slight delay to ensure input is updated before submitting
  }
  // eslint-disable-next-line
}, []);

// 2. Define a function inside useEffect to act like handleSubmit
const handleSubmitFromEffect = async (url) => {
  if (url.trim() !== "") {
    setLoading(true);
    navigate('/loading');

    try {
      const response = await axios.post('main_app/', {
        input: url,
      });

      console.log('Server response:', response.data);

      setTimeout(() => {
        setLoading(false);
        navigate('/result', { state: { result: response.data } });
      }, 5000);
    } catch (error) {
      console.error('Server error:', error);
      setLoading(false);
    }
  } else {
    console.log('Please enter a valid input.');
  }
};

  /**
   * Handles changes in the input field
   * Updates the state with the current user-typed value
   */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /**
   * Handles form submission
   * - Validates input
   * - Sends POST request to backend
   * - Navigates between pages based on state
   */
  const handleSubmit = async () => {
    if (inputValue.trim() !== "") {
      setLoading(true);
      navigate('/loading');

      try {
        const response = await axios.post('main_app/', {
          input: inputValue,
        });

        console.log('Server response:', response.data);

        // Delay navigation to simulate analysis time or ensure loader visibility
        setTimeout(() => {
          setLoading(false);
          navigate('/result', { state: { result: response.data } });
        }, 5000);
      } catch (error) {
        console.error('Server error:', error);
        setLoading(false);
      }
    } else {
      console.log('Please enter a valid input.');
    }
  };

  return (
    <div className="main-content">
      <div className="tagline-container">
        <div className="tagline">당신이 생각할 기회를 제공합니다</div>
      </div>
      <div className="content-wrapper">
        <h1 className="instruction">URL 혹은 분석을 원하는 정보를 입력해주세요.</h1>
        <div className="search-container">
          <div className="input-wrapper">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="url 혹은 정보 ex) 뉴스 기사, 블로그 등"
            />
          </div>
          <button onClick={handleSubmit}>
            분석
            <span className="button-shine"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
