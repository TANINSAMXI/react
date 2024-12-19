"use strict";

import PropTypes from "prop-types"; // Import PropTypes

function Props({ message }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Props Example</h5>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
}

Props.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function ParentComponent() {
  const message = `
       *   
      ***  
     ***** 
      |||    
  `;

  return <Props message={message} />;
}
