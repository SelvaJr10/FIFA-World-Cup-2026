import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Play, Sparkles, Scale, Info, Share2, Compass, AlertCircle, Users } from 'lucide-react';
// @ts-ignore
import logoImage from './assets/images/fifa_2026_logo_1781612161195.jpg';
import { PLAYERS_DATA } from './data/players';
import { Player } from './types';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import CompareModule from './components/CompareModule';
import PlayerDetailsModal from './components/PlayerDetailsModal';
import TeamsExplorer from './components/TeamsExplorer';

export default function App() {
  const [entered, setEntered] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'teams' | 'players'>('teams');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedPosition, setSelectedPosition] = useState<string>('All');
  const [isComparing, setIsComparing] = useState<boolean>(false);
  const [activePlayer, setActivePlayer] = useState<Player | null>(null);

  // Filter superstars list
  const filteredPlayers = useMemo(() => {
    return PLAYERS_DATA.filter((player) => {
      const matchSearch =
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.role.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCountry =
        selectedCountry === 'All' || player.country.toLowerCase() === selectedCountry.toLowerCase();

      const matchPosition =
        selectedPosition === 'All' || player.position.toLowerCase() === selectedPosition.toLowerCase();

      return matchSearch && matchCountry && matchPosition;
    });
  }, [searchQuery, selectedCountry, selectedPosition]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans select-none overflow-x-hidden">
      {/* Immersive Animated Backdrop */}
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {!entered ? (
          /* KICK-OFF / WELCOME LANDING STAGE */
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex-1 z-10 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto min-h-screen"
          >
            {/* Ambient gold glowing ring behind logo */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-amber-505/10 blur-[90px] pointer-events-none" />

            <div className="relative space-y-8">
              {/* Majestic Main Display Title */}
              <div className="space-y-4">
                {/* Official FIFA 2026 Logo Image */}
                <div className="w-32 h-32 bg-[#0c0c0c] border border-white/10 rounded-lg flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(245,158,11,0.35)] p-1.5 mb-4 overflow-hidden">
                  <img
                    src={logoImage}
                    alt="Official FIFA World Cup 2026 Logo"
                    className="w-full h-full object-contain filter saturate-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none text-white">
                  FIFA WORLD CUP 2026
                </h1>
                
                <div className="space-y-2 pt-2">
                  <p className="text-lg md:text-xl font-extrabold text-amber-500 uppercase tracking-widest max-w-2xl mx-auto font-sans">
                    Canada, Mexico, United States
                  </p>
                  <p className="text-xs md:text-sm font-extrabold text-[#9c9c9c] uppercase tracking-widest max-w-2xl mx-auto font-sans">
                    June 11 to July 19, 2026
                  </p>
                </div>
              </div>

              {/* BIG CTA Button */}
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(245, 158, 11, 0.45)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setEntered(true)}
                  className="px-10 py-4.5 bg-amber-500 hover:bg-amber-400 border border-amber-600 text-black rounded-sm text-sm font-black tracking-widest uppercase shadow-[0_0_25px_rgba(245,158,11,0.25)] flex items-center space-x-3.5 mx-auto group cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-black stroke-[2.2] group-hover:scale-110 transition-transform" />
                  <span>VIEW LET'S GO</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* MAIN APPLICATION DASHBOARD STAGE */
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex-1 z-10 flex flex-col"
          >
            {/* App Header Component */}
            <Header
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
              isComparing={isComparing}
              setIsComparing={setIsComparing}
              onEnterReset={() => setEntered(false)}
            />

            {/* Main view router */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Main Sub-Navigation Tabs */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/5 pb-4 mb-6 gap-3">
                <div className="flex items-center space-x-1.5 p-1 bg-white/[0.02] border border-white/10 rounded-md">
                  <button
                    onClick={() => { setActiveTab('teams'); setIsComparing(false); }}
                    className={`px-4 py-2 rounded-sm text-xs font-extrabold tracking-widest uppercase flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'teams'
                        ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                        : 'text-neutral-450 hover:text-white'
                    }`}
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    <span>TEAMS EXPLORER</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('players'); }}
                    className={`px-4 py-2 rounded-sm text-xs font-extrabold tracking-widest uppercase flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'players' && !isComparing
                        ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                        : 'text-neutral-450 hover:text-white'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>SUPERSTARS LAB</span>
                  </button>
                </div>
                <span className="text-[10px] font-mono text-[#9c9c9c] uppercase tracking-widest font-black">
                  FIFA WORLD CUP 2026 CYCLICAL SQUADS
                </span>
              </div>

              <AnimatePresence mode="wait">
                {isComparing ? (
                  /* COMPARISON PLAYGROUND */
                  <motion.div
                    key="compare-mode"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CompareModule players={PLAYERS_DATA} />
                  </motion.div>
                ) : activeTab === 'teams' ? (
                  /* TEAMS EXPLORER (Category of all 48 teams) */
                  <motion.div
                    key="teams-explorer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TeamsExplorer 
                      onSelectPlayer={(player) => {
                        setActivePlayer(player);
                      }} 
                      searchQuery={searchQuery} 
                    />
                  </motion.div>
                ) : (
                  /* MAIN PLAYERS CARD VIEW GRID */
                  <motion.div
                    key="cards-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    {/* Visual stats helper / summary */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white/[0.03] p-4 rounded-md border border-white/10">
                      <div className="flex items-center space-x-3 text-xs">
                        <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-sm">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-extrabold uppercase tracking-wider text-neutral-200">ACTIVE WORLD CUP REGISTRY</p>
                          <p className="text-[10px] text-neutral-400 font-mono -mt-0.5 uppercase">Showing {filteredPlayers.length} of {PLAYERS_DATA.length} registered elite performers</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[9px] font-mono bg-[#0c0c0c] border border-white/10 px-3 py-1.5 rounded-sm text-neutral-400 uppercase tracking-widest font-bold">
                          FEED STATUS: <strong className="text-emerald-450">SYNCED</strong>
                        </span>
                      </div>
                    </div>

                    {/* The Grid itself */}
                    {filteredPlayers.length > 0 ? (
                      <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {filteredPlayers.map((player) => (
                          <PlayerCard
                            key={player.id}
                            player={player}
                            onClick={() => setActivePlayer(player)}
                          />
                        ))}
                      </motion.div>
                    ) : (
                      /* No results display state */
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-16 text-center border border-dashed border-white/10 rounded-md"
                      >
                        <AlertCircle className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-[#ececec]">No Results Found</h3>
                        <p className="text-xs text-neutral-500 mt-2 max-w-sm mx-auto uppercase tracking-wide">
                          Try adjusting your country filters or search query terms to locate the superstar.
                        </p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedCountry('All');
                            setSelectedPosition('All');
                          }}
                          className="mt-5 px-5 py-2.5 bg-white/[0.03] border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/[0.08] rounded-sm transition-all cursor-pointer"
                        >
                          Reset Filters
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </main>

            {/* Official Tournament Scoreboard Table Footer (Geometric Balance) */}
            <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12">
              <div className="bg-[#121212]/95 backdrop-blur-md border border-white/10 rounded-md overflow-hidden shadow-2xl">
                {/* Header title */}
                <div className="bg-white/[0.02] border-b border-white/10 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] font-mono tracking-widest uppercase font-black text-white">GROUP STAGE LIVE ARCHIVE</span>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-500 tracking-widest">CYCLE VERSION #2026.01</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px] font-mono">
                    <thead>
                      <tr className="border-b border-white/5 uppercase text-neutral-500 font-black">
                        <th className="px-6 py-3">Rank / National Team</th>
                        <th className="px-4 py-3 text-center">Played</th>
                        <th className="px-4 py-3 text-center">Goals</th>
                        <th className="px-4 py-3 text-center">Points</th>
                        <th className="px-6 py-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { rank: '01', team: 'ARGENTINA', mp: 3, gf: 7, pts: 9, status: 'QUALIFIED' },
                        { rank: '02', team: 'BRAZIL', mp: 3, gf: 6, pts: 7, status: 'QUALIFIED' },
                        { rank: '03', team: 'PORTUGAL', mp: 3, gf: 5, pts: 6, status: 'QUALIFIED' },
                        { rank: '04', team: 'SPAIN', mp: 3, gf: 6, pts: 5, status: 'QUALIFIED' },
                        { rank: '05', team: 'FRANCE', mp: 3, gf: 4, pts: 4, status: 'QUALIFIED' },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.01]">
                          <td className="px-6 py-3.5 font-bold flex items-center space-x-3 text-white">
                            <span className="text-amber-500 font-black">{row.rank}</span>
                            <span>{row.team}</span>
                          </td>
                          <td className="px-4 py-3.5 text-center text-neutral-400">{row.mp}</td>
                          <td className="px-4 py-3.5 text-center text-neutral-300 font-bold">{row.gf}</td>
                          <td className="px-4 py-3.5 text-center text-amber-550 font-black">{row.pts}</td>
                          <td className="px-6 py-3.5 text-right font-black">
                            <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 text-emerald-400 rounded-sm">
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </footer>

            {/* Dynamic Interactive Detail Modal Overlay */}
            <PlayerDetailsModal
              player={activePlayer}
              onClose={() => setActivePlayer(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
