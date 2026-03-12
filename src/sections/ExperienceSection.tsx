"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

const esolutionsImages = [
  "/images/esolutions1.JPEG",
  "/images/esolutions2.JPEG",
  "/images/esolutions3.JPEG",
  "/images/esolutions4.JPG",
];

export default function ExperienceSection() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? esolutionsImages.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === esolutionsImages.length - 1 ? 0 : i + 1));

  const bullets = {
    en: [
      "Designed and maintained production-grade data ingestion pipelines for Cornerstone and Databricks",
      "Ingested 7M+ rows of structured data across multiple ingestion jobs on Databricks",
      "Implemented API-based ingestion workflows using a newly introduced ingestion library",
      "Collaborated with 3 cross-functional teams to define requirements and validate schemas",
      "Investigated and resolved ingestion failures by analysing logs and API responses",
    ],
    ja: [
      "CornerstoneおよびDatabricks向けの本番グレードのデータ取り込みパイプラインを設計・開発・保守",
      "Databricks上で700万行以上の構造化データを複数ジョブで安定処理",
      "新規APIベースの取り込みライブラリを導入し、新フレームワーク移行を推進",
      "3つのクロスファンクショナルチームと連携し、スキーマ設計・障害調査を担当",
      "APIレスポンスおよびログ解析により本番障害を特定・解決し、安定性を向上",
    ],
  };

  const leadership = [
    {
      icon: "🎌",
      title: "Monash Japanese Club",
      sub: {
        en: "Social Media Marketing · Jul 2024 – Nov 2024",
        ja: "SNSマーケティング · 2024年7月〜11月",
      },
      bullets: {
        en: [
          "Increased Instagram follower engagement by 32% through strategic post timing via Meta Suite",
          "Boosted event participation by 23%+ through targeted Instagram campaigns using Canva",
          "Co-developed 10+ pieces of content highlighting Japanese cultural traditions",
        ],
        ja: [
          "Meta Suiteを活用した投稿タイミングの最適化でInstagramエンゲージメントを32%向上",
          "Canvaを使ったターゲット広告でイベント参加者を23%以上増加",
          "日本文化を発信するコンテンツを10件以上共同制作",
        ],
      },
    },
    {
      icon: "📚",
      title: "Monash College",
      sub: {
        en: "Peer Mentor · Jun 2023 – Dec 2023",
        ja: "ピアメンター · 2023年6月〜12月",
      },
      bullets: {
        en: [
          "Improved student GPA by an average of +0.3 through customised 1-on-1 tutoring sessions",
          "Increased workshop attendance by 60% by promoting seminars on campus",
        ],
        ja: [
          "個別指導により学生のGPAを平均+0.3向上",
          "キャンパスでのセミナー告知によりワークショップ参加者を60%増加",
        ],
      },
    },
  ];

  return (
    <section
      id="experience"
      className="py-28"
      style={{ background: "#080C14" }}
    >
      <div className="max-w-5xl mx-auto px-8">
        <p
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: "12px",
            letterSpacing: "3px",
            color: "#4F8EF7",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {t.experience.label[lang]}
        </p>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}
        >
          {t.experience.title[lang]}
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#7A8CA3",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
        >
          {t.experience.subtitle[lang]}
        </p>

        <div
          style={{
            padding: "32px",
            borderRadius: "20px",
            background: "rgba(79,142,247,0.04)",
            border: "1px solid rgba(79,142,247,0.15)",
            marginBottom: "24px",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: "52px",
                    height: "52px",
                    background:
                      "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
                    fontSize: "24px",
                  }}
                >
                  🏢
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "22px",
                      color: "white",
                      marginBottom: "4px",
                    }}
                  >
                    eSolutions
                  </h3>
                  <p style={{ fontSize: "14px", color: "#7A8CA3" }}>
                    {lang === "en"
                      ? "Data Engineer Intern · Jul 2025 – Dec 2025 · 6 months"
                      : "データエンジニアインターン · 2025年7月〜12月 · 6ヶ月"}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  "Databricks",
                  "Apache Spark",
                  "Python",
                  "ETL",
                  "SQL",
                  "API Integration",
                ].map((s) => (
                  <span
                    key={s}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "99px",
                      fontSize: "12px",
                      fontFamily: "DM Mono, monospace",
                      background: "rgba(79,142,247,0.1)",
                      color: "#4F8EF7",
                      border: "1px solid rgba(79,142,247,0.2)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul style={{ listStyle: "none" }}>
                {bullets[lang].map((b, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "14px",
                      color: "#7A8CA3",
                      padding: "5px 0 5px 20px",
                      position: "relative",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#4F8EF7",
                        fontSize: "12px",
                      }}
                    >
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#111827",
              }}
            >
              <Image
                src={esolutionsImages[current]}
                alt={`eSolutions ${current + 1}`}
                width={800}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  opacity: 0.9,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(8,12,20,0.6) 0%, transparent 60%)",
                }}
              />

              <button
                onClick={prev}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(8,12,20,0.7)",
                  border: "1px solid rgba(79,142,247,0.3)",
                  color: "#4F8EF7",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ‹
              </button>
              <button
                onClick={next}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(8,12,20,0.7)",
                  border: "1px solid rgba(79,142,247,0.3)",
                  color: "#4F8EF7",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ›
              </button>

              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "6px",
                }}
              >
                {esolutionsImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      width: i === current ? "20px" : "8px",
                      height: "8px",
                      borderRadius: "99px",
                      background:
                        i === current ? "#4F8EF7" : "rgba(255,255,255,0.3)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "20px",
              borderRadius: "12px",
              background: "rgba(79,142,247,0.05)",
              border: "1px solid rgba(79,142,247,0.1)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontFamily: "DM Mono, monospace",
                color: "#4F8EF7",
                letterSpacing: "1px",
                marginBottom: "12px",
              }}
            >
              {t.experience.skills[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {(lang === "en"
                ? [
                    "Production Data Pipelines",
                    "ETL / ELT",
                    "Data Quality Monitoring",
                    "Cross-team Collaboration",
                    "Log Analysis & Debugging",
                    "API Integration",
                  ]
                : [
                    "本番データパイプライン",
                    "ETL / ELT",
                    "データ品質管理",
                    "クロスチーム連携",
                    "ログ解析・障害対応",
                    "API統合",
                  ]
              ).map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "5px 12px",
                    background: "rgba(79,142,247,0.08)",
                    border: "1px solid rgba(79,142,247,0.15)",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontFamily: "DM Mono, monospace",
                    color: "#4F8EF7",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: "11px",
            letterSpacing: "3px",
            color: "#4F8EF7",
            textTransform: "uppercase",
            marginBottom: "20px",
            marginTop: "48px",
          }}
        >
          🌟 {t.experience.leadership[lang]}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((card) => (
            <div
              key={card.title}
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "rgba(79,142,247,0.04)",
                border: "1px solid rgba(79,142,247,0.1)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    background:
                      "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
                    fontSize: "22px",
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "18px",
                      color: "white",
                      marginBottom: "4px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#7A8CA3" }}>
                    {card.sub[lang]}
                  </p>
                </div>
              </div>
              <ul style={{ listStyle: "none" }}>
                {card.bullets[lang].map((b, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "14px",
                      color: "#7A8CA3",
                      padding: "5px 0 5px 20px",
                      position: "relative",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#4F8EF7",
                        fontSize: "12px",
                      }}
                    >
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
