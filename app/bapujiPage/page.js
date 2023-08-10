"use client";
// pages/VideoPage.js
import React, { useState } from "react";
import Bapuji from "@/components/bapuji";

const VideoPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Open Video Popup</button>
      {isPopupOpen && <Bapuji onClose={closePopup} />}
    </div>
  );
};

export default VideoPage;
