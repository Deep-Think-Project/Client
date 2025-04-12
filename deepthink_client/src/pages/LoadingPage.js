import React from 'react';
import Header from '../components/Header';
import Progress from '../components/Progress';
import ToolTip from '../components/ToolTip';

/**
 * LoadingPage Component
 *
 * This component is displayed while background processes (e.g., API requests or text analysis)
 * are being performed. It provides the user with visual feedback during the loading state.
 *
 * Props:
 * - loading (boolean): Indicates whether the system is currently performing a loading operation.
 *
 * Structure:
 * - Header: Global application header.
 * - ToolTip: Provides contextual information or user guidance.
 * - Progress: Visual indicator reflecting the progress or state of the loading operation.
 */
function LoadingPage({ loading }) {
  return (
    <div>
      <Header />
      
      {/* Contextual tooltip for user guidance */}
      <p><ToolTip /></p>

      {/* Loading progress indicator */}
      <p><Progress loading={loading} /></p>
    </div>
  );
}

export default LoadingPage;
