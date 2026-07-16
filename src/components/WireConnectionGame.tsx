"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WireConnectionGame() {
  const [switchOn, setSwitchOn] = useState(false);
  const [bulbBrightness, setBulbBrightness] = useState(0);
  const [wireProgress, setWireProgress] = useState(0);
  const [showCircuit, setShowCircuit] = useState(false);
  const bulbRef = useRef<HTMLDivElement>(null);
  const wireRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (switchOn) {
      setShowCircuit(true);
      const wireTimer = setInterval(() => {
        setWireProgress(prev => {
          if (prev >= 100) {
            clearInterval(wireTimer);
            return 100;
          }
          return prev + 2;
        });
      }, 30);

      const bulbTimer = setInterval(() => {
        setBulbBrightness(prev => {
          if (prev >= 1) {
            clearInterval(bulbTimer);
            return 1;
          }
          return Math.min(1, prev + 0.05);
        });
      }, 40);

      return () => { clearInterval(wireTimer); clearInterval(bulbTimer); };
    } else {
      const wireTimer = setInterval(() => {
        setWireProgress(prev => {
          if (prev <= 0) {
            clearInterval(wireTimer);
            setShowCircuit(false);
            return 0;
          }
          return prev - 3;
        });
      }, 20);

      const bulbTimer = setInterval(() => {
        setBulbBrightness(prev => {
          if (prev <= 0) {
            clearInterval(bulbTimer);
            return 0;
          }
          return Math.max(0, prev - 0.08);
        });
      }, 30);

      return () => { clearInterval(wireTimer); clearInterval(bulbTimer); };
    }
  }, [switchOn]);

  const handleSwitchToggle = () => {
    setSwitchOn(!switchOn);
  };

  return (
    <div className="relative glass-strong rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-8 gradient-text">
        Circuit Simulator
      </h3>
      <p className="text-center text-white/40 text-sm mb-10 max-w-md mx-auto">
        Toggle the switch to complete the circuit and light the bulb. Built with real-time animation.
      </p>

      <div className="relative flex flex-col items-center justify-center gap-10">
        {/* Battery */}
        <div className="relative z-10">
          <div className="w-16 h-24 md:w-20 md:h-28 rounded-xl bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 flex flex-col items-center justify-between px-3 py-3 relative">
            <div className="w-6 h-2 bg-white/30 rounded-full" />
            <div className="w-4 h-1.5 bg-white/40 rounded" />
            <span className="text-xs font-bold text-black">+</span>
            <span className="text-xs font-bold text-black">-</span>
          </div>
        </div>

        {/* Switch */}
        <motion.button
          onClick={handleSwitchToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 group"
          aria-label="Toggle switch"
        >
          <div className={`w-20 h-32 md:w-24 md:h-36 rounded-2xl bg-gradient-to-b from-gray-800 via-gray-900 to-black flex items-center justify-center border-2 border-yellow-400/30 transition-all duration-300 ${switchOn ? 'border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)]' : ''}`}>
            <motion.div
              animate={{
                rotate: switchOn ? 45 : -45,
                x: switchOn ? 2 : -2,
                y: switchOn ? -2 : 2,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-6 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full relative"
            >
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-white/80 shadow-yellow-400/50" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-white/80 shadow-yellow-400/50" />
            </motion.div>
          </div>
          <p className={`text-center mt-3 text-sm font-medium ${switchOn ? 'text-yellow-400' : 'text-white/40'}`}>
            {switchOn ? 'ON' : 'OFF'}
          </p>
        </motion.button>

        {/* Animated Wires */}
        <AnimatePresence>
          {showCircuit && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-[200px] pointer-events-none"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <defs>
                <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#facc15" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                  <stop offset="100%" stopColor="#facc15" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path
                ref={wireRef}
                d="M 100 0 Q 100 60 100 120 Q 100 180 100 240"
                stroke="url(#wireGradient)"
                strokeWidth={3}
                fill="none"
                strokeDasharray="280"
                strokeDashoffset={280 - 280 * (wireProgress / 100)}
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0 0 4px #facc15) drop-shadow(0 0 8px #eab308)",
                  animation: "wire-pulse 1.5s ease-in-out infinite"
                }}
              />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Light Bulb */}
        <AnimatePresence mode="wait">
          <motion.div
            ref={bulbRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="relative">
              {/* Bulb glass */}
              <div
                className={`w-24 h-32 md:w-28 md:h-40 rounded-[50%_50%_30%_30%] relative mx-auto bg-gradient-to-b from-white/10 via-yellow-400/10 to-transparent border-2 border-yellow-400/30 transition-all duration-500 ${bulbBrightness > 0 ? 'border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.6)]' : ''}`}
                style={{
                  filter: `brightness(${1 + bulbBrightness})`,
                  boxShadow: bulbBrightness > 0
                    ? `0 0 ${20 + bulbBrightness * 60}px ${bulbBrightness * 10}px rgba(250, 204, 21, ${0.3 + bulbBrightness * 0.4}),
                       0 0 ${40 + bulbBrightness * 80}px ${bulbBrightness * 15}px rgba(234, 179, 8, ${0.2 + bulbBrightness * 0.3}),
                       inset 0 0 ${30 + bulbBrightness * 40}px rgba(253, 224, 71, ${0.2 + bulbBrightness * 0.3})`
                    : 'none',
                  animation: bulbBrightness > 0 ? 'bulb-glow 2s ease-in-out infinite' : 'none'
                }}
              >
                {/* Filament */}
                <motion.svg
                  className="absolute inset-0 pointer-events-none"
                  viewBox="0 0 56 80"
                >
                  <g filter="url(#glow)">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation={bulbBrightness * 2} result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M 28 15 Q 35 30 28 45 Q 21 30 28 15 M 28 45 Q 35 60 28 70 Q 21 60 28 45"
                      stroke="#facc15"
                      strokeWidth={bulbBrightness * 2.5 + 0.5}
                      fill="none"
                      strokeLinecap="round"
                      opacity={bulbBrightness}
                      style={{
                        filter: `drop-shadow(0 0 ${bulbBrightness * 8}px #facc15) drop-shadow(0 0 ${bulbBrightness * 16}px #eab308)`
                      }}
                    />
                    <circle
                      cx={28}
                      cy={15}
                      r={bulbBrightness * 3 + 1}
                      fill="#fde047"
                      opacity={bulbBrightness * 0.8}
                    />
                    <circle
                      cx={28}
                      cy={45}
                      r={bulbBrightness * 3 + 1}
                      fill="#fde047"
                      opacity={bulbBrightness * 0.8}
                    />
                    <circle
                      cx={28}
                      cy={70}
                      r={bulbBrightness * 3 + 1}
                      fill="#fde047"
                      opacity={bulbBrightness * 0.8}
                    />
                  </g>
                </motion.svg>

                {/* Bulb base */}
                <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-10 h-6 md:w-12 md:h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg border-l-2 border-r-2 border-yellow-400/30">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-2 bg-gray-600 rounded-b" />
                </div>

                {/* Contacts */}
                <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                </div>
              </div>

              {/* Glow ring around bulb */}
              <AnimatePresence>
                {bulbBrightness > 0.3 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-[50%_50%_30%_30%] border-2 border-yellow-300/30 pointer-events-none"
                    style={{ animation: 'bulb-glow 2s ease-in-out infinite' }}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Status indicator */}
        <div className="relative z-10 mt-6 text-center">
          <motion.div
            key={switchOn ? 'on' : 'off'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <motion.div
              animate={{ scale: switchOn ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 1, repeat: switchOn ? Infinity : 0 }}
              className={`w-3 h-3 rounded-full ${switchOn ? 'bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)]' : 'bg-gray-600'}`}
            />
            <span className={`text-sm font-medium ${switchOn ? 'text-yellow-400' : 'text-white/40'}`}>
              {switchOn ? 'Circuit Complete ⚡' : 'Circuit Open'}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Power meter */}
      <div className="mt-8">
        <div className="flex items-center justify-between text-xs text-white/30 mb-2">
          <span>Power Flow</span>
          <span>{Math.round(wireProgress)}%</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${wireProgress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
            style={{
              boxShadow: "0 0 10px rgba(250, 204, 21, 0.5), 0 0 20px rgba(234, 179, 8, 0.3)",
              filter: "drop-shadow(0 0 4px #facc15)"
            }}
          />
        </div>
      </div>
    </div>
  );
}