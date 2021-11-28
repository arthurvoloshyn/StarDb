import React from 'react';

import './error-indicator.css';

import icon from '../../images/death-star.png';

const ErrorIndicator = () => {
  const handleReload = () => window.location.reload();
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
      <button type="button" className="btn btn-outline-danger" onClick={handleReload}>
        Reload
      </button>
    </div>
  );
};

export default ErrorIndicator;
