import "../styles/ToolTip.css";

/**
 * ToolTip Component
 *
 * This component provides a visual guide for sentence classification. 
 * It explains the two types of highlighted sentences: clear (green) and ambiguous (purple).
 * It uses example sentences to illustrate the differences.
 */
const ToolTip = () => {
  return (
    <div className="container">
      {/* Description of sentence highlighting */}
      <p className="description">각 문장은 두가지 종류로 하이라이트 됩니다.</p>
      <div className="highlight-container">
        {/* Left section: Represents clear and objective sentences */}
        <div className="left-section">
          <div className="green-box">
            {/* Example of a clear, objective sentence */}
            <div className="green-title">태양은 동쪽에서 떠서 서쪽으로 진다.</div>
          </div>
          <ul className="green-list">
            {/* Lists characteristics of clear sentences */}
            <li>명료한 문장</li>
            <li>한 가지 해석만 가능한 문장</li>
          </ul>
        </div>

        {/* Right section: Represents ambiguous or opinion-based sentences */}
        <div className="right-section">
          <div className="purple-box">
            {/* Example of an ambiguous or opinion-based sentence */}
            <div className="purple-title">인공지능이 인간을 지배할 것이다.</div>
          </div>
          <ul className="purple-list">
            {/* Lists characteristics of ambiguous sentences */}
            <li>여러가지 해석이 가능한 문장</li>
            <li>비판적 사고가 필요한 문장</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
