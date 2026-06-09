import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, LineChart, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: BrainCircuit,
    title: 'Ikigai Onboarding',
    text: 'Студенттің эмоциясы, қызығушылығы және нарық мүмкіндігін байланыстыратын қысқа тест.',
  },
  {
    icon: Sparkles,
    title: 'EduBalancing',
    text: 'Энергия төмендегенде ауыр курстарды блоктап, қалпына келу ұсыныстарын береді.',
  },
  {
    icon: LineChart,
    title: 'Experiment-ready',
    text: 'Комиссияға классикалық әдіс пен AI ұсынысты салыстыратын визуалды аналитика.',
  },
];

export default function Landing() {
  const { t } = useTranslation();

  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <div className="pill mb-6 inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-mintGlow shadow-[0_0_18px_rgba(52,211,153,.9)]" />
          {t('heroBadge')}
        </div>
        <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="gradient-text">{t('heroTitle')}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{t('heroLead')}</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link to="/onboarding" className="primary-button">
            {t('landingCta')}
            <ArrowRight size={19} />
          </Link>
          <Link to="/analytics" className="secondary-button">
            {t('analyticsCta')}
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * index, duration: 0.5 }}
              className="glass-card p-5"
            >
              <feature.icon className="mb-4 text-cyanGlow" size={25} />
              <h3 className="font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
      >
        <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyanGlow/20 via-violetGlow/10 to-mintGlow/10 blur-3xl" />
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Student profile</p>
              <h2 className="mt-1 text-3xl font-black text-white">Ақбаян</h2>
            </div>
            <div className="rounded-full bg-mintGlow/15 px-4 py-2 text-sm font-semibold text-mintGlow">Energy 72%</div>
          </div>

          <div className="mt-8 space-y-4">
            {['Goal: Web Designer', 'Market fit: 96%', 'Next course: React + Tailwind', 'Balance: podcast + UX research'].map((item, index) => (
              <motion.div
                key={item}
                animate={{ x: [0, index % 2 === 0 ? 8 : -8, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
              >
                <p className="text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
