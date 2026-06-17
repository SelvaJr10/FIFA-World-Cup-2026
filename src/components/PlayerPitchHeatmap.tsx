import { motion } from 'motion/react';
import { Player } from '../types';

interface PitchProps {
  player: Player;
}

export default function PlayerPitchHeatmap({ player }: PitchProps) {
  return (
    <div className="relative w-full rounded-2xl bg-neutral-900/80 border border-neutral-800 p-5 overflow-hidden">
      {/* Title & Position */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-neutral-400">Position Heatmap</h3>
          <p className="text-xl font-bold text-white tracking-tight">{player.role}</p>
        </div>
        <div className="px-3 py-1 bg-neutral-800/80 rounded-full border border-neutral-700/50">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">{player.position}</span>
        </div>
      </div>

      {/* The Visual Pitch */}
      <div className="relative aspect-[3/2] w-full bg-[#1b261b] rounded-xl border-2 border-neutral-700/50 overflow-hidden flex items-center justify-center">
        {/* Grass texture layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
        
        {/* Grid lawn cut stripes pattern */}
        <div className="absolute inset-0 grid grid-cols-6 opacity-10 pointer-events-none">
          <div className="border-r border-white bg-white/20" />
          <div className="border-r border-white" />
          <div className="border-r border-white bg-white/20" />
          <div className="border-r border-white" />
          <div className="border-r border-white bg-white/20" />
          <div className="bg-transparent" />
        </div>

        {/* Pitch Tactical Markings (SVG layer) */}
        <svg className="absolute inset-0 w-full h-full stroke-white/40 fill-none" viewBox="0 0 300 200">
          {/* Outer Border */}
          <rect x="10" y="10" width="280" height="180" rx="2" strokeWidth="1.5" />
          
          {/* Halfway line */}
          <line x1="150" y1="10" x2="150" y2="190" strokeWidth="1.5" />
          
          {/* Center Circle */}
          <circle cx="150" cy="100" r="30" strokeWidth="1.5" />
          <circle cx="150" cy="100" r="2" fill="currentColor" className="text-white/40" />

          {/* Left Penalty Area */}
          <rect x="10" y="45" width="45" height="110" strokeWidth="1.5" />
          <rect x="10" y="70" width="15" height="60" strokeWidth="1.5" />
          {/* Penalty Spot & Arc left */}
          <circle cx="42" cy="100" r="1.5" fill="currentColor" className="text-white/40" />
          <path d="M 55 83 A 25 25 0 0 1 55 117" strokeWidth="1.5" />

          {/* Right Penalty Area */}
          <rect x="245" y="45" width="45" height="110" strokeWidth="1.5" />
          <rect x="275" y="70" width="15" height="60" strokeWidth="1.5" />
          {/* Penalty Spot & Arc right */}
          <circle cx="258" cy="100" r="1.5" fill="currentColor" className="text-white/40" />
          <path d="M 245 83 A 25 25 0 0 0 245 117" strokeWidth="1.5" />

          {/* Corner Arcs */}
          <path d="M 10 18 A 8 8 0 0 0 18 10" strokeWidth="1" />
          <path d="M 290 18 A 8 8 0 0 1 282 10" strokeWidth="1" />
          <path d="M 18 190 A 8 8 0 0 0 10 182" strokeWidth="1" />
          <path d="M 282 190 A 8 8 0 0 1 290 182" strokeWidth="1" />
        </svg>

        {/* Heatmap spots overlaid dynamically */}
        {player.heatmapCoords.map((coord, idx) => {
          // Map 100x100 coordinated points to pitch sizing coordinates.
          // Left to right is attack vector (represented as left-side baseline to right-side goal)
          // X-coord represents depth (deep field up to penalty zone)
          const leftPercent = `${coord.x}%`;
          const topPercent = `${coord.y}%`;
          const glowClass = `absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-md opacity-75`;
          
          let flexColor = "bg-rose-500 shadow-[0_0_20px_#f43f5e]";
          if (coord.intensity > 8) {
            flexColor = "bg-red-500 shadow-[0_0_25px_#ef4444]";
          } else if (coord.intensity > 6) {
            flexColor = "bg-orange-500 shadow-[0_0_15px_#f97316]";
          } else {
            flexColor = "bg-yellow-500 shadow-[0_0_12px_#eab308]";
          }

          const sphereSize = 20 + coord.intensity * 4;

          return (
            <motion.div
              key={idx}
              className={`${glowClass} ${flexColor}`}
              style={{
                left: leftPercent,
                top: topPercent,
                width: `${sphereSize}px`,
                height: `${sphereSize}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0.9, 1.15, 0.9],
                opacity: [0.6, 0.85, 0.6]
              }}
              transition={{
                duration: 2.2 + idx * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Tactical Attack Vector arrow */}
        <div className="absolute bottom-2 right-4 flex items-center space-x-1 text-white/40">
          <span className="text-[9px] font-mono tracking-wider uppercase">Direction of Attack</span>
          <svg className="w-3 h-3 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Heatmap Legend */}
      <div className="flex items-center justify-between mt-3 text-xs text-neutral-400 bg-neutral-950/60 p-2.5 rounded-xl border border-neutral-800">
        <div className="flex items-center space-x-2">
          <div className="flex h-3 space-x-1 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 blur-[1px]" />
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 blur-[1px]" />
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 blur-[1px]" />
          </div>
          <span className="font-sans">Action Intensity (High to Low)</span>
        </div>
        <span className="font-mono text-neutral-400 text-[10px]">Opta Tracker Map v2.6</span>
      </div>
    </div>
  );
}
