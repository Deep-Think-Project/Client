import "../styles/Summary.css"

const Summary = ({ summary }) => {
  return (
    <div className="summary-container">
      <div className="summary-title">
        <div className="summary-title-dot"></div>
        <div className="summary-title-text">요약</div>
      </div>
      <div className="summary-content">
        {summary && summary.length > 0 ? (
          <ul>
            {summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>요약 정보가 없습니다.</p>
        )}
      </div>
    </div>
  )
}

export default Summary
