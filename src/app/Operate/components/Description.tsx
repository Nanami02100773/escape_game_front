"use client";
import Image from "next/image";
import "./Description.css";
import { useEffect, useRef } from "react";

const Description = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="summary-container">

      {/* 操作説明タイトル → アニメーションなし */}
      <div className="summary-section">
        <div className="summary-title main">操作説明</div>
      </div>

      {/* 白い大きなボックス */}
      <div className="summary-card">

        {/* 更新ボタン */}
        <div
          className="summary-section fade-in"
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
        >
          <div className="summary-title">更新ボタン</div>
          <div className="summary-content-box">
            <div className="summary-row">
              <Image
                src="/7EACD1E9-B7BC-481F-8C4B-18F561000DAB.jpg"
                alt="更新ボタン説明画像"
                className="summary-side-image"
                width={120}
                height={120}
              />
              <div className="summary-content no-wrap">
                この画面は自動で更新されません。
                最新の情報を見るには 更新ボタン を押してください。
              </div>
            </div>
          </div>
        </div>

        {/* 待ち組数 */}
        <div
          className="summary-section fade-in"
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
        >
          <div className="summary-title">待ち組数</div>
          <div className="summary-content-box">
            <div className="summary-row">
              <div className="summary-image-column">
                <Image
                  src="/スクリーンショット 2025-09-30 152246.png"
                  alt="待ち組数画像1"
                  className="summary-side-image"
                  width={150}
                  height={100}
                />
                <Image
                  src="/スクリーンショット 2025-09-30 152233.png"
                  alt="待ち組数画像2"
                  className="summary-side-image"
                  width={150}
                  height={100}
                />
              </div>
              <div className="summary-content no-wrap">
                制限時間は60分です。スマートフォンやメモの使用は可能です。スタッフからのヒントは最大3回まで受け取れます。
              </div>
            </div>
          </div>
        </div>

        {/* お呼び出し番号 */}
        <div
          className="summary-section fade-in"
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
        >
          <div className="summary-title">お呼び出し番号</div>
          <div className="summary-content-box">
            <div className="summary-row">
              <div className="summary-image-column">
                <Image
                  src="/スクリーンショット 2025-09-30 152320.png"
                  alt="お呼び出し番号画像1"
                  className="summary-side-image"
                  width={150}
                  height={100}
                />
                <Image
                  src="/スクリーンショット 2025-09-30 152309.png"
                  alt="お呼び出し番号画像2"
                  className="summary-side-image"
                  width={150}
                  height={100}
                />
              </div>
              <div className="summary-content no-wrap">
                危険行為は禁止です。他の参加者の迷惑になる行為はご遠慮ください。途中退出はスタッフにお知らせください。
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Description;
