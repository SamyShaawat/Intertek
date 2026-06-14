import { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { useSEO } from './hooks/useSEO';

// Mock Data for the Application
const recentInspections = [
  { id: 'ITK-9082', client: 'AeroSpace Dynamic', type: 'Materials Testing', status: 'Passed', date: '2026-06-12', location: 'Munich Laboratory' },
  { id: 'ITK-8812', client: 'Global Pharma Corp', type: 'Chemical Assay', status: 'Pending', date: '2026-06-14', location: 'Boston Lab C' },
  { id: 'ITK-7743', client: 'EcoPower Grid', type: 'Environmental Audit', status: 'Passed', date: '2026-06-10', location: 'London Site A' },
  { id: 'ITK-4421', client: 'Apex Consumer Goods', type: 'Safety Certification', status: 'Failed', date: '2026-06-08', location: 'Shenzhen Hub' },
  { id: 'ITK-3390', client: 'Titan Automotive', type: 'Stress Testing', status: 'Passed', date: '2026-06-05', location: 'Detroit Testing Center' },
];

const labLabs = [
  { name: 'Materials Science Lab', location: 'Munich, Germany', specialties: ['Metallurgy', 'Stress Testing', 'X-Ray Diffraction'], status: 'Active', capacity: '92%' },
  { name: 'Analytical Chemistry Hub', location: 'Boston, USA', specialties: ['Mass Spectrometry', 'Chromatography', 'Bio-Assays'], status: 'Active', capacity: '85%' },
  { name: 'Environmental Science Site', location: 'London, UK', specialties: ['Emissions Testing', 'Soil Analysis', 'Water Quality'], status: 'Maintenance', capacity: '40%' },
  { name: 'Electronics Certification Lab', location: 'Shenzhen, China', specialties: ['EMC Testing', 'IP Dust/Water Tests', 'Thermal Cycling'], status: 'Active', capacity: '96%' },
];

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to check if a route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '-4s' }}></div>

      {/* MOBILE HEADER */}
      <header className="md:hidden bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-100 via-slate-100 to-brand-yellow bg-clip-text text-transparent">
            INTERTEK
          </span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* SIDEBAR NAVIGATION (Desktop) */}
      <aside className={`
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        fixed md:static inset-y-0 left-0 w-64 bg-slate-900/40 backdrop-blur-xl border-r border-slate-800 p-6 flex flex-col justify-between z-40 transition-transform duration-300 ease-in-out md:h-screen
      `}>
        <div className="space-y-8">
          {/* Logo */}
          <div className="hidden md:flex items-center space-x-3">
            <svg className="w-9 h-9 text-brand-yellow flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-slate-100 to-brand-yellow bg-clip-text text-transparent">
              INTERTEK
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Main Menu</p>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive('/') 
                  ? 'bg-slate-800 text-brand-yellow border-l-4 border-brand-yellow pl-2.5 shadow-lg shadow-yellow-500/5' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
              }`}
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span className="font-semibold text-sm">Dashboard</span>
            </Link>

            <Link
              to="/inspections"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive('/inspections') 
                  ? 'bg-slate-800 text-brand-yellow border-l-4 border-brand-yellow pl-2.5 shadow-lg shadow-yellow-500/5' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
              }`}
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801-1c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 12.408l1.5-1.5 3 3m-9-3h.01M4.5 12H12m0 0l-1.5-1.5M4.5 15H12" />
              </svg>
              <span className="font-semibold text-sm">Inspections</span>
            </Link>

            <Link
              to="/labs"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive('/labs') 
                  ? 'bg-slate-800 text-brand-yellow border-l-4 border-brand-yellow pl-2.5 shadow-lg shadow-yellow-500/5' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
              }`}
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v17.792M14.25 3.104v17.792M4.615 5.615L19.385 20.385M4.615 18.385L19.385 5.615" />
              </svg>
              <span className="font-semibold text-sm">Testing Labs</span>
            </Link>

            <Link
              to="/request-audit"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive('/request-audit') 
                  ? 'bg-slate-800 text-brand-yellow border-l-4 border-brand-yellow pl-2.5 shadow-lg shadow-yellow-500/5' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
              }`}
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-sm">Request Audit</span>
            </Link>
          </nav>
        </div>

        {/* Global Network Health Indicator */}
        <div className="mt-8 bg-slate-950/80 rounded-2xl p-4 border border-slate-800/60">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Global QA Services</span>
          </div>
          <p className="text-xs text-slate-300 mt-1.5 font-medium">1,000+ Labs Operational</p>
          <div className="w-full bg-slate-800 rounded-full h-1 mt-2.5 overflow-hidden">
            <div className="bg-teal-400 h-1 rounded-full transition-all duration-500" style={{ width: '98%' }}></div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <main className="flex-1 overflow-x-hidden md:h-screen md:overflow-y-auto px-6 py-8 md:px-10">
        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="/inspections" element={<InspectionsView />} />
          <Route path="/labs" element={<LabsView />} />
          <Route path="/request-audit" element={<RequestAuditView />} />
        </Routes>
      </main>
    </div>
  );
}

