/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../translations';

interface PageLoaderProps {
  onComplete: () => void;
  lang: Language;
}

export default function PageLoader({ onComplete, lang }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = lang === 'fr' 
    ? [
        'Établissement d\'une liaison de données sécurisée...',
        'Chargement du pôle de partenariat...',
        'Alignement des alliances stratégiques (NBTI & UKALD)...',
        'Synchronisation du pupitre de leadership...',
        'Finalisation du protocole de sécurité...'
      ]
    : [
        'Establishing secure data link...',
        'Loading Partnership Portal...',
        'Aligning Strategic Alliances (NBTI & UKALD)...',
        'Synchronizing Leadership Desk...',
        'Finalizing secure protocol...'
      ];

  useEffect(() => {
    // Progress counter with variable speeds to feel authentic and premium
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Small buffer for the complete animation
          setTimeout(onComplete, 600);
          return 100;
        }
        
        // Random incremental steps
        const step = Math.floor(Math.random() * 8) + 4; 
        return Math.min(prev + step, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Stagger transition of status messages relative to progress steps
    const statusIdx = Math.min(
      Math.floor((progress / 100) * statuses.length),
      statuses.length - 1
    );
    setStatusIndex(statusIdx);
  }, [progress, statuses.length]);

  return (
    <div className="fixed inset-0 z-[200] bg-surface flex flex-col items-center justify-center text-center px-6 selection:bg-transparent">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-animated-mesh opacity-40" />
      
      {/* Soft warm gold background glow spotlight */}
      <div className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[450px] h-[450px] rounded-full bg-[#bdae93]/5 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-sm w-full space-y-10">
        
        {/* Glowing Badge Container with Pulsating Seal placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-4"
        >
          {/* Outer Rotating thin dashed ring */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#bdae93]/30"
            />
            {/* Middle Glow Ring */}
            <div className="absolute inset-2 rounded-full border border-white/5 bg-surface-container/40 backdrop-blur-md flex items-center justify-center shadow-2xl" />
            
            {/* Center Brand Sigil / Tech Mark */}
            <motion.div 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#bdae93] to-white flex items-center justify-center text-on-surface-variant text-[#0a0a0a] font-serif text-sm font-bold shadow-[0_0_20px_rgba(189,174,147,0.35)]"
            >
              N
            </motion.div>
          </div>

          <div className="space-y-1">
            <h2 className="font-serif text-lg tracking-[0.15em] text-[#ffffff] font-semibold uppercase">
              NBTI NEXTGEN 2026
            </h2>
            <p className="font-sans text-[10px] tracking-[0.25em] text-[#bdae93] font-medium uppercase">
              {lang === 'fr' ? 'Cadre National d\'Innovation' : 'National Innovation Framework'}
            </p>
          </div>
        </motion.div>

        {/* Elegant Slider Bar Indicator */}
        <div className="space-y-3">
          <div className="w-full h-[2px] bg-white/[0.04] rounded-full overflow-hidden relative">
            <motion.div 
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#bdae93]/50 via-[#bdae93] to-white shadow-[0_0_8px_rgba(189,174,147,0.7)]"
            />
          </div>
          
          {/* Subtle percentage ticker */}
          <div className="flex justify-between items-center text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
            <span>{lang === 'fr' ? 'Chargement en cours' : 'Loading Status'}</span>
            <span className="text-[#bdae93] font-medium">{progress}%</span>
          </div>
        </div>

        {/* Dynamic Status message switcher with smooth fade transitions */}
        <div className="h-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="font-sans text-xs text-neutral-400 font-medium tracking-wide"
            >
              {statuses[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Additional security protocol footnote */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="pt-10 flex items-center justify-center gap-1.5 font-mono text-[9px] text-[#bdae93] uppercase tracking-[0.2em]"
        >
          <span className="w-1 h-1 bg-[#bdae93] rounded-full animate-ping" />
          <span>SSL Secure 2048-Bit Token Access</span>
        </motion.div>

      </div>
    </div>
  );
}
