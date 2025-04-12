import "../styles/Intent.css";

/**
 * Intent Component
 *
 * This component displays a list of inferred author intents based on the input text.
 * It handles both rendering of valid intent data and fallback UI when no data is available.
 *
 * Props:
 * - intent (array of strings): A list of author intent descriptions.
 *
 * UI Structure:
 * - A section title with a decorative dot and label
 * - A list of intent items rendered as bullet points
 * - A fallback message if the intent list is empty or undefined
 */
const Intent = ({ intent }) => {
  return (
    <div className="intent-container">
      {/* Section title with decorative dot and label */}
      <div className="intent-title">
        <div className="intent-title-dot"></div>
        <div className="intent-title-text">작성자의 의도</div>
      </div>

      {/* Conditional rendering of intent content */}
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
  );
};

export default Intent;
