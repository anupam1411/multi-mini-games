import React, { useRef } from "react";

const Bapuji = ({ onClose }) => {
  const videoRef = useRef(null);

  const onVideoEnd = () => {
    onClose();
  };

  return (
    <div className="video-popup">
      <div className="video-container">
        <video
          ref={videoRef}
          controls
          onEnded={onVideoEnd}
          width="640" // Set the width of the video
          height="360" // Set the height of the video
        >
          <source src="/public/baapuji.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Bapuji;
