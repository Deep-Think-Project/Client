import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Summary from "../components/Summary"
import Intent from "../components/Intent"
import Sentences from "../components/Sentences"
import "../styles/ResultPage.css"
import logo from "../assets/logo.png"

function ResultPage() {
  const location = useLocation()
  const result = location.state?.result;

  return (
    <div className="result-page">
      {/* Add watermark logo */}
      <div className="watermark-logo">
        <img src={logo || "/placeholder.svg"} alt="Watermark" />
      </div>

      {/* ✅ 헤더 컴포넌트 */}
      <Header />

      {/* ✅ result 데이터가 있을 경우 출력 */}
      {result ? (
        <div className="content">
          <Summary summary={result.results.summary} />

          <div className="main-divider"></div>

          <Intent intent={result.results.author_intent} />

          <div className="main-divider"></div>

          <Sentences sentences={result.sentences.map((sentence) => ({ ...sentence, reason: sentence.reason || [] }))} />
        </div>
      ) : (
        // ✅ result가 없을 경우 에러 메시지
        <div className="error-message">결과를 불러올 수 없습니다.</div>
      )}
    </div>
  )
}

export default ResultPage
