"use client"
import React, { useState, useEffect } from "react";

interface ProgressiveTextProps {
  text: string;
  speed?: number; // Vitesse en millisecondes entre chaque lettre
}

const ProgressiveText: React.FC<ProgressiveTextProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    // Nettoyage pour éviter des effets multiples
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default ProgressiveText;
