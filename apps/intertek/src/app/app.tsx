import { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { useSEO } from './hooks/useSEO';
import { ROUTES } from './constants/routes';
import { Card } from './components/Card';
import { Badge } from './components/Badge';
import { SectionHeader } from './components/SectionHeader';
import { PageWrapper } from './components/PageWrapper';

// ==========================================
// TYPES
// ==========================================

type ServiceCategory = 'Registration' | 'Crew' | 'Consultancy' | 'Safety' | 'Surveys' | 'Inspections';

interface Service {
  title: string;
  category: ServiceCategory;
}

interface Subsidiary {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
}

interface CompanyValue {
  title: string;
  description: string;
}

interface Office {
  label: string;
  city: string;
  country: string;
  address: string;
  email: string;
}

// ==========================================
// DATA
// ==========================================

const subsidiaries: Subsidiary[] = [
  {
    name: 'Legal Marine Tek',
    tagline: 'Top-Five Maritime Law Firm in Panama (2020–2024)',
    description: 'Ships & Corporates Registration, and Crew Endorsements.',
    tags: ['Maritime Law', "Ships' Registration", 'Crew Endorsements'],
  },
  {
    name: 'Intertek Maritime Bureau (ITMB)',
    tagline: 'Class, Statutory & Naval Architecture Services',
    description: 'Class, Statutory Services, and Naval Architecture across all vessel types.',
    tags: ['Class Services', 'Statutory', 'Naval Architecture'],
  },
  {
    name: 'Intertek Maritime Middle East',
    tagline: 'ISM & ISPS Specialists — NAVCOM & GMDSS',
    description: 'ISM & ISPS Services, Third Party Marine Surveys & Inspections (NAVCOM & GMDSS).',
    tags: ['ISM & ISPS', 'Marine Surveys', 'NAVCOM', 'GMDSS'],
  },
];

const services: Service[] = [
  { title: "Ships' Registration", category: 'Registration' },
  { title: "Offshore Corporates' Registration", category: 'Registration' },
  { title: 'Mortgages Registration', category: 'Registration' },
  { title: 'Crew Documentation & Endorsement', category: 'Crew' },
  { title: 'Class H&M Services & Consultancy', category: 'Consultancy' },
  { title: 'Statutory Services & Consultancy', category: 'Consultancy' },
  { title: 'Naval Architecture & Consultancy', category: 'Consultancy' },
  { title: 'ISM & ISPS Services and Consultancy', category: 'Safety' },
  { title: 'Third Party Marine Surveys', category: 'Surveys' },
  { title: 'Pre/Post-PSC Inspections', category: 'Inspections' },
  { title: 'Incident & Near-Miss Response Attendance', category: 'Inspections' },
  { title: 'MLC Crew Welfare Inspections', category: 'Crew' },
];

const companyValues: CompanyValue[] = [
  {
    title: 'Integrity & Honesty',
    description: 'We say what we mean and deliver what we promise; no exceptions.',
  },
  {
    title: 'Ethics & Accountability',
    description: 'Ethical misconduct is never overlooked; we are guided by truth, commitment, and the courage to do what is right.',
  },
  {
    title: 'Diversity & Inclusion',
    description:
      'Our team is multi-lingual, multi-cultural, and built on mutual respect; when everyone is included, everyone wins.',
  },
];

const markets: string[] = [
  'Deepsea Shipping',
  'Offshore Vessels, Tugs & Workboats',
  'Government & Port Authorities',
  'Fishing Boats and Pleasure Yachts',
];

const offices: Office[] = [
  {
    label: 'Head Office',
    city: 'Panama City',
    country: 'Panama',
    address: 'Calle 56 Marbella, Panama City',
    email: 'legal@intertekgroup.org',
  },
  {
    label: 'North America',
    city: 'Mississauga',
    country: 'Canada',
    address: '2386 Poplar Cres, L5J4H3, Mississauga, Ontario',
    email: 'aimy@intertekgroup.org',
  },
  {
    label: 'Middle East',
    city: 'Dubai',
    country: 'UAE',
    address: 'Mohammad bin Rashid Bldg, Office 117, Mamzar, Dubai',
    email: 'aimy@intertekgroup.org',
  },
];

const surveyorLocations: string[] = [
  'Panama', 'Canada', 'UAE', 'Turkey',
  'Italy', 'Egypt', 'Syria', 'Belgium',
  'Algeria', 'Lebanon', 'KSA',
];

const SERVICE_CATEGORIES: ('All' | ServiceCategory)[] = [
  'All', 'Registration', 'Surveys', 'Inspections', 'Safety', 'Consultancy', 'Crew',
];

// SVG path strings for each service category (Heroicons outline)
const categoryIconPaths: Record<ServiceCategory, string> = {
  Registration:
    'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801-1c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 0h7.377',
  Crew: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
  Consultancy:
    'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
  Safety:
    'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  Surveys:
    'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  Inspections:
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
};

const navItems = [
  {
    path: ROUTES.HOME,
    label: 'Home',
    iconD:
      'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  },
  {
    path: ROUTES.SERVICES,
    label: 'Our Services',
    iconD:
      'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z',
  },
  {
    path: ROUTES.CODE_OF_PRACTICE,
    label: 'Code of Practice',
    iconD:
      'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z',
  },
  {
    path: ROUTES.CONTACT,
    label: 'Contact Us',
    iconD:
      'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  },
];

// ==========================================
// ICON PRIMITIVES
// ==========================================

function IGLogo({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="28" height="9" rx="2" fill="#1557bb" />
      <rect x="35" y="4" width="9" height="9" rx="1" fill="#c41230" />
      <rect x="4" y="4" width="9" height="40" rx="2" fill="#1557bb" />
      <rect x="4" y="35" width="40" height="9" rx="2" fill="#1557bb" />
      <rect x="26" y="22" width="18" height="8" rx="1" fill="#1557bb" />
    </svg>
  );
}

function NavIcon({ d, className = 'w-5 h-5 flex-shrink-0' }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

// ==========================================
// MAIN APP LAYOUT
// ==========================================

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-brand-navy text-slate-100 flex flex-col md:flex-row antialiased font-sans">
      {/* Decorative background glows */}
      <div className="fixed top-0 left-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div
        className="fixed bottom-0 right-0 w-80 h-80 md:w-[600px] md:h-[600px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ animationDelay: '-4s' }}
      />

      {/* ── Mobile header ─────────────────────────── */}
      <header className="md:hidden bg-brand-steel/90 backdrop-blur-md border-b border-slate-800/60 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <IGLogo className="w-8 h-8" />
          <div className="leading-none">
            <p className="font-black text-sm text-white tracking-tight">INTERTEK</p>
            <p className="text-[9px] text-brand-red font-bold tracking-widest uppercase">GROUP</p>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar ───────────────────────────────── */}
      <aside
        aria-label="Main navigation"
        className={`
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 fixed md:static inset-y-0 left-0 z-40
          w-64 bg-brand-steel/90 backdrop-blur-xl border-r border-slate-800/40
          p-5 md:p-6 flex flex-col justify-between
          md:h-screen transition-transform duration-300 ease-in-out
        `}
      >
        <div className="space-y-8">
          {/* Logo — desktop only */}
          <div className="hidden md:flex items-center gap-3">
            <IGLogo className="w-10 h-10 flex-shrink-0" />
            <div className="leading-none">
              <p className="font-black text-xl text-white tracking-tight">INTERTEK</p>
              <p className="text-[10px] text-brand-red font-bold tracking-widest uppercase">GROUP</p>
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Primary navigation">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-3">Navigate</p>
            <ul className="space-y-1">
              {navItems.map(({ path, label, iconD }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive(path) ? 'page' : undefined}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 group ${
                      isActive(path)
                        ? 'bg-brand-blue/15 text-blue-300 border-l-4 border-brand-blue pl-2.5'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                    }`}
                  >
                    <NavIcon d={iconD} className="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span className="font-semibold text-sm">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Operational status */}
        <div className="bg-slate-950/50 rounded-2xl p-4 border border-slate-800/30">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Marine Services</span>
          </div>
          <p className="text-xs text-slate-300 mt-1.5 font-medium">24/7 Global Operations</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Surveyors in 11 Countries</p>
        </div>
      </aside>

      {/* ── Main content ──────────────────────────── */}
      <main id="main-content" className="flex-1 overflow-x-hidden md:h-screen md:overflow-y-auto px-4 py-6 md:px-8 lg:px-10 md:py-8">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomeView />} />
          <Route path={ROUTES.SERVICES} element={<ServicesView />} />
          <Route path={ROUTES.CODE_OF_PRACTICE} element={<CodeOfPracticeView />} />
          <Route path={ROUTES.CONTACT} element={<ContactView />} />
        </Routes>
      </main>
    </div>
  );
}

// ==========================================
// VIEW 1: HOME
// ==========================================

function HomeView() {
  useSEO({
    title: "World's Premier Marine Specialist",
    description:
      'Intertek Group is a global marine specialist founded in 2006 in Panama, offering ship registration, ISM/ISPS services, marine surveys, and naval architecture across 11 countries.',
    keywords: 'marine specialist, ship registration, ISM ISPS, marine surveys, naval architecture, Panama, maritime consultancy',
  });

  return (
    <PageWrapper>
      <HeroSection />
      <StatsRow />
      <AboutSection />
      <SubsidiariesSection />
    </PageWrapper>
  );
}

function HeroSection() {
  return (
    <section aria-label="Hero" className="py-6 md:py-10">
      <div className="space-y-5 max-w-3xl">
        <Badge variant="steel">Est. 2006 · Panama City, Panama · www.intertekgroup.org</Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
          World's Premier
          <br />
          <span className="text-brand-blue">Marine</span>{' '}
          <span className="text-brand-red">Specialist</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
          A distinguished board of Former Flag State Inspectors, IACS Marine Surveyors, Maritime Attorneys, and
          Naval Architects — delivering precision marine services grounded in integrity.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            to={ROUTES.SERVICES}
            className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
          >
            Explore Services
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="bg-slate-900/60 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-slate-600/50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  const stats = [
    { value: '2006', label: 'Year Founded' },
    { value: '3', label: 'Subsidiaries' },
    { value: '11', label: 'Countries' },
    { value: '24/7', label: 'Global Support' },
  ];

  return (
    <section aria-label="Key statistics">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map(({ value, label }) => (
          <Card key={label} padding="py-5 px-4 md:p-6" className="text-center">
            <p className="text-2xl md:text-3xl font-black text-brand-blue">{value}</p>
            <p className="text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">{label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const credentials = [
    'Former Senior Flag State Inspector',
    'Former IACS Marine Surveyor',
    'Senior Maritime Attorney',
    'Senior Naval Architects',
  ];

  return (
    <section aria-label="About Intertek Group">
      <SectionHeader
        as="h2"
        title="About Intertek Group"
        subtitle="Founded in Panama by a distinguished board of marine specialists who don't just meet industry standards — they understand how they are made, enforced, and navigated."
        className="mb-6 md:mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Board Expertise</h3>
          <ul className="space-y-3">
            {credentials.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" aria-hidden="true" />
                <span className="text-slate-200 text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Our Promise</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every service we deliver is grounded in integrity, precision, and deep industry knowledge. We don't
              just meet industry standards — we understand how they are made, enforced, and navigated.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/50">
            <Badge variant="blue">Integrity · Precision · Industry Expertise</Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}

function SubsidiariesSection() {
  return (
    <section aria-label="Our Subsidiaries">
      <SectionHeader
        as="h2"
        title="Our Subsidiaries"
        subtitle="Three specialized entities delivering the full spectrum of marine services globally."
        accent="red"
        className="mb-6 md:mb-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subsidiaries.map((sub) => (
          <SubsidiaryCard key={sub.name} subsidiary={sub} />
        ))}
      </div>
    </section>
  );
}

function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex-1">
        <div
          className="w-8 h-8 rounded-lg bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center mb-4"
          aria-hidden="true"
        >
          <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>
        <h3 className="font-bold text-white text-base mb-1">{subsidiary.name}</h3>
        <p className="text-xs text-brand-blue font-semibold mb-3 leading-snug">{subsidiary.tagline}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{subsidiary.description}</p>
      </div>
      <div className="mt-5 pt-4 border-t border-slate-800/50 flex flex-wrap gap-1.5">
        {subsidiary.tags.map((tag) => (
          <Badge key={tag} variant="steel">{tag}</Badge>
        ))}
      </div>
    </Card>
  );
}

// ==========================================
// VIEW 2: SERVICES
// ==========================================

function ServicesView() {
  useSEO({
    title: 'Marine Services',
    description:
      'Intertek Group offers 12 specialized marine services including ship registration, ISM/ISPS consultancy, marine surveys, naval architecture, and MLC crew welfare inspections.',
    keywords:
      'ship registration, marine surveys, ISM ISPS, naval architecture, PSC inspections, crew endorsement, maritime consultancy',
  });

  const [activeCategory, setActiveCategory] = useState<'All' | ServiceCategory>('All');

  const filtered =
    activeCategory === 'All' ? services : services.filter((s) => s.category === activeCategory);

  return (
    <PageWrapper>
      <SectionHeader
        as="h1"
        title="Our Services"
        subtitle="Comprehensive marine services delivered by industry experts with decades of global experience."
      />
      <CategoryFilters active={activeCategory} onSelect={setActiveCategory} />
      <ServicesGrid services={filtered} />
    </PageWrapper>
  );
}

function CategoryFilters({
  active,
  onSelect,
}: {
  active: 'All' | ServiceCategory;
  onSelect: (c: 'All' | ServiceCategory) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter services by category">
      {SERVICE_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          aria-pressed={active === cat}
          className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/50 ${
            active === cat
              ? 'bg-brand-blue border-brand-blue text-white shadow-md shadow-brand-blue/10'
              : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function ServicesGrid({ services: list }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
      {list.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card hover className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center flex-shrink-0"
        aria-hidden="true"
      >
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={categoryIconPaths[service.category]} />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm leading-snug">{service.title}</p>
        <Badge variant="steel" className="mt-2">{service.category}</Badge>
      </div>
    </Card>
  );
}

// ==========================================
// VIEW 3: CODE OF PRACTICE
// ==========================================

function CodeOfPracticeView() {
  useSEO({
    title: 'Code of Practice & Fleet Markets',
    description:
      'Intertek Group operates with unwavering integrity, ethics, and diversity principles, serving deepsea shipping, offshore vessels, government, and pleasure yacht markets worldwide.',
    keywords:
      'marine code of practice, integrity honesty, ethics accountability, deepsea shipping, offshore vessels, maritime market',
  });

  return (
    <PageWrapper>
      <SectionHeader
        as="h1"
        title="Code of Practice & Market"
        subtitle="Our principles define how we operate. Our market reach defines our impact."
        accent="red"
      />
      <ValuesSection />
      <FleetMarketSection />
    </PageWrapper>
  );
}

function ValuesSection() {
  const accentClasses = ['bg-brand-blue', 'bg-brand-red', 'bg-blue-400'] as const;

  return (
    <section aria-labelledby="values-heading">
      <h2 id="values-heading" className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
        Our Code of Practice & Vision
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {companyValues.map((value, idx) => (
          <ValueCard key={value.title} value={value} accentClass={accentClasses[idx]} />
        ))}
      </div>
    </section>
  );
}

function ValueCard({ value, accentClass }: { value: CompanyValue; accentClass: string }) {
  return (
    <Card hover>
      <div className={`w-6 h-0.5 ${accentClass} rounded-full mb-4`} aria-hidden="true" />
      <h3 className="font-bold text-white text-base mb-3">{value.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
    </Card>
  );
}

function FleetMarketSection() {
  return (
    <section aria-labelledby="market-heading">
      <h2 id="market-heading" className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
        Our Fleet & Market
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {markets.map((market) => (
          <MarketItem key={market} name={market} />
        ))}
        <Card padding="py-5 px-6" className="sm:col-span-2 text-center">
          <p className="text-brand-blue font-semibold text-sm italic">
            "Round-the-clock customer care, wherever you are."
          </p>
        </Card>
      </div>
    </section>
  );
}

function MarketItem({ name }: { name: string }) {
  return (
    <Card hover className="flex items-center gap-4">
      <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" aria-hidden="true" />
      <span className="text-slate-200 font-semibold text-sm">{name}</span>
    </Card>
  );
}

// ==========================================
// VIEW 4: CONTACT
// ==========================================

function ContactView() {
  useSEO({
    title: 'Contact Intertek Group',
    description:
      'Reach Intertek Group at our offices in Panama City, Mississauga (Canada), and Dubai (UAE). Marine surveyors available in 11 countries worldwide.',
    keywords:
      'contact Intertek Group, Panama marine office, Dubai marine surveyor, Canada marine services, marine consultancy contact',
  });

  return (
    <PageWrapper>
      <SectionHeader
        as="h1"
        title="Contact Us"
        subtitle="World's Premier Marine Specialist — available 24/7 wherever you are."
      />
      <OfficesSection />
      <SurveyorLocationsGrid />
      <ContactFormSection />
    </PageWrapper>
  );
}

function OfficesSection() {
  return (
    <section aria-labelledby="offices-heading">
      <h2 id="offices-heading" className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
        Global Offices
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {offices.map((office) => (
          <OfficeCard key={office.label} office={office} />
        ))}
      </div>
    </section>
  );
}

function OfficeCard({ office }: { office: Office }) {
  return (
    <Card hover>
      <Badge variant="blue" className="mb-4">{office.label}</Badge>
      <h3 className="font-bold text-white text-lg leading-tight">{office.city}</h3>
      <p className="text-brand-red text-[10px] font-bold uppercase tracking-wider">{office.country}</p>
      <address className="not-italic text-slate-400 text-sm mt-3 leading-relaxed">{office.address}</address>
      <a
        href={`mailto:${office.email}`}
        className="text-brand-blue text-xs font-semibold mt-3 block hover:underline focus:outline-none focus:underline"
      >
        {office.email}
      </a>
    </Card>
  );
}

function SurveyorLocationsGrid() {
  return (
    <section aria-labelledby="locations-heading">
      <h2 id="locations-heading" className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
        Surveyors' Locations
      </h2>
      <Card>
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2" aria-label="Surveyor countries">
          {surveyorLocations.map((loc) => (
            <li
              key={loc}
              className="bg-slate-800/40 border border-slate-700/40 rounded-lg px-3 py-2.5 text-center"
            >
              <span className="text-slate-300 text-xs font-semibold">{loc}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

function ContactFormSection() {
  return (
    <section aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
        Send a Message
      </h2>
      <ContactForm />
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    service: services[0].title,
    port: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ company: '', email: '', service: services[0].title, port: '', message: '' });
  };

  if (submitted) {
    return (
      <Card className="text-center py-10 md:py-14 max-w-2xl">
        <div className="w-16 h-16 bg-brand-blue/10 border border-brand-blue/30 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
          <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">Message Received</h3>
        <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">
          Our team will respond within 24 hours. For urgent matters, contact us directly at our regional offices.
        </p>
        <button
          onClick={resetForm}
          className="mt-6 border border-slate-700 hover:border-slate-600 bg-slate-900/50 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
        >
          Send Another Message
        </button>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Company / Vessel Name" htmlFor="company">
            <input
              id="company"
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={inputCls}
              placeholder="Company or vessel name"
              autoComplete="organization"
            />
          </FormField>
          <FormField label="Contact Email" htmlFor="email">
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputCls}
              placeholder="your@email.com"
              autoComplete="email"
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Service Required" htmlFor="service">
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={inputCls}
            >
              {services.map((s) => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Port / Location" htmlFor="port">
            <input
              id="port"
              type="text"
              value={formData.port}
              onChange={(e) => setFormData({ ...formData, port: e.target.value })}
              className={inputCls}
              placeholder="e.g. Port of Dubai, Panama Canal"
            />
          </FormField>
        </div>

        <FormField label="Message / Details" htmlFor="message">
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputCls} resize-none`}
            placeholder="Describe your vessel, service requirements, or inquiry..."
          />
        </FormField>

        <button
          type="submit"
          className="w-full sm:w-auto bg-brand-blue hover:bg-blue-600 text-white py-3.5 px-8 rounded-xl text-sm font-extrabold transition-all hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
        >
          Send Inquiry
        </button>
      </form>
    </Card>
  );
}

// ── Shared form primitives ──────────────────────────

const inputCls =
  'w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors';

function FormField({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-xs font-bold text-slate-400 uppercase tracking-wider">
        {label}
      </label>
      {children}
    </div>
  );
}

export default App;
