"use client";
import React, { useState, useEffect } from "react";
import "./page.css";
import NavigationBar from "./components/NavigationBar";
import QueueContainer from "./components/QueueContainer";
import LoadingScreen from "./components/LoadingScreen"; // ← 追加
// import Maintenance from "./components/Maintenance";
// import OfficialAccount from "./components/OfficialAccount";


const TicketQuePage: React.FC = () => {
  const [showGroup, setShowGroup] = useState(true);
  const [loading, setLoading] = useState(true);

  // 疑似的にローディングを 1.5 秒間表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ ローディング中は全画面表示
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <NavigationBar />

      <div className="attraction-queue">
        <QueueContainer />
        {/* <Maintenance/> */}
      </div>
    </div>
  );
};

export default TicketQuePage;
