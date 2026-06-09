import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  kk: {
    translation: {
      navLanding: 'Басты бет',
      navDashboard: 'Кабинет',
      navAnalytics: 'Эксперимент',
      start: 'Бастау',
      continue: 'Жалғастыру',
      language: 'Тіл',
      heroBadge: 'СҚУ студенттеріне арналған AI Course Recommender',
      heroTitle: 'Ақбаянға арналған интеллектуалды оқу траекториясы',
      heroLead:
        'Ikigai onboarding, академиялық энергия және еңбек нарығына бейімделген 3D ұсыныс карточкалары бір платформада.',
      landingCta: 'Икигай тестін өту',
      analyticsCta: 'Комиссияға аналитика',
      ikigaiTitle: 'Ikigai Onboarding',
      ikigaiSubtitle:
        '3 қысқа сұрақ арқылы қызығушылық, энергия және СҚО еңбек нарығындағы мүмкіндікті байланыстырамыз.',
      dashboardTitle: 'Ақбаянның SmartPath кабинеті',
      energy: 'Академиялық энергия',
      energyHintHigh: 'Күрделі hard-skill курстарын бастауға дайынсыз.',
      energyHintMid: 'Теңгерімді оқу ұсынылады: бір мақсат, бір жеңіл практика.',
      energyHintLow: 'Жүйе ауыр курстарды уақытша бұғаттап, релакс форматтарын ұсынады.',
      recommendations: 'Интеллектуалды ұсыныстар',
      marketFit: 'СҚО еңбек нарығына сәйкестік',
      blocked: 'Уақытша бұғатталған',
      open: 'Ашу',
      relax: 'Релакс',
      target: 'Мақсат',
      hardSkill: 'Hard-skill',
      analyticsTitle: 'Эксперименттік аналитика',
      analyticsSubtitle:
        'Кәдімгі курс тізімі мен SmartPath AI ұсыныс жүйесінің тиімділігін салыстыру.',
    },
  },
  ru: {
    translation: {
      navLanding: 'Главная',
      navDashboard: 'Кабинет',
      navAnalytics: 'Эксперимент',
      start: 'Начать',
      continue: 'Продолжить',
      language: 'Язык',
      heroBadge: 'AI Course Recommender для студентов СКУ',
      heroTitle: 'Интеллектуальная учебная траектория для Акбаян',
      heroLead:
        'Ikigai onboarding, академическая энергия и 3D-карточки рекомендаций с учетом рынка труда СКО в одной платформе.',
      landingCta: 'Пройти Ikigai-тест',
      analyticsCta: 'Аналитика для комиссии',
      ikigaiTitle: 'Ikigai Onboarding',
      ikigaiSubtitle:
        '3 коротких вопроса связывают интерес, энергию и возможности рынка труда СКО.',
      dashboardTitle: 'SmartPath-кабинет Акбаян',
      energy: 'Академическая энергия',
      energyHintHigh: 'Вы готовы к сложным hard-skill курсам.',
      energyHintMid: 'Рекомендуется баланс: одна цель и одна легкая практика.',
      energyHintLow: 'Система временно блокирует тяжелые курсы и предлагает релакс-форматы.',
      recommendations: 'Интеллектуальные рекомендации',
      marketFit: 'Соответствие рынку труда СКО',
      blocked: 'Временно заблокировано',
      open: 'Открыть',
      relax: 'Релакс',
      target: 'Цель',
      hardSkill: 'Hard-skill',
      analyticsTitle: 'Экспериментальная аналитика',
      analyticsSubtitle:
        'Сравнение обычного списка курсов и системы SmartPath AI.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('smartpath-lang') || 'kk',
  fallbackLng: 'kk',
  interpolation: { escapeValue: false },
});

export default i18n;