// ==========================================
// VIEW 1: DASHBOARD
// ==========================================
function DashboardView() {
  useSEO({
    title: 'Intertek Dashboard | Total Quality Assurance Portal',
    description: 'Monitor global inspection pipelines, verify lab results, and keep track of safety certifications using the Intertek Dashboard.',
    keywords: 'quality metrics, product safety, compliance report, global inspection tracker',
  });

  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<typeof recentInspections[number] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const found = recentInspections.find(i => i.id.toLowerCase() === searchId.trim().toLowerCase());
    setSearchResult(found || null);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Quality Assurance Portal
          </h1>
          <p className="text-slate-400 mt-1 text-sm md:text-base">
            Total Quality Assurance coverage across your global manufacturing locations.
          </p>
        </div>
        <div className="flex items-center space-x-3 self-start md:self-auto">
          <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-medium">
            System Live: UTC 10:58
          </span>
        </div>
      </div>

      {/* METRIC GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Inspections Completed', value: '412', change: '+12.5%', color: 'border-teal-500/30 text-teal-400' },
          { label: 'Pending Certificates', value: '18', change: '-3%', color: 'border-yellow-500/30 text-brand-yellow' },
          { label: 'Quality Pass Rate', value: '98.3%', change: '+0.4%', color: 'border-teal-500/30 text-teal-400' },
          { label: 'Active Labs worldwide', value: '1,043', change: 'Stable', color: 'border-indigo-500/30 text-indigo-400' },
        ].map((metric, idx) => (
          <div key={idx} className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/80 hover:translate-y-[-2px] transition-all duration-300">
            <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">{metric.label}</span>
            <div className="flex items-baseline justify-between mt-3">
              <span className="text-3xl font-extrabold tracking-tight text-white">{metric.value}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-slate-950/60 ${metric.color}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* INTERACTIVE TRACKING SYSTEM */}
        <div className="lg:col-span-2 bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Instant Lab Verification</h2>
            <p className="text-slate-400 text-sm mb-6">
              Search the validation registry database with your Inspection Reference ID to verify test passes instantly.
            </p>

            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter ID (e.g. ITK-9082, ITK-4421)"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-yellow hover:bg-yellow-500 text-slate-950 px-5 py-3 rounded-xl text-sm font-extrabold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Query API
              </button>
            </form>

            {/* SEARCH RESULTS */}
            {hasSearched && (
              <div className="mt-6 p-4 rounded-xl border border-slate-800 bg-slate-950/40 animate-fadeIn">
                {searchResult ? (
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500 block text-xs font-bold uppercase tracking-wider">Client</span>
                      <span className="text-slate-200 font-semibold">{searchResult.client}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs font-bold uppercase tracking-wider">Test Type</span>
                      <span className="text-slate-200 font-semibold">{searchResult.type}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs font-bold uppercase tracking-wider">Date Tested</span>
                      <span className="text-slate-200 font-semibold">{searchResult.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs font-bold uppercase tracking-wider">Location</span>
                      <span className="text-slate-200 font-semibold">{searchResult.location}</span>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-slate-800 mt-1 flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Status Results</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        searchResult.status === 'Passed' 
                          ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' 
                          : searchResult.status === 'Pending'
                          ? 'bg-yellow-500/10 text-brand-yellow border border-yellow-500/20'
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}>
                        {searchResult.status}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4 text-slate-400 text-sm">
                    <svg className="w-8 h-8 text-rose-500/70 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    No inspection record found with ID "<span className="text-white">{searchId}</span>". Try <span className="font-bold text-slate-300">ITK-9082</span> or <span className="font-bold text-slate-300">ITK-4421</span>.
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-8 text-xs text-slate-500 flex justify-between items-center">
            <span>Intertek Laboratory API v2.7</span>
            <span>Secure TLS 1.3 Encryption</span>
          </div>
        </div>

        {/* COMPLIANCE RATING CHART (Tailwind mock chart) */}
        <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-1">Compliance Rate</h2>
          <p className="text-slate-400 text-sm mb-6">Audited pass rates by industrial sector</p>

          <div className="space-y-4">
            {[
              { sector: 'Consumer Goods', rate: 97, color: 'bg-brand-yellow' },
              { sector: 'Chemical & Pharma', rate: 99, color: 'bg-teal-400' },
              { sector: 'Automotive & Heavy Industry', rate: 95, color: 'bg-indigo-400' },
              { sector: 'Environmental & Agriculture', rate: 91, color: 'bg-cyan-400' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{item.sector}</span>
                  <span className="text-white">{item.rate}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.rate}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// VIEW 2: INSPECTIONS LIST
// ==========================================
function InspectionsView() {
  useSEO({
    title: 'Recent Quality Inspections | Intertek',
    description: 'Browse the latest industrial quality audits, inspection status codes, testing dates, and cert credentials verified by Intertek labs.',
    keywords: 'quality records, certification verification, lab pass logs',
  });

  const [filter, setFilter] = useState('All');

  const filteredInspections = filter === 'All' 
    ? recentInspections 
    : recentInspections.filter(i => i.status === filter);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Quality Inspection Records</h1>
        <p className="text-slate-400 mt-1">Official registry of manufacturing tests and certification statuses.</p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Passed', 'Pending', 'Failed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
              filter === status
                ? 'bg-brand-yellow border-brand-yellow text-slate-950 shadow-md shadow-yellow-500/5'
                : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Audit Type</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Tested Date</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {filteredInspections.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-brand-yellow">{item.id}</td>
                  <td className="px-6 py-4 text-white font-semibold">{item.client}</td>
                  <td className="px-6 py-4 text-slate-300">{item.type}</td>
                  <td className="px-6 py-4 text-slate-400">{item.location}</td>
                  <td className="px-6 py-4 text-slate-400">{item.date}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                      item.status === 'Passed'
                        ? 'bg-teal-500/10 text-teal-400 border-teal-500/20'
                        : item.status === 'Pending'
                        ? 'bg-yellow-500/10 text-brand-yellow border-yellow-500/20'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// VIEW 3: TESTING LABS
// ==========================================
function LabsView() {
  useSEO({
    title: 'Global Testing Laboratories | Intertek Services',
    description: 'Learn about Intertek testing laboratories specializing in metallurgical, environmental, electronics, and biochemistry testing.',
    keywords: 'electronics certification lab, metallurgy testing, emissions lab',
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Global Testing Facilities</h1>
        <p className="text-slate-400 mt-1">State-of-the-art labs delivering total quality assurance worldwide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {labLabs.map((lab, idx) => (
          <div key={idx} className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold text-white">{lab.name}</h2>
                <p className="text-slate-400 text-xs mt-0.5">{lab.location}</p>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                lab.status === 'Active' ? 'bg-teal-500/10 text-teal-400' : 'bg-yellow-500/10 text-brand-yellow'
              }`}>
                {lab.status}
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <span className="text-slate-500 block text-xs font-bold uppercase tracking-wider">Specialties</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {lab.specialties.map((spec, sIdx) => (
                    <span key={sIdx} className="bg-slate-950/80 text-slate-300 text-xs px-2.5 py-1 rounded-lg border border-slate-800">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-800/60 text-xs">
                <span className="text-slate-400">Current Occupancy/Capacity</span>
                <span className="text-white font-bold">{lab.capacity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// VIEW 4: REQUEST AUDIT (Form)
// ==========================================
function RequestAuditView() {
  useSEO({
    title: 'Schedule a Quality Audit | Intertek Certification',
    description: 'Get in touch with an official Intertek testing facility to schedule safety inspection, environmental audit, or compliance testing.',
    keywords: 'request lab test, schedule inspection, quality audit contact',
  });

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    labType: 'Materials Science',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Schedule Quality Inspection</h1>
        <p className="text-slate-400 mt-1">Submit your details to request an auditor or lab testing slot.</p>
      </div>

      <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 md:p-8">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">Audit Request Received</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
              Our scheduling desk has logged your request. An inspector from the designated regional office will contact you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ company: '', email: '', labType: 'Materials Science', details: '' });
              }}
              className="mt-6 border border-slate-800 hover:border-slate-700 bg-slate-950 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:text-white transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Name</label>
              <input
                id="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                placeholder="AeroSpace Dynamic Ltd"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                placeholder="compliance@aerospace.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="labType" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Facility Specialty</label>
              <select
                id="labType"
                value={formData.labType}
                onChange={(e) => setFormData({ ...formData, labType: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
              >
                <option value="Materials Science">Materials Science (Munich)</option>
                <option value="Analytical Chemistry">Analytical Chemistry (Boston)</option>
                <option value="Environmental Science">Environmental Science (London)</option>
                <option value="Electronics Certification">Electronics Certification (Shenzhen)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="details" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quality Audit Details</label>
              <textarea
                id="details"
                rows={4}
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow resize-none"
                placeholder="Describe the items, target standards, and timeline requested..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-yellow hover:bg-yellow-500 text-slate-950 py-3.5 rounded-xl text-sm font-extrabold transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              Request Booking Slot
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
