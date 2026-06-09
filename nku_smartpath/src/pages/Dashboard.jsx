import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BatteryCharging, Lock, PlayCircle, Sparkles, Target, Waves } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  getCourseDescription,
  getCourseTitle,
  recommendCourses,
  studentProfile,
  weeklyEnergy,
} from '../data/mockData';

const iconByType = {
  target: Target,
  relax: Waves,
  hardSkill: Sparkles,
};

const labelByType = {
  target: 'target',
  relax: 'relax',
  hardSkill: 'hardSkill',
};

function loadProfile() {
  try {
    return JSON.parse(localStorage.getItem('smartpath-profile')) || null;
  } catch {
    return null;
  }
}

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const [energy, setEnergy] = useState(loadProfile()?.energy || 72);
  const profile = loadProfile() || {
    goal: 'Web Designer',
    marketReason:
      'Петропавлдағы шағын бизнес, білім беру ұйымдары және агро-кәсіпорындарға сайт пен интерфейс қажет.',
    demand: 91,
    skills: ['React', 'Tailwind CSS', 'UX research', 'Figma'],
  };

  const recommendations = useMemo(
    () => recommendCourses({ goal: profile.goal, energy }),
    [profile.goal, energy],
  );

  const energyHint = energy < 45 ? t('energyHintLow') : energy < 70 ? t('energyHintMid') : t('energyHintHigh');

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="pill mb-4 inline-flex">{studentProfile.university}</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">{t('dashboardTitle')}</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Мақсат: <span className="font-bold text-cyanGlow">{profile.goal}</span>. {profile.marketReason}
          </p>
        </div>
        <Link to="/analytics" className="secondary-button">
          {t('navAnalytics')}
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-[2rem] p-6"
        >
          <div className="flex items-center gap-3">
            <BatteryCharging className="text-mintGlow" />
            <div>
              <p className="text-sm text-slate-400">{t('energy')}</p>
              <h2 className="text-4xl font-black text-white">{energy}%</h2>
            </div>
          </div>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-roseGlow via-violetGlow to-mintGlow"
              animate={{ width: `${energy}%` }}
              transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            />
          </div>

          <input
            aria-label="Academic energy"
            type="range"
            min="20"
            max="100"
            value={energy}
            onChange={(event) => setEnergy(Number(event.target.value))}
            className="mt-6 w-full accent-cyanGlow"
          />

          <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-300">{energyHint}</p>

          <div className="mt-7 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyEnergy}>
                <defs>
                  <linearGradient id="energyGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#94A3B8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16 }} />
                <Area type="monotone" dataKey="energy" stroke="#22D3EE" fill="url(#energyGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-black text-white">{t('recommendations')}</h2>
            <p className="pill">{t('marketFit')}: {profile.demand}%</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {recommendations.map(({ type, course, locked }, index) => {
              const Icon = iconByType[type];
              return (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 25, rotateX: -8 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.48 }}
                  whileHover={{ y: -10, rotate: index === 1 ? 1.2 : -1.2 }}
                  className="glass-card relative min-h-[390px] overflow-hidden p-5"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyanGlow/10 blur-2xl" />
                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-semibold text-cyanGlow">
                        {t(labelByType[type])}
                      </span>
                      <Icon className="text-violetGlow" />
                    </div>
                    <h3 className="text-xl font-black leading-tight text-white">{getCourseTitle(course, i18n.language)}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{getCourseDescription(course, i18n.language)}</p>

                    <div className="mt-6 space-y-3 text-sm">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-400">Faculty</span>
                        <span className="font-semibold text-white">{course.faculty}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-400">Duration</span>
                        <span className="font-semibold text-white">{course.duration}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-400">Market fit</span>
                        <span className="font-semibold text-mintGlow">{course.marketFit}%</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`mt-7 w-full ${locked ? 'secondary-button opacity-75' : 'primary-button'}`}
                    >
                      {locked ? <Lock size={18} /> : <PlayCircle size={18} />}
                      {locked ? t('blocked') : t('open')}
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-6 glass-panel rounded-3xl p-5">
            <p className="text-sm text-slate-400">Skill vector</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
