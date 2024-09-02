import React from 'react';
import '../css/DepressedBoy.css'; // Import CSS file for styling

const DepressedBoy = () => {
  return (
    <div className="depressed-boy">
      <div className="head">
        <div className="face">
          <div className="eyes"></div>
          <div className="mouth"></div>
        </div>
      </div>
      <div className="body"></div>
      <div className="message">
        <p>Bhai aaj *****</p>
      </div>
    </div>
  );
};

export default DepressedBoy;
