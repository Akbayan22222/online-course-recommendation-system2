import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MetricCard from '../components/MetricCard';
import { experimentData } from '../data/mockData';

const timeline = [
  { week: '1 апта', classic: 42, smart: 61 },
  { week: '2 апта', classic: 45, smart: 72 },
  { week: '3 апта', classic: 47, smart: 79 },
  { week: '4 апта', classic: 49, smart: 86 },
];

export default function ExperimentAnalytics() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <p className="pill mb-4 inline-flex">Master dissertation dashboard</p>
        <h1 className="text-4xl font-black text-white sm:text-5xl">{t('analyticsTitle')}</h1>
        <p className="mt-4 max-w-3xl text-slate-300">{t('analyticsSubtitle')}</p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-4">
        <MetricCard label="AI ұсыныстың дәлдігі" value="92" caption="Ikigai + energy + market fit негізінде." />
        <MetricCard label="Курсты аяқтау ықтималдығы" value="81" caption="Классикалық әдістен 32 пункт жоғары." />
        <MetricCard label="Шаршауды азайту" value="38" caption="EduBalancing ауыр курсты уақытша тежейді." />
        <MetricCard label="Нарыққа сәйкестік" value="91" caption="СҚО сұранысына бейімделген мақсаттар." />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-[2rem] p-6">
          <h2 className="mb-5 text-xl font-black text-white">Классикалық әдіс vs SmartPath AI</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={experimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
                <XAxis dataKey="metric" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16 }} />
                <Legend />
                <Bar dataKey="classic" name="Кәдімгі тізім" fill="#64748B" radius={[10, 10, 0, 0]} />
                <Bar dataKey="smart" name="SmartPath AI" fill="#22D3EE" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <h2 className="mb-5 text-xl font-black text-white">4 апталық engagement динамикасы</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
                <XAxis dataKey="week" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16 }} />
                <Legend />
                <Line type="monotone" dataKey="classic" name="Кәдімгі әдіс" stroke="#94A3B8" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="smart" name="SmartPath AI" stroke="#A78BFA" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 lg:col-span-2">
          <h2 className="mb-5 text-xl font-black text-white">Ғылыми гипотезаға арналған радар-профиль</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={experimentData}>
                <PolarGrid stroke="rgba(255,255,255,.12)" />
                <PolarAngleAxis dataKey="metric" stroke="#CBD5E1" />
                <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16 }} />
                <Radar name="Кәдімгі әдіс" dataKey="classic" stroke="#64748B" fill="#64748B" fillOpacity={0.22} />
                <Radar name="SmartPath AI" dataKey="smart" stroke="#34D399" fill="#34D399" fillOpacity={0.28} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
