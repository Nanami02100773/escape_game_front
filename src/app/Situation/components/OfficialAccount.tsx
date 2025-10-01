"use client";
import React from "react";
import Image from "next/image";
import "./OfficialAccount.css";

export default function SocialLinks() {
  return (
    <div className="social-container">
      {/* タイトル */}
      <h2 className="social-title queue-title">公式SNS</h2>
      <p className="social-subtitle">フォローして最新情報をチェックしよう</p>

      <div className="social-icons">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/ait_fes"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Image
            src="/instagram_15713420.png"
            alt="Instagram"
            width={50}
            height={50}
          />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/aitfes"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Image
            src="/D5070F83-7A98-4038-A0E1-BF698A2EE0B0.png"
            alt="X"
            width={50}
            height={50}
          />
        </a>

        {/* 公式HP */}
        <a
          href="https://aitech.ac.jp/~festival/top.html"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Image
            src="/A2462755-21F5-482C-A082-1139B5F8B0BB.png"
            alt="Website"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  );
}
