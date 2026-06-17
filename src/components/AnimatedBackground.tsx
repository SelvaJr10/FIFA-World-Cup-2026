import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
// @ts-ignore
import backgroundImage from '../assets/images/world_cup_bg_1781611190430.jpg';

interface Silhouette {
  id: number;
  type: 'kick' | 'run' | 'jump' | 'dribble';
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [silhouettes, setSilhouettes] = useState<Silhouette[]>([]);

  useEffect(() => {
    // Generate a set of colorful animated background players
    const types: ('kick' | 'run' | 'jump' | 'dribble')[] = ['kick', 'run', 'jump', 'dribble'];
    const colors = [
      'rgba(59, 130, 246, 0.25)',  // Cyan / Blue (France/Argentina vibe)
      'rgba(234, 179, 8, 0.22)',   // Yellow (Brazil/Spain vibe)
      'rgba(34, 197, 94, 0.25)',   // Green (Brazil vibe)
      'rgba(239, 68, 68, 0.25)',   // Red (Spain/Portugal vibe)
      'rgba(168, 85, 247, 0.22)',  // Purple (Electric accent)
    ];

    const list: Silhouette[] = [
      { id: 1, type: 'kick', x: 5, y: 15, size: 240, color: colors[0], duration: 18, delay: 0 },
      { id: 2, type: 'run', x: 75, y: 10, size: 200, color: colors[1], duration: 22, delay: 1 },
      { id: 3, type: 'jump', x: 80, y: 60, size: 220, color: colors[2], duration: 19, delay: 4 },
      { id: 4, type: 'dribble', x: 10, y: 65, size: 180, color: colors[3], duration: 25, delay: 2 },
      { id: 5, type: 'kick', x: 45, y: 40, size: 160, color: colors[4], duration: 30, delay: 3 },
    ];

    setSilhouettes(list);
  }, []);

  // SVG representation of soccer players in action
  const renderPlayerSvg = (type: string, color: string) => {
    switch (type) {
      case 'kick':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" style={{ filter: `drop-shadow(0 0 20px ${color})` }}>
            {/* Kicking player silhouette */}
            <path
              d="M30 75 L35 55 L20 45 L35 30 L45 15 H52 L48 30 L65 35 L75 25 M35 55 L48 65 L44 90 M48 65 L60 80 M78 24 A 4 4 0 1 0 78 16 A 4 4 0 1 0 78 24 Z"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Energy trail ball */}
            <motion.circle
              cx="82"
              cy="20"
              r="3"
              fill="#ffffff"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </svg>
        );
      case 'run':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" style={{ filter: `drop-shadow(0 0 20px ${color})` }}>
            {/* Running player */}
            <path
              d="M48 20 A 4 4 0 1 0 48 12 A 4 4 0 1 0 48 20 Z M46 22 L35 38 L45 42 L38 60 L24 85 M38 60 L50 63 L48 83 M45 42 L56 32 L68 38"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'jump':
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" style={{ filter: `drop-shadow(0 0 20px ${color})` }}>
            {/* Diving keeper or leaping player */}
            <path
              d="M35 15 A 3.5 3.5 0 1 0 35 8 A 3.5 3.5 0 1 0 35 15 Z M35 18 L55 35 L78 30 M55 35 L50 60 L68 85 M50 60 L32 75 L18 80 M55 35 L38 32 L22 24"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'dribble':
      default:
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" style={{ filter: `drop-shadow(0 0 20px ${color})` }}>
            {/* Dribbling player bent over the ball */}
            <path
              d="M42 18 A 3.5 3.5 0 1 0 42 11 A 3.5 3.5 0 1 0 42 18 Z M40 20 L28 35 L38 48 L46 72 M38 48 L52 38 L64 45 M46 72 L36 90 M46 72 L55 85"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Football at foot */}
            <motion.circle
              cx="31"
              cy="91"
              r="2.5"
              stroke="#ffffff"
              strokeWidth="1"
              fill={color}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#020203]">
      {/* Immersive FIFA World Cup Gold Trophy Backdrop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={backgroundImage}
          alt="FIFA World Cup Trophy Dust"
          className="w-full h-full object-cover opacity-45 scale-[1.02] select-none pointer-events-none mix-blend-lighten filter brightness-90 saturate-125"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge vignette mask to maximize text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-[#020203]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020203] via-transparent to-[#020203]/70" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Vibrant Background Elements - Football Stadium Evening Beam Glow */}
      <div className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] bg-emerald-600 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[550px] h-[550px] bg-emerald-800 rounded-full mix-blend-screen filter blur-[110px] opacity-30 animate-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-amber-500 rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-pulse" style={{ animationDuration: '9s' }}></div>

      {/* Geometric Overlay Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Football pitch style tactical gridlines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.16] transform scale-105" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Tactical board arcs */}
        <circle cx="50%" cy="50%" r="180" fill="none" stroke="rgba(16, 185, 129, 0.45)" strokeWidth="1.8" />
        <circle cx="50%" cy="50%" r="5" fill="rgba(16, 185, 129, 0.6)" />
        <rect x="5%" y="20%" width="15%" height="60%" fill="none" stroke="rgba(16, 185, 129, 0.45)" strokeWidth="1.8" />
        <rect x="80%" y="20%" width="15%" height="60%" fill="none" stroke="rgba(16, 185, 129, 0.45)" strokeWidth="1.8" />
        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(16, 185, 129, 0.45)" strokeWidth="1.8" />
      </svg>

      {/* Animated Floating Players */}
      {silhouettes.map((player) => (
        <motion.div
          key={player.id}
          className="absolute opacity-60"
          style={{
            left: `${player.x}%`,
            top: `${player.y}%`,
            width: `${player.size}px`,
            height: `${player.size}px`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: player.duration,
            delay: player.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {renderPlayerSvg(player.type, player.color)}
        </motion.div>
      ))}

      {/* Drifting particle fireflies resembling electric matches */}
      {[...Array(12)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDur = 4 + Math.random() * 6;
        const randomSize = 3 + Math.random() * 5;
        const colorPalette = ['#38bdf8', '#34d399', '#fbbf24', '#f87171', '#c084fc'];
        const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              backgroundColor: randomColor,
              boxShadow: `0 0 10px ${randomColor}`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, 30, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: randomDur,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
          />
        );
      })}
    </div>
  );
}
