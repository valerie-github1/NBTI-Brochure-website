/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TabId } from './types';
import Navigation from './components/Navigation';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import SovereignHub from './components/SovereignHub';
import StrategicPartnerships from './components/StrategicPartnerships';
import InnovationLeaders from './components/InnovationLeaders';
import SecretariatModal from './components/SecretariatModal';
import WhitepaperModal from './components/WhitepaperModal';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { Language } from './translations';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('hub');
  const [contactOpen, setContactOpen] = useState(false);
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handle scroll to toggle back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[200]"
          >
            <PageLoader lang={lang} onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-surface flex flex-col justify-between selection:bg-secondary-container selection:text-on-secondary-container text-on-surface antialiased overflow-x-hidden">
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#bdae93] origin-left z-[100]" 
        style={{ scaleX }}
      />
      
      {/* Top Application Bar (Persistent Navigation) */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenContact={() => setContactOpen(true)} 
        lang={lang}
        setLang={setLang}
      />

      {/* Main Container */}
      <main className="flex-grow pt-16">
        {activeTab === 'hub' && (
          <SovereignHub 
            setActiveTab={setActiveTab} 
            onOpenContact={() => setContactOpen(true)} 
            lang={lang}
          />
        )}
        
        {activeTab === 'partnerships' && (
          <StrategicPartnerships 
            onOpenWhitepaper={() => setWhitepaperOpen(true)} 
            onOpenContact={() => setContactOpen(true)} 
            lang={lang}
          />
        )}
        
        {activeTab === 'leaders' && (
          <InnovationLeaders lang={lang} />
        )}
      </main>

      {/* Footer System */}
      <Footer setActiveTab={setActiveTab} lang={lang} setLang={setLang} />

      {/* Modals Dialog System */}
      <SecretariatModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
        lang={lang}
      />
      
      <WhitepaperModal 
        isOpen={whitepaperOpen} 
        onClose={() => setWhitepaperOpen(false)} 
        lang={lang}
      />

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-[#2a2a2a] border-2 border-[#a89984] text-neutral-100 hover:bg-[#3c3836] hover:text-white hover:border-white hover:scale-110 active:scale-95 shadow-[0_4px_25px_rgba(0,0,0,0.6)] transition-all duration-300 cursor-pointer group flex items-center justify-center backdrop-blur-md"
          aria-label="Back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
      
    </div>
    </>
  );
}

