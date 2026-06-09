import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { inferGoalFromIkigai } from '../data/mockData';

const questions = [
  {
    id: 'emotion',
    kk: 'Соңғы кезде оқу барысында қандай сезім басым?',
    ru: 'Какое чувство чаще всего возникает во время учебы?',
    options: [
      { value: 'visual calm design', kk: 'Креатив пен визуалға қызығамын', ru: 'Интерес к креативу и визуалу' },
      { value: 'data focus analytics', kk: 'Дерек пен нақты дәлел ұнайды', ru: 'Нравятся данные и доказательства' },
      { value: 'agro nature product', kk: 'Табиғат, ауыл және пайдалы өнім қызықтырады', ru: 'Интересуют природа, село и полезный продукт' },
    ],
  },
  {
    id: 'interest',
    kk: 'Қандай тапсырманы рахаттанып жасар едіңіз?',
    ru: 'Какую задачу вы бы делали с удовольствием?',
    options: [
      { value: 'ui interface design', kk: 'Мобильді қосымшаның интерфейсін салу', ru: 'Проектировать интерфейс приложения' },
      { value: 'analytics dashboard data', kk: 'Диаграмма арқылы шешім ұсыну', ru: 'Предлагать решение через диаграммы' },
      { value: 'agro digital farming', kk: 'Агро-процесті цифрландыру идеясын ойлау', ru: 'Придумывать цифровизацию агро-процесса' },
    ],
  },
  {
    id: 'energy',
    kk: 'Бүгінгі академиялық энергияңыз қандай?',
    ru: 'Какая сегодня академическая энергия?',
    options: [
      { value: 'low', kk: 'Төмен, жеңіл формат керек', ru: 'Низкая, нужен легкий формат', energy: 38 },
      { value: 'mid', kk: 'Орташа, қысқа практикаға дайынмын', ru: 'Средняя, готова к короткой практике', energy: 64 },
      { value: 'high', kk: 'Жоғары, күрделі курс бастай аламын', ru: 'Высокая, могу начать сложный курс', energy: 86 },
    ],
  },
];

export default function Onboarding() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);

  const current = questions[step];
  const selected = answers[current.id];
  const isLast = step === questions.length - 1;

  const progress = useMemo(() => Math.round(((step + 1) / questions.length) * 100), [step]);

  const choose = (option) => {
    setAnswers((prev) => ({ ...prev, [current.id]: option }));
  };

  const next = () => {
    if (!selected) return;
    if (!isLast) {
      setStep((value) => value + 1);
      return;
    }

    const answerValues = Object.values({ ...answers, [current.id]: selected }).map((item) => item.value);
    const goal = inferGoalFromIkigai(answerValues);
    const energy = selected.energy || 72;

    localStorage.setItem(
      'smartpath-profile',
      JSON.stringify({
        goal: goal.role,
        marketReason: goal.reason,
        demand: goal.demand,
        skills: goal.skills,
        energy,
        completedOnboarding: true,
      }),
    );

    navigate('/dashboard');
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <p className="pill mx-auto mb-5 inline-flex">{progress}%</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">{t('ikigaiTitle')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">{t('ikigaiSubtitle')}</p>
        </motion.div>

        <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-cyanGlow to-violetGlow" animate={{ width: `${progress}%` }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28 }}
            >
              <h2 className="text-2xl font-black text-white sm:text-3xl">{current[i18n.language] || current.kk}</h2>
              <div className="mt-7 grid gap-4">
                {current.options.map((option) => {
                  const active = selected?.value === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => choose(option)}
                      className={`flex items-center justify-between rounded-3xl border p-5 text-left transition ${
                        active
                          ? 'border-cyanGlow/70 bg-cyanGlow/10 shadow-neon'
                          : 'border-white/10 bg-white/[0.06] hover:border-white/20 hover:bg-white/[0.1]'
                      }`}
                    >
                      <span className="text-lg font-semibold text-white">{option[i18n.language] || option.kk}</span>
                      {active && <CheckCircle2 className="text-cyanGlow" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-end">
            <button onClick={next} disabled={!selected} className="primary-button disabled:cursor-not-allowed disabled:opacity-40" type="button">
              {isLast ? t('continue') : t('continue')}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
