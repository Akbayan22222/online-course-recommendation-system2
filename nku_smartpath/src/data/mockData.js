export const studentProfile = {
  name: 'Ақбаян',
  university: 'М. Қозыбаев атындағы Солтүстік Қазақстан университеті',
  region: 'Солтүстік Қазақстан облысы',
  faculty: 'Ақпараттық технологиялар',
  semester: 2,
};

export const laborMarketSignals = [
  {
    role: 'Web Designer',
    demand: 91,
    reason:
      'Петропавлдағы шағын бизнес, білім беру ұйымдары және агро-кәсіпорындарға сайт пен интерфейс қажет.',
    skills: ['React', 'Tailwind CSS', 'UX research', 'Figma'],
  },
  {
    role: 'Data Analyst',
    demand: 84,
    reason:
      'Агроөнеркәсіп, логистика және университеттік аналитикада деректермен жұмысқа сұраныс өсіп келеді.',
    skills: ['Python', 'SQL', 'BI dashboards', 'Statistics'],
  },
  {
    role: 'AgroTech Product Assistant',
    demand: 78,
    reason:
      'СҚО ауыл шаруашылығы бағыты цифрландыру, IoT мониторинг және өнімділік талдауын қажет етеді.',
    skills: ['IoT basics', 'Product thinking', 'Agro data', 'Communication'],
  },
];

export const courses = [
  {
    id: 'it-react-tailwind',
    faculty: 'IT',
    titleKk: 'React + Tailwind арқылы интерфейс жасау',
    titleRu: 'Интерфейсы на React + Tailwind',
    category: 'hard',
    level: 'medium',
    energyCost: 34,
    duration: '5 апта',
    marketFit: 96,
    targetRoles: ['Web Designer', 'Frontend Developer'],
    descriptionKk:
      'Glassmorphism, responsive layout және component-driven ойлау арқылы портфолиоға дайын интерфейстер құру.',
    descriptionRu:
      'Создание портфолио-интерфейсов с glassmorphism, responsive layout и component-driven подходом.',
  },
  {
    id: 'it-ux-research',
    faculty: 'IT',
    titleKk: 'UX зерттеу және студенттік өнім дизайны',
    titleRu: 'UX-исследование и дизайн студенческого продукта',
    category: 'goal',
    level: 'easy',
    energyCost: 18,
    duration: '3 апта',
    marketFit: 93,
    targetRoles: ['Web Designer', 'Product Designer'],
    descriptionKk:
      'Интервью, persona, journey map және прототип арқылы нақты студент мәселесін шешу.',
    descriptionRu:
      'Решение реальной проблемы студента через интервью, persona, journey map и прототип.',
  },
  {
    id: 'agro-digital-farming',
    faculty: 'Агрономия',
    titleKk: 'Дәл егіншілікке кіріспе',
    titleRu: 'Введение в точное земледелие',
    category: 'goal',
    level: 'medium',
    energyCost: 28,
    duration: '4 апта',
    marketFit: 88,
    targetRoles: ['AgroTech Product Assistant'],
    descriptionKk:
      'СҚО агро-нарығына арналған датчик, карта және өнімділік деректерін түсіну.',
    descriptionRu:
      'Понимание датчиков, карт и данных урожайности для агро-рынка СКО.',
  },
  {
    id: 'econ-digital-business',
    faculty: 'Экономика',
    titleKk: 'Цифрлық кәсіпкерлік және маркетплейс аналитикасы',
    titleRu: 'Цифровое предпринимательство и аналитика маркетплейсов',
    category: 'hard',
    level: 'medium',
    energyCost: 31,
    duration: '4 апта',
    marketFit: 82,
    targetRoles: ['Digital Business Analyst'],
    descriptionKk:
      'Солтүстік өңірдегі шағын бизнеске арналған unit-экономика және customer acquisition негіздері.',
    descriptionRu:
      'Основы unit-экономики и customer acquisition для малого бизнеса северного региона.',
  },
  {
    id: 'psy-focus-reset',
    faculty: 'Психология',
    titleKk: 'Фокус және күйзелісті басқару',
    titleRu: 'Фокус и управление стрессом',
    category: 'relax',
    level: 'easy',
    energyCost: -22,
    duration: '7 күн',
    marketFit: 74,
    targetRoles: ['All students'],
    descriptionKk:
      '10 минуттық breathing, journaling және оқу мотивациясын қалпына келтіру практикалары.',
    descriptionRu:
      '10-минутные практики дыхания, journaling и восстановления учебной мотивации.',
  },
  {
    id: 'podcast-design-north',
    faculty: 'Психология',
    titleKk: 'Подкаст: Солтүстіктегі дизайн мансабы',
    titleRu: 'Подкаст: дизайн-карьера на севере',
    category: 'relax',
    level: 'easy',
    energyCost: -16,
    duration: '45 мин',
    marketFit: 79,
    targetRoles: ['Web Designer'],
    descriptionKk:
      'СҚО-дағы қызмет көрсету, білім және агро салаларында дизайнның рөлі туралы жеңіл аудио.',
    descriptionRu:
      'Легкое аудио о роли дизайна в сервисе, образовании и агро-сфере СКО.',
  },
  {
    id: 'it-data-viz',
    faculty: 'IT',
    titleKk: 'Recharts арқылы деректерді визуалдау',
    titleRu: 'Визуализация данных через Recharts',
    category: 'hard',
    level: 'medium',
    energyCost: 30,
    duration: '2 апта',
    marketFit: 87,
    targetRoles: ['Data Analyst', 'Frontend Developer'],
    descriptionKk:
      'Комиссияға, деканатқа және студенттерге арналған интерактивті диаграммалар жасау.',
    descriptionRu:
      'Создание интерактивных диаграмм для комиссии, деканата и студентов.',
  },
];

