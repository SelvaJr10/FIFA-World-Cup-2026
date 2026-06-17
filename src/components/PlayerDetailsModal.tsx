import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Medal, Check, TrendingDown, Clock, ShieldCheck, Trophy } from 'lucide-react';
import { Player } from '../types';
import PlayerPitchHeatmap from './PlayerPitchHeatmap';
import { ALL_48_TEAMS } from '../data/teams';

function getCountryFlagEmoji(countryName: string): string {
  const team = ALL_48_TEAMS.find(t => t.name.toLowerCase() === countryName.toLowerCase() || t.id === countryName.toLowerCase());
  return team ? team.flag : '🌐';
}

interface ModalProps {
  player: Player | null;
  onClose: () => void;
}

export default function PlayerDetailsModal({ player, onClose }: ModalProps) {
  if (!player) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop glass blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-4xl bg-[#121212]/95 border border-white/10 rounded-md overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
        >
          {/* Top Banner Accent */}
          <div className={`h-2.5 w-full bg-gradient-to-r ${player.themeColor}`} />

          {/* Close Button Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white rounded-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Container Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
            
            {/* Header Block */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-20 bg-gradient-to-tr ${player.themeColor} rounded-md flex items-center justify-center shadow-lg border border-white/10`}>
                  <span className="text-2xl font-black font-mono text-white italic">#{player.number}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black uppercase tracking-wider text-amber-500 bg-white/[0.03] px-2.5 py-1 rounded-sm border border-white/10 flex items-center gap-1.5">
                      <span className="text-sm select-none">{getCountryFlagEmoji(player.country)}</span>
                      <span>{player.country}</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-500">•</span>
                    <span className="text-xs text-neutral-400 font-mono uppercase">{player.club}</span>
                  </div>
                  <h2 className="text-3.5xl font-black uppercase italic tracking-tighter text-white mt-1.5">{player.name}</h2>
                  <p className="text-xs font-bold text-neutral-400 mt-1 uppercase tracking-widest">{player.fullName}</p>
                </div>
              </div>

              {/* World Cup Summary counters */}
              <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
                <div className="bg-white/[0.02] border border-white/10 p-3.5 rounded-md text-center flex flex-col justify-center min-w-[80px]">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-black">Matches</span>
                  <span className="text-lg font-black text-white font-mono mt-0.5">{player.worldCupMatches}</span>
                </div>
                <div className="bg-white/[0.02] border border-white/10 p-3.5 rounded-md text-center flex flex-col justify-center min-w-[80px]">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase font-black">Goals</span>
                  <span className="text-lg font-black text-amber-500 font-mono mt-0.5">{player.worldCupGoals}</span>
                </div>
                <div className="bg-white/[0.02] border border-white/10 p-3.5 rounded-md text-center flex flex-col justify-center min-w-[80px]">
                  <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-black">Assists</span>
                  <span className="text-lg font-black text-emerald-500 font-mono mt-0.5">{player.worldCupAssists}</span>
                </div>
              </div>
            </div>

            {/* Main content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Heatmap, stats breakdown, biography */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Tactical Pitch heatmap */}
                <PlayerPitchHeatmap player={player} />

                {/* Biography box */}
                <div className="bg-[#181818]/80 rounded-md border border-white/10 p-5 space-y-2">
                  <h3 className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-black">Player Intel Brief</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">{player.bio}</p>
                  <div className="flex items-center gap-3 pt-2 text-xs font-mono text-neutral-400">
                    <span>Age: <strong className="text-white font-sans font-semibold">{player.age} Years Old</strong></span>
                    <span className="text-neutral-700">|</span>
                    <span>Role: <strong className="text-white font-sans font-semibold">{player.role}</strong></span>
                  </div>
                </div>

                {/* Strengths & Weaknesses checklists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-950/10 rounded-md border border-emerald-500/20">
                    <h4 className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-black mb-2.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-450" /> Key Attributes
                    </h4>
                    <ul className="space-y-1.5">
                      {player.strengths.map((str, i) => (
                        <li key={i} className="text-xs text-neutral-300 flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-red-950/10 rounded-md border border-red-500/20">
                    <h4 className="text-[10px] font-mono tracking-widest text-red-400 uppercase font-black mb-2.5 flex items-center gap-1.5">
                      <TrendingDown className="w-4 h-4 text-red-450" /> Vulnerabilities
                    </h4>
                    <ul className="space-y-1.5">
                      {player.weaknesses.map((weak, i) => (
                        <li key={i} className="text-xs text-neutral-300 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                          <span>{weak}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Numeric progress levels, Career timeline */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Dynamic progress bar breakdown */}
                <div className="bg-white/[0.02] rounded-md border border-white/10 p-5 space-y-4">
                  <h3 className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-black">Performance Breakout</h3>
                  
                  <div className="space-y-3.5">
                    {Object.entries(player.skills).map(([key, value]) => {
                      // Custom colors based on stats intensity
                      let statColor = 'bg-rose-500';
                      if (key === 'dribbling') statColor = 'bg-amber-400';
                      else if (key === 'shooting') statColor = 'bg-emerald-500';
                      else if (key === 'passing') statColor = 'bg-sky-400';
                      else if (key === 'defending') statColor = 'bg-orange-400';
                      else if (key === 'physicality') statColor = 'bg-indigo-400';

                      return (
                        <div key={key} className="space-y-1">
                          <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wide">
                            <span className="text-neutral-400 font-bold">{key}</span>
                            <span className="text-white font-black">{value} / 99</span>
                          </div>
                          <div className="h-2 bg-[#0a0a0a] rounded-sm overflow-hidden">
                            <motion.div
                              className={`h-full rounded-sm ${statColor}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${(value / 99) * 100}%` }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Career Achievements */}
                <div className="bg-[#181818]/60 rounded-md border border-white/10 p-5 space-y-3">
                  <h3 className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-black flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-400" /> Selected Landmark Records
                  </h3>
                  <div className="space-y-3">
                    {player.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-neutral-300">
                        <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="bg-black/90 border-t border-white/10 px-6 py-4 flex items-center justify-between text-neutral-500 text-[10px] font-mono tracking-widest uppercase">
            <span>TACTICAL SCOUT DATA UNIT #2026</span>
            <span>PRESS ESC TO CLOSE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
