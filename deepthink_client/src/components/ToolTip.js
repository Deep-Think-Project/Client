import "../styles/ToolTip.css"

const ToolTip = () => {
  return (
    <div className="container">
      <p className="description">각 문장은 두가지 종류로 하이라이트 됩니다.</p>
      <div className="highlight-container">
        <div className="left-section">
          {/* 초록색 박스 */}
          <div className="green-box">
            <div className="green-title">태양은 동쪽에서 떠서 서쪽으로 진다.</div>
          </div>
          <ul className="green-list">
            <li>명료한 문장</li>
            <li>한 가지 해석만 가능한 문장</li>
          </ul>
        </div>

        <div className="right-section">
          {/* 보라색 박스 */}
          <div className="purple-box">
            <div className="purple-title">우리나라 경제는 망하고 있다.</div>
          </div>
          <ul className="purple-list">
            <li>여러가지 해석이 가능한 문장</li>
            <li>비판적 사고가 필요한 문장</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToolTip

