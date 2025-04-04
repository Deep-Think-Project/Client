import "../styles/Intent.css"

const Intent = ({ intent }) => {
  return (
    <div className="intent-container">
      <div className="intent-title">
        <div className="intent-title-dot"></div>
        <div className="intent-title-text">작성자의 의도</div>
      </div>
      <div className="intent-content">{intent ? <p>{intent}</p> : <p>의도 정보가 없습니다.</p>}</div>
    </div>
  )
}

export default Intent

