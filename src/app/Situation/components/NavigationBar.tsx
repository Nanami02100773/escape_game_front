"use client";
import React from "react";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import Image from "next/image"; 
import "./NavigationBar.css";

export default function NavigationBar() {
  const pathname = usePathname();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      {/* --- ヘッダー --- */}
      <div className="header">
        <button className="reload-btn" onClick={handleReload}>
          <Image
            src="/58FC45D6-8529-4199-98BB-65ACCE2F353F.png"
            alt="更新"
            width={32}
            height={32}
            className="logo"
          />
        </button>
      </div>

      {/* --- フッター --- */}
      <div className="footer">
        {/* 現在状況 */}
        <Link
          href="/Situation"
          className={`footer-button ${pathname === "/Situation" ? "active" : ""}`}
        >
          <div className="footer-icon-text">
            <Image
              src="/BF0B6C86-9DCB-4015-B10B-84E4A4212146.png"
              alt="現在状況アイコン"
              width={40}
              height={40}
            />
            <span>現在状況</span>
          </div>
        </Link>

        {/* 企画紹介 */}
        <Link
          href="/ticket_que"
          className={`footer-button ${pathname === "/ticket_que" ? "active" : ""}`}
        >
          <div className="footer-icon-text">
            <Image
              src="/73DCA8A9-D395-4A4F-AC60-098E07DE158F.png"
              alt="企画紹介アイコン"
              width={40}
              height={40}
            />
            <span>企画紹介</span>
          </div>
        </Link>

        {/* 操作説明 */}
        <Link
          href="/Operate"
          className={`footer-button ${pathname === "/Operate" ? "active" : ""}`}
        >
          <div className="footer-icon-text">
            <Image
              src="/haguruma.png"
              alt="操作説明アイコン"
              width={40}
              height={40}
            />
            <span>操作説明</span>
          </div>
        </Link>
      </div>
    </>
  );
}

