import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Languages } from 'lucide-react';

const navClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm transition ${
    isActive ? 'bg-white/15 text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'
  }`;

export default function Layout({ children }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === 'kk' ? 'ru' : 'kk';
    localStorage.setItem('smartpath-lang', next);
    i18n.changeLanguage(next);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyanGlow to-violetGlow text-slate-950 shadow-neon">
              <GraduationCap size={23} />
            </span>
            <span>
              <span className="block text-lg font-black tracking-tight text-white">NKU SmartPath</span>
              <span className="block text-xs text-slate-400">AI Course Recommender</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur-2xl md:flex">
            <NavLink to="/" className={navClass}>
              {t('navLanding')}
            </NavLink>
            <NavLink to="/dashboard" className={navClass}>
              {t('navDashboard')}
            </NavLink>
            <NavLink to="/analytics" className={navClass}>
              {t('navAnalytics')}
            </NavLink>
          </div>

          <button onClick={toggleLanguage} className="secondary-button px-4 py-2 text-sm" type="button" aria-label="Change language">
            <Languages size={17} />
            {t('language')}: {i18n.language.toUpperCase()}
          </button>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
