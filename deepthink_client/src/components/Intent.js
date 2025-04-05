import "../styles/Intent.css"

const Intent = ({ intent }) => {
  return (
    <div className="intent-container">
      <div className="intent-title">
        <div className="intent-title-dot"></div>
        <div className="intent-title-text">작성자의 의도</div>
      </div>
      <div className="intent-content">
        {intent && intent.length > 0 ? (
          <ul>
            {intent.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>의도 정보가 없습니다.</p>
        )}
      </div>
    </div>
  )
}

export default Intent
