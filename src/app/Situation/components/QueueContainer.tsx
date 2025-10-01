"use client";
import React, { useState, useEffect } from "react";
import Selection from "./Selection"; // 番号表示コンポーネント
import "./QueueContainer.css";


type Ticket = {
  ticket_number: string;
  number_of_people: number;
  status: string;
};

const QueueContainer: React.FC = () => {
  const [waitGroupCount, setWaitGroupCount] = useState(0);
  const [currentGroupNumber, setCurrentGroupNumber] = useState(0);
  const [displayText, setDisplayText] = useState(0);
  const [showTitle, setShowTitle] = useState("待ち組数");
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const getCallCount = () => {
    const calledTickets = tickets
      .filter((ticket) => ticket.status === "呼び出し中")
      .map((ticket) => Number(ticket.ticket_number))
      .filter((num) => !isNaN(num));
    const maxCalled = calledTickets.length > 0 ? Math.max(...calledTickets) : 0;
    setDisplayText(maxCalled);
    return;
  };

  // 🎫 APIから待ち組数と呼び出し番号を取得
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("https://fastapi-on-vercel-pi.vercel.app/api/tickets");
        const data: Ticket[] = await res.json();
        setTickets(data);

        const waitCount = data.filter((ticket) => ticket.status === "未呼び出し").length;
        setWaitGroupCount(waitCount);

        setDisplayText(waitCount);
      } catch {
        setWaitGroupCount(0);
        setCurrentGroupNumber(0);
        setDisplayText(0);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div className="queue-container">
      {/* ✅ タイトル */}
      <div className="queue-title">現在状況</div>

      {/* ✅ 番号表示部分 */}
      <Selection title={showTitle} value={displayText} />

      {/* ✅ 切り替えボタン */}
      <div className="button-group">
        <div className="button-row">
          <button
            className={showTitle === "待ち組数" ? "active" : ""}
            onClick={() => {
              setShowTitle("待ち組数");
              setDisplayText(waitGroupCount);
            }}
          >
            待ち組数
          </button>
          <button
            className={showTitle === "お呼び出し番号" ? "active" : ""}
            onClick={() => {
              setShowTitle("お呼び出し番号");
              getCallCount();
            }}
          >
            お呼び出し番号
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default QueueContainer;
