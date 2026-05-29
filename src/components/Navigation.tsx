/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { TabId } from "../types";
import { Language, translations } from "../translations";

interface NavigationProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  onOpenContact: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navigation({
  activeTab,
  setActiveTab,
  onOpenContact,
  lang,
  setLang,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const t = translations[lang];

  const navItems = [
    { id: "hub" as TabId, label: t.navHub },
    { id: "partnerships" as TabId, label: t.navPartnerships },
    { id: "leaders" as TabId, label: t.navLeaders },
  ];

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <header className="bg-[#0c0c0c] border-b border-neutral-800 shadow-xl fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-4 flex justify-between items-center bg-[#0c0c0c]">
        {/* Left: Logo and Title */}
        <div
          onClick={() => handleTabChange("hub")}
          className="flex items-center gap-4 shrink-0 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-full bg-white border border-neutral-800 flex items-center justify-center p-1.5 shadow-md overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
            <img
              alt="NBTI Official Logo"
              className="w-full h-full object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3qxqrbSdgsDg1m2XLHNi6o59Vk38S0pqJcQCQIE0nDSXBr0qEZJrc772ATUYb6tr1EWXQlhlXoMVDynFbnFYSizJLieys3EUdkOLRQ1ob9RY0RSW8QKAP-GwE8NtqpGj-DZok8yX2bWZ-QhxRiaES6AhEIobVUacCa75zraXSxwB6j1woqMuyJGAzLmWvKuB6JDTmd0GyIBD6XNIZI8hcbi4AkdHt-zgxb62LAurObjt3O2obfXtpiwPYyGQGk6pIb4bDFTiBRBg"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight whitespace-nowrap">
              {t.nbtiNextgen}
            </span>
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse-soft hidden md:block"></span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 bg-[#0c0c0c]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`font-sans font-bold text-[12px] tracking-[0.1em] transition-all duration-300 uppercase py-1 relative ${
                activeTab === item.id
                  ? "text-[#bdae93] font-black"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#bdae93] rounded-full" />
              )}
            </button>
          ))}
          <div className="h-4 w-px bg-neutral-800"></div>

          {/* Contact Triggers in navbar */}
          <button
            onClick={onOpenContact}
            className="font-sans font-bold text-[12px] tracking-[0.1em] text-neutral-300 hover:text-white transition-colors uppercase cursor-pointer"
          >
            {t.navContactItem}
          </button>

          {/* Simple Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="font-sans font-semibold text-[12px] text-white hover:text-[#bdae93] flex items-center gap-1 active:scale-95 transition-transform duration-200 uppercase cursor-pointer"
            >
              {lang.toUpperCase()} <ChevronDown className="w-4 h-4" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#121212] border border-neutral-800 rounded shadow-xl py-1 z-50">
                <button
                  onClick={() => {
                    setLangOpen(false);
                    setLang("en");
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs font-sans hover:bg-neutral-800 transition-colors cursor-pointer ${
                    lang === "en" ? "text-[#bdae93] font-bold" : "text-neutral-300 hover:text-[#bdae93]"
                  }`}
                >
                  {t.langEn}
                </button>
                <button
                  onClick={() => {
                    setLangOpen(false);
                    setLang("fr");
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs font-sans hover:bg-neutral-800 transition-colors cursor-pointer ${
                    lang === "fr" ? "text-[#bdae93] font-bold" : "text-neutral-300 hover:text-[#bdae93]"
                  }`}
                >
                  {t.langFr}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#bdae93] p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-[73px] left-0 w-full bg-[#0c0c0c] border-b border-neutral-800 shadow-2xl py-6 px-6 space-y-4 animate-in fade-in slide-in-from-top duration-300 z-40">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`text-left font-sans font-bold text-sm tracking-widest uppercase transition-colors py-2 ${
                  activeTab === item.id
                    ? "text-[#bdae93] font-black"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContact();
              }}
              className="text-left font-sans font-bold text-sm tracking-widest uppercase text-neutral-300 hover:text-white py-2 cursor-pointer"
            >
              {t.navContact}
            </button>
            <div className="pt-4 border-t border-neutral-800 flex gap-4">
              <button
                onClick={() => setLang("en")}
                className={`font-sans font-semibold text-xs tracking-widest uppercase cursor-pointer ${
                  lang === "en" ? "text-[#bdae93]" : "text-neutral-500 hover:text-[#bdae93]"
                }`}
              >
                {t.langEn}
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`font-sans font-semibold text-xs tracking-widest uppercase cursor-pointer ${
                  lang === "fr" ? "text-[#bdae93]" : "text-neutral-500 hover:text-[#bdae93]"
                }`}
              >
                {t.langFr}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
