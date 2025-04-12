import { useState } from "react";
import "../styles/Sentences.css";

/**
 * Sentences Component
 *
 * This component displays a list of analyzed sentences classified by type (e.g., clear or ambiguous).
 * When a sentence is selected, it shows an explanation, alternate interpretations, and references.
 *
 * Props:
 * - sentences (array): An array of sentence objects with the following structure:
 *   {
 *     sentence: string,
 *     type: "clear_sentence" | "ambiguous_sentence",
 *     reason: string | array,
 *     other_interpretations?: string[],
 *     references?: [{ url: string, source_title: string }]
 *   }
 */
const Sentences = ({ sentences }) => {
  const [selectedIndex, setSelectedIndex] = useState(null); // Tracks the index of the currently selected sentence

  /**
   * Returns a CSS class based on the sentence type
   * Used to highlight sentences visually by category
   */
  const getSentenceClass = (type) => {
    switch (type) {
      case "clear_sentence":
        return "highlight-green";
      case "ambiguous_sentence":
        return "highlight-purple";
      default:
        return "";
    }
  };

  /**
   * Returns a class that applies an active border if the sentence is selected
   * The color matches the sentence type
   */
  const getActiveClass = (index, type) => {
    if (selectedIndex === index) {
      return type === "clear_sentence" ? "active-green" : "active-purple";
    }
    return "";
  };

  /**
   * Determines if a sentence is clickable
   * Only sentences with non-empty reason fields are interactable
   */
  const isClickable = (item) => item.reason && item.reason.length > 0;

  return (
    <div className="sentences-container">
      {/* Header Section: Label and legend for sentence types */}
      <div className="sentences-title">
        <div className="sentences-title-left">
          <div className="sentences-title-dot"></div>
          <div className="sentences-title-text">분석 결과</div>
        </div>
        <div className="sentences-title-right">
          <div className="title-box highlight-green">명료한 문장</div>
          <div className="title-box highlight-purple">모호한 문장</div>
        </div>
      </div>

      <div className="sentences-content">
        {/* List of analyzed sentences */}
        <div className="sentence-list">
          {sentences.map((item, index) => {
            const clickable = isClickable(item);
            return (
              <div
                key={index}
                className={`sentence-item ${getSentenceClass(item.type)} ${getActiveClass(index, item.type)} ${!clickable ? "disabled" : ""}`}
                onClick={() => {
                  if (clickable) setSelectedIndex(index);
                }}
              >
                <span className="highlight-text">{item.sentence}</span>
              </div>
            );
          })}
        </div>

        <div className="divider"></div>

        {/* Explanation Section */}
        <div className="reason-display">
          <div className="reason-title">
            <div className="reason-title-dot"></div>
            <div className="reason-title-text">이유</div>
          </div>

          <div className="reason-content">
            {selectedIndex !== null && selectedIndex < sentences.length ? (
              <p>{sentences[selectedIndex].reason}</p>
            ) : (
              <p className="placeholder-text">하이라이트 된 텍스트를 클릭해보세요</p>
            )}
          </div>

          {/* Alternate Interpretations */}
          <div className="interpretation-display">
            {selectedIndex !== null &&
              selectedIndex < sentences.length &&
              sentences[selectedIndex].other_interpretations ? (
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

          {/* Reference Links */}
          <div className="reference-display">
            {selectedIndex !== null &&
              selectedIndex < sentences.length &&
              sentences[selectedIndex].references?.length > 0 ? (
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
  );
};

export default Sentences;
