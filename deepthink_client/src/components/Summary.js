import "../styles/Summary.css";

/**
 * Summary Component
 *
 * This component displays a summary of the analyzed content.
 * It shows a list of summary points, or a placeholder message if no summary data is available.
 *
 * Props:
 * - summary (array): An array of summary items to be displayed as a list.
 */
const Summary = ({ summary }) => {
  return (
    <div className="summary-container">
      {/* Section title with an icon and label for "Summary" */}
      <div className="summary-title">
        <div className="summary-title-dot"></div>
        <div className="summary-title-text">요약</div>
      </div>

      {/* Renders the summary content */}
      <div className="summary-content">
        {summary && summary.length > 0 ? (
          <ul>
            {/* Maps each summary item to a list element */}
            {summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          // Fallback message if no summary is available
          <p>요약 정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Summary;
