/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  CheckCircle,
  Share2,
} from "lucide-react";
import { TabId } from "../types";
import { Language, translations } from "../translations";

interface FooterProps {
  setActiveTab: (tab: TabId) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Footer({ setActiveTab, lang, setLang }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = translations[lang];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);

    // Trigger mailto for newsletter subscription requested by user: "All email must go to topeomojayogbe@ukald.com"
    const subject = encodeURIComponent("NBTI NextGen Newsletter Sign Up");
    const body = encodeURIComponent(
      `Please subscribe this email to the newsletter: ${email}`,
    );

    setTimeout(() => {
      window.location.href = `mailto:topeomojayogbe@ukald.com?subject=${subject}&body=${body}`;
      setSubscribing(false);
      setShowSuccess(true);
      setEmail("");
    }, 400);
  };

  const handleShare = () => {
    const shareData = {
      title: "NBTI NextGen 2026 Innovation Portal",
      text: "Access the Canada-Africa Innovation Portal & technological advancement roadmap",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        console.log("Error sharing:", err);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 relative pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12 pb-16">
        {/* Left column */}
        <div className="max-w-sm space-y-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white border border-outline-variant flex items-center justify-center p-1.5 shadow-lg overflow-hidden shrink-0 hover:scale-105 transition-all duration-300 animate-fade-in" title="National Board for Technology Incubation (NBTI)">
                <img
                  alt="National Board for Technology Incubation Logo"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKQu5YwnkyAWX3ZkAq8hOUmXN3rOsFGczIougfm6rSNBZxjyUenhtB7amGN-djt-Ws42YHrxjpDupVFkuF4m37anEvFcUkkiMilnYgGVYHVAQ4Y6A8d9tSsU2Vo4CuVd66MGwAdhRXahQJZhnvvKUemB0k9ZsPeO9vphXeJ5Pux4D82qmlWkr6n-E5c3L-kBzVQWmMtRujVHgeq0d7CE-VxRSWEVNxO33c0eOcu7kZcEyRT3umiBSkkWwAvYfdEQ1oLNKxMul3S28"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-16 h-16 rounded-full bg-white border border-outline-variant flex items-center justify-center p-1.5 shadow-lg overflow-hidden shrink-0 hover:scale-105 transition-all duration-300 animate-fade-in" title="UKALD Strategy & Advisory">
                <img
                  alt="UKALD Logo"
                  className="w-full h-full object-contain scale-[1.12]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNrqqFFCKlsdsI2HnTHCMAbGPt0lUMF-XgxTFsZNolBtCy1Vac9K2W7ZE0ll7DYW6uZ_ZJwBeevPP3YSbpS-j2zbot3SVSTeKwPxHbZJHhXYzUb9DakhZD4MfaDpCiwGXcAfFo5oZVWuuOCd-ripbJKF5b3ZfHj3RvoO2TsuLzch3LyukZnmt331Dx3Qc45Hr8eJrvSMJ8YEz9MZZx_V1SkwLgJU6XBGbuRzw3Lw1j3_IqJqZQKVOcwzLjnD6hCgWNOX-_M9eFY5o"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="h-px w-36 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>
          <span className="font-serif text-xl font-bold text-primary block">
            {t.nbtiNextgen}
          </span>
          <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
            {t.nbtiDesc}
          </p>
          <div className="pt-4 border-t border-white/5 space-y-2.5 font-sans text-xs">
            <div className="flex items-center gap-2">
              <span className="text-secondary font-bold">Email:</span>
              <a
                href="mailto:info@nextgeninnovation.ng"
                className="text-white hover:underline hover:text-secondary transition-colors"
                title="Send official inquiry to info@nextgeninnovation.ng"
              >
                info@nextgeninnovation.ng
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary font-bold">Website:</span>
              <a
                href="https://www.nextgeninnovation.ng"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline hover:text-secondary transition-colors"
                title="Visit official portal www.nextgeninnovation.ng"
              >
                www.nextgeninnovation.ng
              </a>
            </div>
          </div>

          {/* Social Icons matching mockups precisely including active shares */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.facebook.com/nbti.hq/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 shadow-sm"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/NigeriaNBTI/status/2027664131843674380"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 shadow-sm"
              title="X"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/nbtihq/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 shadow-sm"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/national-board-for-technology-incubation-92545a34b"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#bdae93]/30 hover:text-white hover:border-[#bdae93]/50 transition-all duration-300 shadow-sm opacity-60"
              title="LinkedIn (Coming Soon)"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@nbti-hq"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 shadow-sm"
              title="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 shadow-sm cursor-pointer"
              title="Share Portal"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto flex-grow md:pl-16">
          <div className="space-y-6">
            <h6 className="font-sans text-[11px] font-bold text-primary uppercase tracking-[0.2em] block">
              {t.ecosystem}
            </h6>
            <ul className="space-y-4 font-sans text-xs md:text-sm">
              <li>
                <button
                  onClick={() => setActiveTab("mandate")}
                  className="text-on-surface-variant hover:text-primary transition-colors text-left cursor-pointer"
                >
                  {t.navMandate}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("footprint")}
                  className="text-on-surface-variant hover:text-primary transition-colors text-left cursor-pointer"
                >
                  {t.navFootprint}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("framework")}
                  className="text-on-surface-variant hover:text-primary transition-colors text-left cursor-pointer"
                >
                  {t.navFramework}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("leadership")}
                  className="text-on-surface-variant hover:text-primary transition-colors text-left cursor-pointer"
                >
                  {t.navLeaders}
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-sans text-[11px] font-bold text-primary uppercase tracking-[0.2em] block">
              {t.governance}
            </h6>
            <ul className="space-y-4 font-sans text-xs md:text-sm">
              <li>
                <a
                  href="https://nextgeninnovation.ng/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors block"
                >
                  {t.officialPortal}
                </a>
              </li>
              <li>
                <a
                  href="https://ukald.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors block font-semibold text-secondary"
                >
                  {lang === "fr" ? "Rejoindre le Réseau" : "Join the Network"}
                </a>
              </li>
              <li>
                <a
                  href="https://nextgeninnovation.ng/nextgen-innovation-homepage/#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors block"
                >
                  {t.complianceRoadmap}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-6">
            <h6 className="font-sans text-[11px] font-bold text-primary uppercase tracking-[0.2em] block">
              {t.newsletterSub}
            </h6>
            <form
              onSubmit={handleSubscribe}
              className="flex rounded-sm overflow-hidden shadow-sm border border-outline-variant/30 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-surface-container-low border-none font-sans text-xs px-4 py-3 w-full focus:ring-0 focus:outline-none text-white"
                placeholder={t.emailPlh}
                type="email"
                required
              />
              <button
                className="bg-white text-black px-4 py-3 hover:bg-secondary hover:text-black transition-all cursor-pointer shrink-0"
                type="submit"
                disabled={subscribing}
                title="Submit to topeomojayogbe@ukald.com"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="font-sans text-[10px] text-on-surface-variant/80 italic leading-relaxed">
              {t.newsletterDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Under footnote with Languages Toggle */}
      <div className="max-w-[1440px] mx-auto border-t border-outline-variant/20 px-6 md:px-16 pt-8 text-center md:flex justify-between items-center text-left">
        <p className="font-sans text-[11px] text-on-surface-variant/80 mb-4 md:mb-0">
          © {new Date().getFullYear()} {t.rightsReserved}
        </p>

        {/* Footnote simple language toggler */}
        <div className="flex justify-center gap-6 text-xs font-sans font-bold tracking-widest text-on-surface">
          <button
            onClick={() => setLang("en")}
            className={`cursor-pointer transition-colors ${lang === "en" ? "text-[#bdae93]" : "text-neutral-500 hover:text-white"}`}
          >
            ENGLISH
          </button>
          <button
            onClick={() => setLang("fr")}
            className={`cursor-pointer transition-colors ${lang === "fr" ? "text-[#bdae93]" : "text-neutral-500 hover:text-white"}`}
          >
            FRANÇAIS
          </button>
        </div>
      </div>

      {/* Subscription success modal inside context */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-surface-container w-full max-w-sm p-8 shadow-2xl border border-outline-variant/60 rounded-xl text-center space-y-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">
              Subscription Registered
            </h3>
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed font-semibold">
              Your registration email has been initialized. Standard dispatch is
              forwarded to{" "}
              <span className="font-bold text-white block mt-1 underline">
                topeomojayogbe@ukald.com
              </span>
              .
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-white text-black py-3 font-sans text-xs font-bold hover:bg-secondary hover:text-black transition-all uppercase tracking-widest rounded-[4px] cursor-pointer animate-pulse-soft"
            >
              DISMISS
            </button>
          </div>
        </div>
      )}

      {/* Dynamic Floating Link Copied Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-12 left-1/2 z-[150] flex items-center gap-3 bg-[#1d2021]/95 text-neutral-100 border border-[#a89984] px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md font-sans text-xs font-bold uppercase tracking-widest"
          >
            <CheckCircle className="w-4 h-4 text-secondary shrink-0 animate-bounce" />
            <span>
              {lang === "fr" ? "Lien partagé copié !" : "Share link copied!"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
