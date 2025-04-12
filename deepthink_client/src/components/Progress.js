import React, { useEffect, useState } from 'react';
import '../styles/Progress.css';

/**
 * Progress Component
 *
 * This component visually represents the loading state of an asynchronous operation
 * using a progress bar and percentage indicator.
 *
 * Props:
 * - loading (boolean): Controls the progress animation. When `true`, the progress bar
 *   simulates gradual loading. When `false`, it immediately completes.
 *
 * Behavior:
 * - When loading begins, percentage increases from 0 to 99 over time (approx. 20s).
 * - Once loading completes, the percentage jumps to 100%.
 * - The interval is cleared on unmount or when loading state changes.
 */
function Progress({ loading }) {
    const [percentage, setPercentage] = useState(0); // Tracks the current progress value (0–100)

    useEffect(() => {
        let interval;

        if (loading) {
            // Increment progress gradually up to 99% to simulate ongoing activity
            interval = setInterval(() => {
                setPercentage(prev => (prev < 99 ? prev + 1 : 99));
            }, 303); // 303ms interval results in ~20s total to reach 99%
        } else {
            // Instantly complete the progress when loading ends
            setPercentage(100);
        }

        // Cleanup interval to avoid memory leaks or unwanted updates
        return () => clearInterval(interval);
    }, [loading]);

    return (
        <div className="progress-container">
            {/* Informative message during the summarization process */}
            <p>정보를 요약 중입니다...</p>

            {/* Visual progress bar */}
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {/* Numeric percentage display */}
            <p className="percentage">{percentage}%</p>
        </div>
    );
}

export default Progress;
