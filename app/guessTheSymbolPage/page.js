"use client";
import React, { useState, useEffect } from "react";
import GuessGame from "@/components/guessGame";

function GuessGamePage() {
  // const emojis = ["@", "#", "$", "%", "&", "?", "+", "="];
  const emojis = ["😊", "😑", "😂", "😒", "😁", "😉", "😎", "😮"];
  const [emoji, setemoji] = useState(null);

  useEffect(() => {
    setemoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }, []);

  if (!emoji) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-2xl md:text-4xl font-semibold mb-4">
        Find this emoji {emoji}
      </div>
      <GuessGame targetemoji={emoji} />
    </div>
  );
}

export default GuessGamePage;
