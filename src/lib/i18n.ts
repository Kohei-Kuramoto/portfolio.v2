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
    badge:    { en: 'Available for internship', ja: 'インターン募集中' },
    title1:   { en: "Hi, I'm", ja: 'はじめまして' },
    title3:   { en: 'Kuramoto.', ja: '倉本 航平です。' },
    desc:     { en: 'Data Engineer & Full-Stack Developer based in Melbourne, Australia. Passionate about building scalable data pipelines and modern web applications.', ja: 'オーストラリア・メルボルン在住のデータエンジニア／フルスタック開発者。スケーラブルなデータパイプラインとモダンなウェブアプリの開発に情熱を持っています。' },
    cta1:     { en: 'View My Work', ja: 'プロジェクトを見る' },
    cta2:     { en: 'My Resume',    ja: '職務経歴書' },
  },
  about: {
    label:    { en: 'About Me',  ja: '自己紹介' },
    title:    { en: 'Who I am', ja: '私について' },
    p1:       { en: "I'm a 4th-year Information Technology student at Monash University, specialising in Software Development. As an Australian permanent resident originally from Japan, I bring a cross-cultural perspective to every project I work on.", ja: 'モナッシュ大学でソフトウェア開発を専攻する情報技術学部4年生です。日本出身のオーストラリア永住者として、あらゆるプロジェクトに多文化的な視点をもたらしています。' },
    p2:       { en: 'During my Data Engineer internship at eSolutions, I built production-grade data ingestion pipelines processing over 7 million rows on Databricks. I also completed an exchange program at KTH Royal Institute of Technology in Sweden, where I collaborated with an international team to ship a full-stack AI-powered web app.', ja: 'eSolutionsでのデータエンジニアインターンでは、Databricks上で700万行以上を処理する本番グレードのパイプラインを構築しました。スウェーデンのKTH王立工科大学への交換留学では、国際チームでフルスタックのAIウェブアプリを開発・リリースしました。' },
    p3:       { en: 'My strength is my eagerness to learn — I thrive in fast-paced environments where I can pick up new technologies quickly and apply them to real products.', ja: '私の強みは高い学習意欲です。新しい技術を素早く習得し、実際のプロダクトに活かせる環境でこそ力を発揮できます。' },
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
        desc: { en: 'A gamified habit-tracking web app where users level up a character by completing daily habits. Built end-to-end from requirements to deployment.', ja: '習慣をRPGゲームで楽しめるウェブアプリ。要件定義からデプロイまで一貫して担当。' },
      },
      tracquiz: {
        type:    { en: 'Team Project · Sweden Exchange', ja: 'チーム開発・スウェーデン留学' },
        desc:    { en: 'An AI-powered multiplayer quiz game that generates questions from any Spotify playlist link. Built with a Swedish team of 4 during my exchange at KTH.', ja: 'SpotifyプレイリストからAIがクイズを自動生成するマルチプレイゲーム。KTH留学中にスウェーデン人4名と開発。' },
        warning: { en: 'Firebase free plan has expired — the demo may be inaccessible.', ja: 'Firebaseの無料プランの期限が切れており、デモにアクセスできない場合があります。' },
      },
      melulun: {
        type: { en: 'Client Project · Team of 2', ja: 'クライアント案件・2名チーム' },
        desc: { en: 'A job and housing finder built for Japanese working holiday makers in Australia. Developed with a partner and delivered to a real client.', ja: 'オーストラリアのワーキングホリデー向け求人・住居マッチングサービス。クライアントに納品済み。' },
      },
    },
  },
  education: {
    label:    { en: 'Education',        ja: '学歴' },
    title:    { en: 'Academic Journey', ja: '学歴の歩み' },
    subtitle: { en: 'My academic path across Australia and Sweden.', ja: 'オーストラリアとスウェーデンでの学びの歩み。' },
    current:  { en: 'Currently Enrolled', ja: '在学中' },
    exchange: { en: 'Exchange Program',   ja: '交換留学' },
    award:    { en: '2023 Academic Achievement Award · Peer Mentor', ja: '2023年学業優秀賞受賞・ピアメンター' },
  },
  experience: {
    label:      { en: 'Experience',        ja: '職歴' },
    title:      { en: 'Work & Leadership', ja: '職務経歴・リーダーシップ' },
    subtitle:   { en: 'Hands-on industry experience and leadership roles.', ja: '実務経験とリーダーシップ活動。' },
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
