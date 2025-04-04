import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Summary from "../components/Summary"
import Intent from "../components/Intent"
import Sentences from "../components/Sentences"
import Result from "./data.json"
import "../styles/ResultPage.css"

function ResultPage() {
  // 📌 네비게이션을 통해 전달된 데이터 가져오기
  const location = useLocation()
  // const result = location.state?.result;
  const result = Result

  return (
    <div className="result-page">
      {/* ✅ 헤더 컴포넌트 */}
      <Header />

      {/* ✅ result 데이터가 있을 경우 출력 */}
      {result ? (
        <div className="content">
          <Summary summary={result.output.summary} />

          <div className="main-divider"></div>

          <Intent intent={result.output.intent} />

          <div className="main-divider"></div>

          <Sentences sentences={result.output.sentences} />
        </div>
      ) : (
        // ✅ result가 없을 경우 에러 메시지
        <div className="error-message">결과를 불러올 수 없습니다.</div>
      )}
    </div>
  )
}

export default ResultPage

