import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Scale, Star, Trophy, Zap, Sparkles } from 'lucide-react';
import { Player } from '../types';

interface CompareProps {
  players: Player[];
}

export default function CompareModule({ players }: CompareProps) {
  const [playerAId, setPlayerAId] = useState<string>('messi');
  const [playerBId, setPlayerBId] = useState<string>('mbappe');

  const playerA = players.find(p => p.id === playerAId) || players[0];
  const playerB = players.find(p => p.id === playerBId) || players[1];

  // Recalculating totals
  const totalA = Object.values(playerA.skills).reduce((sum, val) => sum + val, 0);
  const totalB = Object.values(playerB.skills).reduce((sum, val) => sum + val, 0);

  const getCompareColor = (valA: number, valB: number) => {
    if (valA > valB) return { a: 'text-amber-400 font-black', b: 'text-neutral-500 font-normal', barA: 'bg-amber-400 shadow-[0_0_8px_#f59e0b]', barB: 'bg-neutral-700' };
    if (valB > valA) return { a: 'text-neutral-500 font-normal', b: 'text-amber-400 font-black', barA: 'bg-neutral-700', barB: 'bg-amber-400 shadow-[0_0_8px_#f59e0b]' };
    return { a: 'text-white font-medium', b: 'text-white font-medium', barA: 'bg-neutral-400', barB: 'bg-neutral-400' };
  };

  const getStatTitle = (key: string) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      {/* Description */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-sm mb-3 shadow">
          <Scale className="w-4 h-4 text-amber-550 animate-pulse" />
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#ececec]">Head-to-Head Tactical Lab</span>
        </div>
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">Superstar Comparison</h2>
        <p className="text-xs font-bold text-neutral-450 uppercase tracking-widest mt-2 max-w-xl mx-auto">
          Contrast core technical attributes, goalscoring efficiency, and career achievements of the world's finest players.
        </p>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 bg-[#121212]/90 backdrop-blur-md p-4 rounded-md border border-white/10 mb-10">
        <div className="md:col-span-2">
          <label className="block text-[9px] font-mono tracking-wider text-neutral-400 mb-1.5 uppercase font-bold">Select Contender A</label>
          <select
            value={playerAId}
            onChange={(e) => setPlayerAId(e.target.value)}
            className="w-full bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-amber-500 rounded-md px-4 py-2.5 text-xs text-white font-extrabold uppercase outline-none transition-colors"
          >
            {players.map((p) => (
              <option key={p.id} value={p.id} disabled={p.id === playerBId}>
                {p.name.toUpperCase()} ({p.country.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center md:col-span-1">
          <div className="w-9 h-9 rounded-sm bg-amber-550/10 border border-amber-500/30 flex items-center justify-center shadow-lg">
            <span className="text-xs font-black font-mono text-amber-500">VS</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-[9px] font-mono tracking-wider text-neutral-400 mb-1.5 uppercase font-bold">Select Contender B</label>
          <select
            value={playerBId}
            onChange={(e) => setPlayerBId(e.target.value)}
            className="w-full bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-amber-500 rounded-md px-4 py-2.5 text-xs text-white font-extrabold uppercase outline-none transition-colors"
          >
            {players.map((p) => (
              <option key={p.id} value={p.id} disabled={p.id === playerAId}>
                {p.name.toUpperCase()} ({p.country.toUpperCase()})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Visual Arena comparison cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Player A brief */}
        <div className="lg:col-span-3 bg-[#121212]/90 backdrop-blur-md rounded-md border border-white/10 p-6 flex flex-col items-center">
          <div className={`w-28 h-28 rounded-md bg-gradient-to-tr ${playerA.themeColor} p-1 mb-4 flex items-center justify-center shadow-lg`}>
            <div className="w-full h-full rounded-md bg-[#0a0a0a] flex items-center justify-center">
              <span className="text-3xl font-black tracking-widest text-white uppercase">{playerA.name.split(' ').map(n=>n[0]).join('')}</span>
            </div>
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase font-black text-amber-500 bg-white/[0.03] px-2.5 py-0.5 rounded-sm border border-white/10">{playerA.country}</span>
          <h3 className="text-xl font-black uppercase italic tracking-tighter text-white mt-3">{playerA.name}</h3>
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">{playerA.role}</p>
          <div className="w-full border-t border-white/10 my-4 pt-4 flex flex-col space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-500 font-mono text-[10px] uppercase">CLUB</span>
              <span className="text-white font-bold uppercase">{playerA.club}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-500 font-mono text-[10px] uppercase">AGE</span>
              <span className="text-white font-bold">{playerA.age}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-500 font-mono text-[10px] uppercase">WC MATCHES</span>
              <span className="text-white font-bold">{playerA.worldCupMatches}</span>
            </div>
          </div>
        </div>

        {/* Center Grid: The stats crossroad and comparison progress */}
        <div className="lg:col-span-6 bg-[#0a0a0a]/90 border border-white/10 rounded-md p-6 lg:p-8 shadow-inner">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono tracking-widest text-[#939393] uppercase font-black">STATISTICAL COMPARISON</span>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-2" />
          </div>

          <div className="space-y-6">
            {/* Loop through actual numeric attributes */}
            {Object.keys(playerA.skills).map((skillKey) => {
              const valA = playerA.skills[skillKey as keyof typeof playerA.skills];
              const valB = playerB.skills[skillKey as keyof typeof playerB.skills];
              const styleSet = getCompareColor(valA, valB);

              return (
                <div key={skillKey} className="flex flex-col">
                  {/* Values & Label row */}
                  <div className="flex justify-between items-center mb-1 text-xs font-mono font-bold tracking-wide">
                    <span className={`${styleSet.a}`}>{valA}</span>
                    <span className="text-[9px] font-sans tracking-widest text-neutral-400 uppercase font-bold">{getStatTitle(skillKey)}</span>
                    <span className={`${styleSet.b}`}>{valB}</span>
                  </div>

                  {/* Dual Comparison bar */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Player A inverted bar */}
                    <div className="h-2 bg-white/[0.03] border border-white/5 rounded-sm overflow-hidden flex justify-end">
                      <motion.div
                        className={`h-full rounded-sm ${styleSet.barA}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${valA}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    {/* Player B standard bar */}
                    <div className="h-2 bg-white/[0.03] border border-white/5 rounded-sm overflow-hidden flex justify-start">
                      <motion.div
                        className={`h-full rounded-sm ${styleSet.barB}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${valB}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Total Radar stats aggregation */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex justify-between items-center mb-3 font-mono text-xs font-bold">
                <span className={`text-sm font-black ${totalA > totalB ? 'text-amber-500' : 'text-neutral-400'}`}>{totalA}</span>
                <span className="text-neutral-400 font-sans font-extrabold tracking-widest text-[9px] uppercase">AGGREGATE ATTRIBUTE TOTAL</span>
                <span className={`text-sm font-black ${totalB > totalA ? 'text-amber-500' : 'text-neutral-400'}`}>{totalB}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-[10px] font-mono font-black tracking-widest text-neutral-300 bg-white/[0.02] p-2 text-center rounded-sm border border-white/5">
                  AVG: {Math.round(totalA / 6)}
                </div>
                <div className="text-[10px] font-mono font-black tracking-widest text-neutral-300 bg-white/[0.02] p-2 text-center rounded-sm border border-white/5">
                  AVG: {Math.round(totalB / 6)}
                </div>
              </div>
            </div>

            {/* Crucial World Cup metrics head to head */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <div className="text-center">
                <span className="text-[10px] font-mono tracking-widest text-[#9e9e9e] uppercase font-black">WORLD CUP RECORDS</span>
              </div>
              
              {/* World Cup Goals */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                  <span className={playerA.worldCupGoals > playerB.worldCupGoals ? 'text-amber-500 font-extrabold' : 'text-neutral-400'}>{playerA.worldCupGoals}</span>
                  <span className="text-[9px] text-neutral-450 font-sans font-bold tracking-wider">WORLD CUP GOALS</span>
                  <span className={playerB.worldCupGoals > playerA.worldCupGoals ? 'text-amber-500 font-extrabold' : 'text-neutral-400'}>{playerB.worldCupGoals}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 h-1.5 bg-white/[0.03] rounded-sm overflow-hidden">
                  <div className="flex justify-end"><div className={`h-full rounded-sm ${playerA.worldCupGoals > playerB.worldCupGoals ? 'bg-amber-500' : 'bg-neutral-600'}`} style={{ width: `${Math.min(100, (playerA.worldCupGoals / 16) * 100)}%` }} /></div>
                  <div className="flex justify-start"><div className={`h-full ${playerB.worldCupGoals > playerA.worldCupGoals ? 'bg-amber-500' : 'bg-neutral-600'}`} style={{ width: `${Math.min(100, (playerB.worldCupGoals / 16) * 100)}%` }} /></div>
                </div>
              </div>

              {/* World Cup Assists */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                  <span className={playerA.worldCupAssists > playerB.worldCupAssists ? 'text-amber-500 font-extrabold' : 'text-neutral-400'}>{playerA.worldCupAssists}</span>
                  <span className="text-[9px] text-neutral-455 font-sans font-bold tracking-wider">WORLD CUP ASSISTS</span>
                  <span className={playerB.worldCupAssists > playerA.worldCupAssists ? 'text-amber-500 font-extrabold' : 'text-neutral-400'}>{playerB.worldCupAssists}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 h-1.5 bg-white/[0.03] rounded-sm overflow-hidden">
                  <div className="flex justify-end"><div className={`h-full rounded-sm ${playerA.worldCupAssists > playerB.worldCupAssists ? 'bg-amber-500' : 'bg-neutral-600'}`} style={{ width: `${Math.min(100, (playerA.worldCupAssists / 10) * 100)}%` }} /></div>
                  <div className="flex justify-start"><div className={`h-full ${playerB.worldCupAssists > playerA.worldCupAssists ? 'bg-amber-500' : 'bg-neutral-600'}`} style={{ width: `${Math.min(100, (playerB.worldCupAssists / 10) * 100)}%` }} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Player B brief */}
        <div className="lg:col-span-3 bg-[#121212]/90 backdrop-blur-md rounded-md border border-white/10 p-6 flex flex-col items-center">
          <div className={`w-28 h-28 rounded-md bg-gradient-to-tr ${playerB.themeColor} p-1 mb-4 flex items-center justify-center shadow-lg`}>
            <div className="w-full h-full rounded-md bg-[#0a0a0a] flex items-center justify-center">
              <span className="text-3xl font-black tracking-widest text-white uppercase">{playerB.name.split(' ').map(n=>n[0]).join('')}</span>
            </div>
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase font-black text-amber-500 bg-white/[0.03] px-2.5 py-0.5 rounded-sm border border-white/10">{playerB.country}</span>
          <h3 className="text-xl font-black uppercase italic tracking-tighter text-white mt-3">{playerB.name}</h3>
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">{playerB.role}</p>
          <div className="w-full border-t border-white/10 my-4 pt-4 flex flex-col space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-500 font-mono text-[10px] uppercase">CLUB</span>
              <span className="text-white font-bold uppercase">{playerB.club}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-500 font-mono text-[10px] uppercase">AGE</span>
              <span className="text-white font-bold">{playerB.age}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-500 font-mono text-[10px] uppercase">WC MATCHES</span>
              <span className="text-white font-bold">{playerB.worldCupMatches}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