export const experimentData = [
  { metric: 'Қызығушылық', classic: 54, smart: 88 },
  { metric: 'Аяқтау', classic: 49, smart: 81 },
  { metric: 'Энергия', classic: 46, smart: 86 },
  { metric: 'Нарық fit', classic: 58, smart: 92 },
];

export const weeklyEnergy = [
  { day: 'Дс', energy: 68 },
  { day: 'Сс', energy: 72 },
  { day: 'Ср', energy: 61 },
  { day: 'Бс', energy: 56 },
  { day: 'Жм', energy: 63 },
  { day: 'Сн', energy: 77 },
  { day: 'Жс', energy: 82 },
];

export const getCourseTitle = (course, language) =>
  language === 'ru' ? course.titleRu : course.titleKk;

export const getCourseDescription = (course, language) =>
  language === 'ru' ? course.descriptionRu : course.descriptionKk;

export function inferGoalFromIkigai(answers) {
  const text = answers.join(' ').toLowerCase();
  if (text.includes('дизайн') || text.includes('визуал') || text.includes('interface') || text.includes('ui')) {
    return laborMarketSignals[0];
  }
  if (text.includes('data') || text.includes('дерек') || text.includes('аналит')) {
    return laborMarketSignals[1];
  }
  if (text.includes('агро') || text.includes('ауыл') || text.includes('егін')) {
    return laborMarketSignals[2];
  }
  return laborMarketSignals[0];
}

export function recommendCourses({ goal = 'Web Designer', energy = 72 }) {
  const matching = courses.filter((course) => course.targetRoles.includes(goal) || course.targetRoles.includes('All students'));
  const target = matching.find((course) => course.category === 'goal') || courses.find((course) => course.category === 'goal');
  const relax = matching.find((course) => course.category === 'relax') || courses.find((course) => course.category === 'relax');
  const hard = matching.find((course) => course.category === 'hard') || courses.find((course) => course.category === 'hard');

  return [
    { type: 'target', course: target, locked: false },
    { type: 'relax', course: energy < 45 ? relax : relax, locked: false },
    { type: 'hardSkill', course: hard, locked: energy < 45 },
  ];
}
