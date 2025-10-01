"use client";
import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 0 → 100 まで 2秒で進む
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 500); // 少し待ってからフェードアウト
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <p className="loading-text">LOADING... {progress}%</p>
        <div className="loading-bar">
          <div
            className="loading-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
