/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course } from './types';

export const TEACHER_INFO = {
  name: "Gulhayo Sodiqjonova",
  credentials: [
    "CEFR C1 Level English",
    "Xalqaro Webster universiteti diplomi",
    "TEFL Sertifikati"
  ],
  bio: "Professional pedagog ва xalqaro toifadagi sertifikatlangan ingliz tili o'qituvchisi. Webster universiteti bitiruvchisi hamda TEFL xalqaro metodika sertifikati egasi. O'quvchilarga ingliz tilini zamonaviy va samarali usullar orqali o'rgatishda 5 yildan ortiq tajribaga ega.",
  achievements: [
    "500+ muvaffaqiyatli bitiruvchilar",
    "IELTS 7.5+ natijalar",
    "Innovatsion o'qitish metodikasi",
    "Akademik yozish bo'yicha mutaxassis"
  ]
};

export const CONTACT_INFO = {
  phone: "+998952249812",
  telegram: "Gulhayos_Academmy",
  location: "Online / O'zbekiston"
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Madina Axmedova",
    role: "IELTS O'quvchisi",
    text: "Gulhayo ustoz bilan 2 oy davomida IELTSga tayyorlandim. Writing va Speaking bo'yicha juda ko'p foydali strategiyalarni o'rgandim. Natijam 7.5 chiqdi!",
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    id: 2,
    name: "Javohir Ergashev",
    role: "General English",
    text: "O'qitish uslubi juda ajoyib. Darslar zerikarli emas, aksincha har doim interaktiv o'tadi. Til to'sig'ini engib o'tishimda Gulhayo opa yordam berdilar.",
    avatar: "https://picsum.photos/seed/user2/100/100"
  },
  {
    id: 3,
    name: "Nilufar Orifova",
    role: "Advanced English",
    text: "Webster diplomi va tajribasi dars jarayonida yaqqol seziladi. Akademik ingliz tilini o'rganishni istaganlarga aynan shu kurslarni tavsiya qilaman.",
    avatar: "https://picsum.photos/seed/user3/100/100"
  }
];

export const COURSES: Course[] = [
  {
    id: "general-english",
    title: "General English",
    subtitle: "Boshlang'ichdan yuqori darajagacha",
    duration: "8 Hafta",
    level: "Barcha darajalar",
    description: "Ingliz tilini har tomonlama o'rganish: so'zlashuv, eshitish, o'qish va yozish ko'nikmalarini tizimli rivojlantirish.",
    price: "Kelishilgan holda",
    features: [
      "Interaktiv darslar",
      "Kichik guruhlar",
      "Haftalik sinovlar",
      "Individual yondashuv"
    ],
    modules: [
      { id: 1, title: "Asoslar (Grammar)", description: "Asosiy grammatika va zaruriy so'z boyligi." },
      { id: 2, title: "Kundalik muloqot", description: "Kundalik vaziyatlarda erkin gapirish." },
      { id: 3, title: "Eshitish ko'nikmasi", description: "Native speakerlarni tushunish darslari." },
      { id: 4, title: "Grammatika mahorati", description: "Murakkab gap tuzilmalari." },
      { id: 5, title: "So'z boyligini oshirish", description: "Idiomalar va collocationlar." },
      { id: 6, title: "Yozish asoslari", description: "Aniq va samarali yozish mahorati." },
      { id: 7, title: "Fluency Practice", description: "Tez va ravon gapirish mashqlari." },
      { id: 8, title: "Yakuniy imtihon", description: "Sertifikat uchun bilimni tekshirish." }
    ]
  },
  {
    id: "ielts-intensive",
    title: "IELTS Intensive",
    subtitle: "Imtihonga tayyorgarlik",
    duration: "8 Hafta",
    level: "B2 - C1",
    description: "IELTS imtihonining barcha qismlari uchun maxsus strategiyalar va intensiv mashqlar.",
    price: "Kelishilgan holda",
    features: [
      "Mock imtihonlar",
      "Writing tekshiruvi",
      "Speaking intervyular",
      "Eksklyuziv materiallar"
    ],
    modules: [
      { id: 1, title: "IELTS Formati", description: "Imtihon tizimi bilan tanishuv." },
      { id: 2, title: "Listening Strategies", description: "Eshitish bo'yicha maxsus usullar." },
      { id: 3, title: "Reading Techniques", description: "Skimming va scanning sirlari." },
      { id: 4, title: "Writing Task 1", description: "Grafik va jadvallar tahlili." },
      { id: 5, title: "Writing Task 2", description: "Essay yozish qoidalari." },
      { id: 6, title: "Speaking Mastery", description: "Ravonlik va talaffuz ustida ishlash." },
      { id: 7, title: "To'liq Mock imtihonlar", description: "Vaqt bilan ishlash mashqlari." },
      { id: 8, title: "Imtihon oldi maslahatlar", description: "Psixologik tayyorgarlik va final check." }
    ]
  }
];
