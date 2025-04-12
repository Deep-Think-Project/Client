import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Summary from "../components/Summary";
import Intent from "../components/Intent";
import Sentences from "../components/Sentences";
import "../styles/ResultPage.css";
import logo from "../assets/logo.png";

/**
 * ResultPage Component
 *
 * This component is responsible for rendering the results page after user input is processed.
 * It extracts the result object passed via React Router's location state and conditionally renders:
 * - A watermark logo
 * - A Header component
 * - A Summary of the content
 * - An analysis of the author's intent
 * - A list of key sentences with their reasoning
 *
 * If the `result` object is not available, it displays an error message.
 */
function ResultPage() {
  const location = useLocation();
  const result = location.state?.result;

  return (
    <div className="result-page">
      {/* Watermark logo overlay for branding */}
      <div className="watermark-logo">
        <img src={logo || "/placeholder.svg"} alt="Watermark" />
      </div>

      {/* Global header */}
      <Header />

      {result ? (
        <div className="content">
          {/* Summary of the analyzed text */}
          <Summary summary={result.results.summary} />

          <div className="main-divider"></div>

          {/* Detected author intent */}
          <Intent intent={result.results.author_intent} />

          <div className="main-divider"></div>

          {/* Key sentences with optional reasoning */}
          <Sentences
            sentences={result.sentences.map((sentence) => ({
              ...sentence,
              reason: sentence.reason || []
            }))}
          />
        </div>
      ) : (
        // Display an error message if result data is missing
        <div className="error-message">Unable to load result data.</div>
      )}
    </div>
  );
}

export default ResultPage;
