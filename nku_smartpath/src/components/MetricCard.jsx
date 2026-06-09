import { motion } from 'framer-motion';

export default function MetricCard({ label, value, suffix = '%', caption }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="glass-card p-5"
    >
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-4xl font-black text-white">
        {value}
        <span className="text-xl text-cyanGlow">{suffix}</span>
      </p>
      {caption && <p className="mt-3 text-sm leading-6 text-slate-300">{caption}</p>}
    </motion.div>
  );
}
