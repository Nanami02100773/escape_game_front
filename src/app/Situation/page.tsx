"use client";
import React from "react";
import "./page.css";
// import NavigationBar from "./components/NavigationBar";
// import QueueContainer from "./components/QueueContainer";
// import LoadingScreen from "./components/LoadingScreen";
import Maintenance from "./components/Maintenance";
// import OfficialAccount from "./components/OfficialAccount";

const TicketQuePage: React.FC = () => {
  return (
    <div>
      {/* <NavigationBar /> */}
      {/* <div className="attraction-queue">
        <QueueContainer />
      </div> */}
      
      {/* ✅ メンテナンス画面のみ表示 */}
      <Maintenance />
    </div>
  );
};

export default TicketQuePage;
