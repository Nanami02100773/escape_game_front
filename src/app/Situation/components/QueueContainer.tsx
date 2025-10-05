"use client";
import React, { useState, useEffect } from "react";
import Selection from "./Selection";
import "./QueueContainer.css";

type Ticket = {
  id: number;
  ticket_number: string;
  number_of_people: number;
  status: string;
};

const QueueContainer: React.FC = () => {
  const [displayText, setDisplayText] = useState(0);
  const [showTitle, setShowTitle] = useState("待ち組数");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [inputNumber, setInputNumber] = useState<string>("");

  // ✅ 呼び出し番号の取得
  const getCallCount = () => {
    const calledTickets = tickets
      .filter((ticket) => ticket.status === "待合室呼び出し中")
      .map((ticket) => Number(ticket.ticket_number))
      .filter((num) => !isNaN(num));
    const maxCalled = calledTickets.length > 0 ? Math.max(...calledTickets) : 0;
    setDisplayText(maxCalled);
  };

  // ✅ 待ち組数の取得
  const getWaitCount = (inputValue: string) => {
    let cNumValue = 0;
    if (inputValue) {
      const timesNum = tickets.find(
        (t) => t.ticket_number === inputValue && t.status !== "終了"
      )?.id;
      cNumValue = timesNum ?? 0;
    }

    const waitCount = tickets.filter(
      (ticket) =>
        ticket.status !== "終了" &&
        cNumValue &&
        Number(ticket.id) < cNumValue
    ).length;

    setDisplayText(waitCount);
  };

  // 🎫 チケットデータ取得
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch(
          "https://staff-backend-orpin.vercel.app/api/tickets"
        );
        const data: Ticket[] = await res.json();
        setTickets(data);
      } catch {
        setDisplayText(0);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div className="queue-container">
      <div className="queue-title">現在状況</div>

      <Selection title={showTitle} value={displayText} />

      {/* ✅ 入力＋検索 */}
      <div className="input-row">
        <input
          type="number"
          placeholder="1以上の番号を入力してください"
          className="number-input"
          min="1"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || Number(value) < 1) {
              setInputNumber("");
            } else {
              setInputNumber(value);
            }
          }}
          value={inputNumber}
        />
        <button
          className="search-button"
          onClick={() => {
            if (!inputNumber) return;
            setShowTitle("待ち組数");
            getWaitCount(inputNumber);
          }}
        >
          検索
        </button>
      </div>

      {/* ✅ ボタンエリア */}
      <div className="button-row">
        <button
          className={showTitle === "待ち組数" ? "active" : ""}
          onClick={() => {
            setShowTitle("待ち組数");
            getWaitCount(inputNumber);
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
  );
};

export default QueueContainer;
