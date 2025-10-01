"use client";
import React from "react";
import Link from "next/link"; // ✅ 追加
import "./Selection.css";

type NumberProps = {
  title: string;
  value: number;
  href?: string; // ✅ リンク先をオプションで指定できるようにする
};

const Number: React.FC<NumberProps> = ({ title, value, href }) => {
  const content = (
    <div className="display-box">
      <h2 className="display-title">{title}</h2>
      <p className="display-number">{value}</p>
    </div>
  );

  // ✅ href があれば Link でラップ、なければ普通の表示
  return href ? <Link href={href}>{content}</Link> : content;
};

export default Number;
