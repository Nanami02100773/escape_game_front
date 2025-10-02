"use client";
import Image from "next/image";
import "./Description1.css";
import { useEffect, useRef } from "react";

const Description = () => {
  // summary-section の参照を保存する配列
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
      {/* 企画紹介 → refは不要（アニメーションなし） */}
      <div className="summary-section">
        <div className="summary-title main">企画紹介</div>
      </div>

      {/* 白い大きなボックス */}
      <div className="summary-card">
        {/* あらすじ */}
        <div
          className="summary-section fade-in"
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
        >
          <div className="summary-title">あらすじ</div>
          <div className="summary-content-box">
            <div className="summary-content">
              ⽬覚めると、そこは⾒覚えのない部屋。どうやら、密室に閉じ込められてしまったようだ。
              そんなあなたの⽬の前には、なんと時限爆弾が。カウントダウンはすでに始まっている…！
              爆発を阻⽌するためには、この部屋に散りばめられた謎を解く必要がありそうだ。
              さあ、あなたは⽌まらない時限爆弾を解除して、この部屋から脱出できますか？
            </div>
          </div>
        </div>

        {/* ルール */}
        <div
          className="summary-section fade-in"
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
        >
          <div className="summary-title">ルール</div>
          <div className="summary-content-box">
            <div className="summary-content">
              <p>・部屋の中に隠された謎解きを探し、爆弾の解除に挑戦するゲームです。</p>
              <p>・制限時間は１０分です。</p>
            </div>
          </div>
        </div>

        {/* 注意事項 */}
        <div
          className="summary-section fade-in"
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
        >
          <div className="summary-title">注意事項</div>
          <div className="summary-content-box">
            <div className="summary-content">
              <p>・本企画は 1 ⼈から 6 ⼈のグループで参加していただく脱出ゲームです。</p>
              <p>・原則、ゲーム中の⼊退場はできません。緊急の場合等に限り、お近くの⼤学祭実⾏委員にお申し出ください。</p>
              <p>・危険ですので、机と椅⼦の上には乗らないでください。</p>
              <p>・場内は喫煙禁⽌です。</p>
              <p>・場内は飲⾷禁⽌です。</p>
              <p>・ゴミは指定の場所に分別して捨ててください。</p>
              <p>・ゴミ箱は AIT プラザ前、セントラルパーク、12 号館前、愛和会館にあります。</p>
              <p>・場内の備品を破損した場合、弁償してもらうことがあります。</p>
              <p>・⼤学祭実⾏委員の指⽰に従ってください。従わずに⽣じた事故、トラブルに関して⼤学祭実⾏委員会は⼀切責任を負いません。</p>
              <p>・上記のことが守れない場合は退場してもらうことがあります。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
