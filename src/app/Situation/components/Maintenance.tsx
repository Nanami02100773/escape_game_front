"use client";
import React from "react";
import "./Maintenance.css";

const TicketQuePage: React.FC = () => {
  return (
    <div className="maintenance-screen">
      <div className="maintenance-box">
        <h1>🛠️ メンテナンス中</h1>
        <p>現在システムのメンテナンスを実施しています</p>
        <p>システムが復帰するまでしばらくお待ちください</p>
      </div>
    </div>
  );
};

export default TicketQuePage;
