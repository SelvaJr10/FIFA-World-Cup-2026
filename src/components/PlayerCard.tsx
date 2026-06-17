import { motion } from 'motion/react';
import { Award, Zap, Compass, Star, ChevronRight, User } from 'lucide-react';
import { Player } from '../types';
import { ALL_48_TEAMS } from '../data/teams';

function getCountryFlagEmoji(countryName: string): string {
  const team = ALL_48_TEAMS.find(t => t.name.toLowerCase() === countryName.toLowerCase() || t.id === countryName.toLowerCase());
  return team ? team.flag : '🌐';
}

interface PlayerCardProps {
  player: Player;
  onClick: () => void;
  key?: string | number;
}

export default function PlayerCard({ player, onClick }: PlayerCardProps) {
  // Map Country code to localized gorgeous gradient shield colors
  const getCountryCrestShield = (country: string) => {
    switch (country.toLowerCase()) {
      case 'argentina':
        return {
          bg: 'from-sky-300 to-sky-500 border-white',
          text: 'text-neutral-900',
          crest: 'AFA'
        };
      case 'brazil':
        return {
          bg: 'from-yellow-400 to-emerald-500 border-green-600',
          text: 'text-blue-900',
          crest: 'CBF'
        };
      case 'portugal':
        return {
          bg: 'from-emerald-600 to-red-600 border-green-500',
          text: 'text-yellow-300',
          crest: 'FPF'
        };
      case 'spain':
        return {
          bg: 'from-red-600 to-yellow-500 border-yellow-400',
          text: 'text-red-950',
          crest: 'RFEF'
        };
      case 'france':
        return {
          bg: 'from-blue-700 to-red-600 border-white',
          text: 'text-white',
          crest: 'FFF'
        };
      default:
        return {
          bg: 'from-neutral-500 to-neutral-700 border-neutral-400',
          text: 'text-white',
          crest: 'FIFA'
        };
    }
  };

  const crestInfo = getCountryCrestShield(player.country);

  // Return initials for avatar placeholder
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 350, damping: 24 }}
      onClick={onClick}
      className="relative group cursor-pointer bg-[#121212]/90 backdrop-blur-md rounded-md border border-white/10 hover:border-amber-500/50 overflow-hidden flex flex-col justify-between h-[450px] shadow-2xl transition-all"
    >
      {/* Background glow trail on hover */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${player.themeColor} opacity-5 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />

      {/* Card Header (Crest, Number, Team logo) */}
      <div className="p-5 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
        {/* Country Flag Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/5 border border-white/10 shadow-lg rounded-full flex items-center justify-center text-2xl filter group-hover:scale-105 duration-300 select-none">
            {getCountryFlagEmoji(player.country)}
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-white">{player.country}</span>
            <p className="text-[10px] text-neutral-400 font-mono uppercase -mt-0.5">{player.club}</p>
          </div>
        </div>

        {/* Big Squad number */}
        <div className="relative">
          <span className="text-4xl font-black italic tracking-tighter font-mono text-white/5 group-hover:text-amber-400/20 transition-all duration-300">
            #{player.number}
          </span>
        </div>
      </div>

      {/* Styled Player Illustration Avatar */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 my-4">
        {/* Colorful backplate */}
        <div className={`absolute w-36 h-36 rounded-full bg-gradient-to-tr ${player.themeColor} opacity-10 group-hover:opacity-25 blur-xl transition-all duration-500 scale-100 group-hover:scale-125`} />
        
        {/* Realistic Jersey Visual overlay */}
        <div className="relative w-28 h-28 rounded-md border border-white/10 bg-white/[0.02] flex items-center justify-center p-1 shadow-inner overflow-hidden">
          <span className="text-3xl font-black tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-neutral-600 uppercase">
            {getInitials(player.name)}
          </span>
          {/* Positional badge */}
          <div className="absolute bottom-1 right-1 bg-[#121212]/90 border border-white/10 px-2 py-0.5 rounded-sm">
            <span className="text-[9px] font-mono uppercase font-bold text-neutral-300">{player.position}</span>
          </div>
        </div>

        {/* Name and Role */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white group-hover:text-amber-500 transition-colors duration-300">
            {player.name}
          </h2>
          <p className="text-[10px] font-bold text-amber-500/80 uppercase tracking-widest mt-1 font-mono">
            {player.role}
          </p>
        </div>
      </div>

      {/* Primary Stats Grid */}
      <div className="bg-[#0c0c0c]/90 border-t border-white/10 p-5">
        <div className="grid grid-cols-6 gap-2 mb-4 text-center">
          <div>
            <span className="text-[9px] font-black text-neutral-500 font-mono uppercase tracking-tighter">PAC</span>
            <p className="text-[14px] font-black text-rose-500 font-mono mt-0.5">{player.skills.pace}</p>
          </div>
          <div>
            <span className="text-[9px] font-black text-neutral-500 font-mono uppercase tracking-tighter">DRI</span>
            <p className="text-[14px] font-black text-amber-400 font-mono mt-0.5">{player.skills.dribbling}</p>
          </div>
          <div>
            <span className="text-[9px] font-black text-neutral-500 font-mono uppercase tracking-tighter">SHO</span>
            <p className="text-[14px] font-black text-emerald-400 font-mono mt-0.5">{player.skills.shooting}</p>
          </div>
          <div>
            <span className="text-[9px] font-black text-neutral-500 font-mono uppercase tracking-tighter">PAS</span>
            <p className="text-[14px] font-black text-sky-450 font-mono mt-0.5">{player.skills.passing}</p>
          </div>
          <div>
            <span className="text-[9px] font-black text-neutral-500 font-mono uppercase tracking-tighter">DEF</span>
            <p className="text-[14px] font-black text-orange-400 font-mono mt-0.5">{player.skills.defending}</p>
          </div>
          <div>
            <span className="text-[9px] font-black text-neutral-500 font-mono uppercase tracking-tighter">PHY</span>
            <p className="text-[14px] font-black text-indigo-400 font-mono mt-0.5">{player.skills.physicality}</p>
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          className="flex items-center justify-center space-x-2 text-[10px] font-bold tracking-widest uppercase py-2 bg-white/[0.03] border border-white/10 rounded-sm hover:bg-white/[0.08] transition-all text-neutral-300 hover:text-white"
        >
          <span>Tactical Profile</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}
