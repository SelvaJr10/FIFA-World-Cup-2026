import { motion } from 'motion/react';
import { Search, Trophy, Globe, Compass, Grid3X3, ArrowLeft } from 'lucide-react';
// @ts-ignore
import logoImage from '../assets/images/fifa_2026_logo_1781612161195.jpg';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedPosition: string;
  setSelectedPosition: (pos: string) => void;
  isComparing: boolean;
  setIsComparing: (val: boolean) => void;
  onEnterReset?: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  selectedPosition,
  setSelectedPosition,
  isComparing,
  setIsComparing,
  onEnterReset
}: HeaderProps) {
  const countries = ['All', 'Argentina', 'Brazil', 'Portugal', 'Spain', 'France'];
  const positions = ['All', 'Forward', 'Midfielder'];

  return (
    <header className="relative w-full z-10 flex flex-col items-center bg-black/40 backdrop-blur-md border-b border-white/10">
      {/* Visual Header Banner */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-4">
          {/* Logo / Title */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={onEnterReset}>
            {/* Custom official FIFA World Cup 2026 logo element */}
            <div className="w-12 h-12 rounded-md overflow-hidden bg-[#0c0c0c] border border-white/10 shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center p-0.5">
              <img
                src={logoImage}
                alt="FIFA World Cup 2026 Logo"
                className="w-full h-full object-contain filter saturate-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono tracking-widest font-extrabold uppercase text-amber-500">OFFICIAL ARCHIVE</span>
              </div>
              <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">
                FIFA World Cup <span className="text-amber-500">2026</span>
              </h1>
            </div>
          </div>

          {/* Navigation Bar simulation from design HTML */}
          <nav className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase opacity-90 items-center">
            <span className="border-b-2 border-amber-500 pb-1 text-white cursor-pointer select-none">Players</span>
            <span className="hover:text-amber-500 text-neutral-400 transition-colors cursor-pointer select-none transition-all" onClick={() => setSearchQuery('')}>Standings</span>
            <span className="hover:text-amber-500 text-neutral-400 transition-colors cursor-pointer select-none transition-all" onClick={() => setSelectedCountry('All')}>Schedule</span>
            <span className="hover:text-amber-500 text-neutral-400 transition-colors cursor-pointer select-none transition-all" onClick={() => setSelectedPosition('All')}>Highlights</span>
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsComparing(!isComparing)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all cursor-pointer ${
                isComparing
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              {isComparing ? (
                <>
                  <Grid3X3 className="w-3.5 h-3.5" />
                  <span>Exit Lab</span>
                </>
              ) : (
                <>
                  <Compass className="w-3.5 h-3.5" />
                  <span>Compare Arena</span>
                </>
              )}
            </button>
            
            {onEnterReset && (
              <button
                onClick={onEnterReset}
                className="p-2 bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white rounded-lg transition-all cursor-pointer"
                title="Go to Landing Stage"
              >
                <ArrowLeft className="w-[18px] h-[18px]" />
              </button>
            )}
          </div>
        </div>

        {/* Filters and Controls Bar */}
        {!isComparing && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center pt-4 border-t border-white/5">
            {/* Search Input */}
            <div className="lg:col-span-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                <Search className="w-4 h-4 ml-1" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search superstars (e.g. Messi, Yamal, Mbappe...)"
                className="w-full pl-11 pr-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 focus:border-amber-500/80 rounded-lg text-xs font-medium text-white placeholder-neutral-500 outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[10px] font-mono font-bold text-neutral-500 hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Country Tabs */}
            <div className="lg:col-span-5 flex flex-col space-y-1 col-span-1">
              <span className="text-[9px] font-mono tracking-wider text-neutral-500 uppercase font-bold flex items-center gap-1">
                <Globe className="w-3 h-3 text-neutral-500" /> Filter by squad
              </span>
              <div className="flex flex-wrap gap-1.5">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => setSelectedCountry(country)}
                    className={`px-3 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                      selectedCountry === country
                        ? 'bg-amber-500 text-black font-black shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-neutral-200 border border-white/10'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            {/* Position Filter */}
            <div className="lg:col-span-3 flex flex-col space-y-1 col-span-1">
              <span className="text-[9px] font-mono tracking-wider text-neutral-500 uppercase font-bold flex items-center gap-1">
                <Compass className="w-3 h-3 text-neutral-500" /> Tactical position
              </span>
              <div className="flex gap-1.5">
                {positions.map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setSelectedPosition(pos)}
                    className={`flex-1 px-3 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                      selectedPosition === pos
                        ? 'bg-amber-500 text-black font-black'
                        : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-neutral-200 border border-white/10'
                    }`}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
