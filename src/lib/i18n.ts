export type Lang = 'en' | 'ja';

export const t = {
  nav: {
    home:       { en: 'Home',       ja: 'ホーム' },
    about:      { en: 'About',      ja: '自己紹介' },
    work:       { en: 'My Work',    ja: 'プロジェクト' },
    education:  { en: 'Education',  ja: '学歴' },
    experience: { en: 'Experience', ja: '職歴' },
    contact:    { en: 'Contact',    ja: 'お問い合わせ' },
  },
  home: {
    badge:    { en: 'Available for internship', ja: 'インターン希望' },
    title1:   { en: "Hi, I'm", ja: 'はじめまして' },
    title3:   { en: 'Kuramoto.', ja: '倉本 航平です。' },
    desc:     { en: 'Data Engineer & Full-Stack Developer based in Melbourne, Australia. Passionate about building scalable data pipelines and modern web applications.', ja: 'メルボルン在住のデータエンジニア／フルスタック開発者。データパイプラインの設計からWebアプリ開発まで、技術で課題を解決することに情熱を注いでいます。' },
    cta1:     { en: 'View My Work', ja: 'プロジェクトを見る' },
    cta2:     { en: 'My Resume',    ja: '職務経歴書' },
  },
  about: {
    label:    { en: 'About Me',  ja: '自己紹介' },
    title:    { en: 'Who I am', ja: '私について' },
    p1:       { en: "I'm a 4th-year Information Technology student at Monash University, specialising in Software Development. As an Australian permanent resident originally from Japan, I bring a cross-cultural perspective to every project I work on.", ja: 'モナッシュ大学情報技術学部4年生として、ソフトウェア開発を専攻しています。日本で生まれ育ち、オーストラリアに永住権を持つという経歴から、多角的な視点でプロジェクトに取り組んでいます。' },
    p2:       { en: 'During my Data Engineer internship at eSolutions, I built production-grade data ingestion pipelines processing over 7 million rows on Databricks. I also completed an exchange program at KTH Royal Institute of Technology in Sweden, where I collaborated with an international team to ship a full-stack AI-powered web app.', ja: 'eSolutionsでのインターンでは、Databricks上で700万行超のデータを処理する本番用パイプラインを一から構築。スウェーデンのKTH王立工科大学への交換留学では、国際チームでAIを活用したフルスタックWebアプリを開発し、リリースまで担当しました。' },
    p3:       { en: 'My strength is my eagerness to learn — I thrive in fast-paced environments where I can pick up new technologies quickly and apply them to real products.', ja: '学習意欲の高さが私の強みです。新しい技術をスピーディに吸収し、実際のプロダクトへと落とし込む環境で最大限に力を発揮します。' },
    edu:      { en: 'Education',        ja: '学歴' },
    exchange: { en: 'Exchange Program', ja: '交換留学' },
    exp:      { en: 'Experience',       ja: '職歴' },
    location: { en: 'Location',         ja: '居住地' },
    lang:     { en: 'Languages',        ja: '言語' },
    langVal:  { en: 'Japanese · English', ja: '日本語・英語' },
    locVal:   { en: 'Melbourne, Australia', ja: 'オーストラリア・メルボルン' },
    locSub:   { en: 'Australian Permanent Resident', ja: '永住権保持者' },
  },
  work: {
    label:    { en: 'My Work',           ja: 'プロジェクト' },
    title:    { en: "Projects I've built", ja: '開発したプロジェクト' },
    subtitle: { en: 'A selection of real-world projects — from solo builds to team collaborations and client deliveries.', ja: '個人開発・チーム開発・クライアント納品まで、実際に開発したプロジェクトをご紹介します。' },
    demo:     { en: 'Live Demo', ja: 'デモを見る' },
    github:   { en: 'GitHub',    ja: 'GitHub' },
    projects: {
      habitquest: {
        type: { en: 'Personal Project', ja: '個人開発' },
        desc: { en: 'A gamified habit-tracking web app where users level up a character by completing daily habits. Built end-to-end from requirements to deployment.', ja: '日々の習慣をRPG風にゲーム化したウェブアプリ。習慣をこなすとキャラクターが成長する仕組みを、要件定義からデプロイまで一人で設計・開発。' },
      },
      tracquiz: {
        type:    { en: 'Team Project · Sweden Exchange', ja: 'チーム開発・スウェーデン留学' },
        desc:    { en: 'An AI-powered multiplayer quiz game that generates questions from any Spotify playlist link. Built with a Swedish team of 4 during my exchange at KTH.', ja: '好きなSpotifyプレイリストからAIが自動でクイズを生成するマルチプレイゲーム。KTH留学中にスウェーデン人チーム4名と共同開発。' },
        warning: { en: 'Firebase free plan has expired — the demo may be inaccessible.', ja: 'Firebaseの無料プランの期限が切れており、デモにアクセスできない場合があります。' },
      },
      melulun: {
        type: { en: 'Client Project · Team of 2', ja: 'クライアント案件・2名チーム' },
        desc: { en: 'A job and housing finder built for Japanese working holiday makers in Australia. Developed with a partner and delivered to a real client.', ja: 'オーストラリアでワーキングホリデーをする日本人向けの求人・住居マッチングサービス。2名チームで開発し、実際のクライアントへ納品。' },
      },
    },
  },
  education: {
    label:    { en: 'Education',        ja: '学歴' },
    title:    { en: 'Academic Journey', ja: '学びの軌跡' },
    subtitle: { en: 'My academic path across Australia and Sweden.', ja: 'オーストラリアとスウェーデンで積み上げた学びの記録。' },
    current:  { en: 'Currently Enrolled', ja: '在学中' },
    exchange: { en: 'Exchange Program',   ja: '交換留学' },
    award:    { en: '2023 Academic Achievement Award · Peer Mentor', ja: '2023年学業優秀賞受賞・ピアメンター' },
  },
  experience: {
    label:      { en: 'Experience',        ja: '職歴' },
    title:      { en: 'Work & Leadership', ja: '職務経歴・リーダーシップ' },
    subtitle:   { en: 'Hands-on industry experience and leadership roles.', ja: '現場での実務経験とリーダーとしての取り組み。' },
    skills:     { en: 'KEY SKILLS GAINED', ja: '習得したスキル' },
    leadership: { en: 'Leadership',        ja: 'リーダーシップ' },
  },
  contact: {
    label:    { en: 'Contact Me',          ja: 'お問い合わせ' },
    title:    { en: "Let's work together", ja: '一緒に働きましょう' },
    subtitle: { en: "I'm currently open to internship and part-time opportunities. Feel free to reach out — I'd love to connect!", ja: '現在インターンやパートタイムの機会を探しています。お気軽にご連絡ください！' },
    resume:   { en: 'Resume PDF', ja: '職務経歴書' },
    footer:   { en: '© 2026 Kohei Kuramoto · Built with Next.js & Tailwind CSS', ja: '© 2026 倉本航平 · Next.js & Tailwind CSS で制作' },
  },
};
