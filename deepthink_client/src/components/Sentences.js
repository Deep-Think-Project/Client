"use client"

import { useState } from "react"
import "../styles/Sentences.css"

const Sentences = ({ sentences }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  // 문장 타입별 스타일 맵핑
  const getSentenceClass = (type) => {
    switch (type) {
      case "clear_sentence":
        return "highlight-green"
      case "ambiguous_sentence":
        return "highlight-purple"
      default:
        return ""
    }
  }

  // 클릭 시 테두리 스타일 결정
  const getActiveClass = (index, type) => {
    if (selectedIndex === index) {
      return type === "clear_sentence" ? "active-green" : "active-purple"
    }
    return ""
  }

  // reason이 없으면 클릭 방지 및 스타일 비활성화
  const isClickable = (item) => item.reason && item.reason.length > 0

  return (
    <div className="sentences-container">
      <div className="sentences-title">
        <div className="sentences-title-dot"></div>
        <div className="sentences-title-text">분석 결과</div>
      </div>

      <div className="sentences-content">
        <div className="sentence-list">
          {sentences.map((item, index) => {
            const clickable = isClickable(item)
            return (
              <div
                key={index}
                className={`sentence-item ${getSentenceClass(item.type)} ${getActiveClass(index, item.type)} ${!clickable ? "disabled" : ""}`}
                onClick={() => {
                  if (clickable) setSelectedIndex(index)
                }}
              >
                <span className="highlight-text">{item.sentence}</span>
              </div>
            )
          })}
        </div>

        <div className="divider"></div>

        <div className="reason-display">
          <div className="reason-title">
            <div className="reason-title-dot"></div>
            <div className="reason-title-text">이유</div>
          </div>

          <div className="reason-content">
            {selectedIndex !== null && selectedIndex < sentences.length ? (
              <p>{sentences[selectedIndex].reason}</p> // 문자열을 바로 출력
            ) : (
              <p className="placeholder-text">하이라이트 된 텍스트를 클릭해보세요</p>
            )}
          </div>
          {/* 다른 해석 */}
          <div className="interpretation-display">
            {selectedIndex !== null && selectedIndex < sentences.length && sentences[selectedIndex].other_interpretations ? (
              <>
                <div className="interpretation-title">
                  <div className="interpretation-title-dot"></div>
                  <div className="interpretation-title-text">다른 해석</div>
                </div>
                <div className="interpretation-content">
                  <ul>
                    {sentences[selectedIndex].other_interpretations.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>

          {/* 참고 자료 (references) */}
          <div className="reference-display">
            {selectedIndex !== null && selectedIndex < sentences.length && sentences[selectedIndex].references?.length > 0 ? (
              <div className="reference-display">
              <div className="reference-title">
              <div className="reference-title-dot"></div>
              <div className="reference-title-text">참고 자료</div>
            </div>
          <div className="reference-content">
          <ul>
        {sentences[selectedIndex].references.map((ref, i) => (
          <li key={i}>
            <a href={ref.url} target="_blank" rel="noopener noreferrer">
              {ref.source_title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
) : null}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Sentences
