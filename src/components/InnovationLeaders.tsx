/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { PIONEERS_DATA, MILESTONES_DATA, PARTNERS_DATA } from "../data";
import {
  TrendingUp,
  Zap,
  Network,
  ChevronRight,
  ArrowUpRight,
  Shield,
  Globe2,
  QrCode,
  Building,
  Cpu,
  Activity,
  Award,
  Handshake,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { Language, translations } from "../translations";

const STATUTORY_MILESTONES = [
  {
    year: "2021",
    centers: 21,
    rd: 150,
    startups: 320,
    sovereignty: 45,
  },
  {
    year: "2022",
    centers: 25,
    rd: 180,
    startups: 440,
    sovereignty: 52,
  },
  {
    year: "2023",
    centers: 29,
    rd: 230,
    startups: 610,
    sovereignty: 63,
  },
  {
    year: "2024",
    centers: 32,
    rd: 310,
    startups: 920,
    sovereignty: 76,
  },
  {
    year: "2025",
    centers: 36,
    rd: 450,
    startups: 1350,
    sovereignty: 88,
  },
  {
    year: "2026",
    centers: 42,
    rd: 600,
    startups: 1800,
    sovereignty: 95,
  },
];

const chartLabels = {
  en: {
    title: "Statutory Performance & Incubation Tracker",
    centers: "Active Hub Centers",
    rd: "R&D Commercialized",
    startups: "Graduated Startups",
    sovereignty: "Autonomy Rating",
    desc: "National board capacity projections and actual achievements across technology incubation centers.",
    centersUnits: " Centers established",
    rdUnits: " Transfer Projects",
    startupsUnits: " Registered Startups",
    sovereigntyUnits: "% Autonomy Index",
    yearLabel: "Academic & Fiscal Year",
    legendTitle: "Annual Performance Growth Index (2021 - 2026)"
  },
  fr: {
    title: "Suivi des Performances de l'Incubation",
    centers: "Centres d'Incubation Actifs",
    rd: "Recherches Commercialisées",
    startups: "SMEs Enregistrées",
    sovereignty: "Indice d'Autonomie",
    desc: "Projections et acquisitions réelles du réseau national de centres d'incubation technologique.",
    centersUnits: " Centres établis",
    rdUnits: " Transferts technologiques",
    startupsUnits: " Startups lancées",
    sovereigntyUnits: "% Indice d'Autonomie",
    yearLabel: "Année Académique & Fiscale",
    legendTitle: "Indicateur de Croissance Annuel (2021 - 2026)"
  }
};

const getMetricColor = (metric: "centers" | "rd" | "startups" | "sovereignty") => {
  switch (metric) {
    case "centers":
      return "#bdae93"; // secondary gold
    case "rd":
      return "#dfaf87"; // sandy peach
    case "startups":
      return "#a89984"; // rich slate
    case "sovereignty":
      return "#8ec07c"; // mint forest
    default:
      return "#bdae93";
  }
};

const CustomTooltip = ({ active, payload, label, unit }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#121212]/95 border border-[#bdae93]/30 p-4 rounded-lg shadow-2xl backdrop-blur-md">
        <p className="font-sans text-[11px] text-on-surface-variant mb-2 font-bold uppercase tracking-wider">{`Year ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="font-sans text-xs text-neutral-200 flex justify-between items-center gap-6">
            <span className="opacity-75">{entry.name}:</span>
            <span className="font-sans font-bold text-secondary">
              {entry.value.toLocaleString()}{unit}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface InnovationLeadersProps {
  lang: Language;
}

export default function InnovationLeaders({ lang }: InnovationLeadersProps) {
  const t = translations[lang];
  const [activeMetric, setActiveMetric] = useState<"centers" | "rd" | "startups" | "sovereignty">("centers");

  return (
    <div className="min-h-screen bg-background text-on-background pt-12">
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/15 via-background to-background" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-sans text-xs md:text-sm text-secondary tracking-widest block mb-6 font-bold uppercase">
              {t.leadersSubtitle}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-primary mb-8 leading-tight font-bold">
              {t.leadersTitle}
            </h1>
            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              {t.leadersDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Pioneers and QR */}
      <section className="pb-32 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Pioneer 1 - Ifeoma Ebo (Large Card) */}
          {(() => {
            const ifeoma = PIONEERS_DATA.find((p) => p.id === "ifeoma-ebo");
            if (!ifeoma) return null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-8 group overflow-hidden glass-container ambient-bloom flex flex-col rounded-xl"
              >
                {/* Image Portrait banner */}
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    alt={ifeoma.name}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-102"
                    src={ifeoma.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-10 left-8 md:left-10">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-secondary text-on-primary px-4 py-1.5 font-sans text-[10px] uppercase tracking-wider rounded-sm shadow-md font-bold">
                        {ifeoma.category}
                      </span>
                      <span className="bg-white/15 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 font-sans text-[10px] uppercase tracking-wider rounded-sm font-bold">
                        {ifeoma.role}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-4xl text-white font-bold leading-tight">
                      {ifeoma.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content Details */}
                <div className="bg-primary-container p-8 md:p-12 flex flex-col flex-grow text-white">
                  <p className="font-sans text-xs text-secondary-container mb-6 uppercase tracking-widest leading-relaxed font-bold">
                    {ifeoma.summary}
                  </p>

                  <div className="mb-8 border-l-4 border-secondary pl-6 py-2">
                    <p className="font-serif text-lg md:text-xl italic text-white/95 leading-relaxed font-light">
                      "{ifeoma.quote}"
                    </p>
                  </div>

                  <p className="font-sans text-sm md:text-base text-white/80 mb-10 leading-relaxed">
                    {ifeoma.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-auto">
                    <div>
                      <span className="block font-sans text-[10px] text-white/50 mb-2 uppercase tracking-[0.2em] font-bold">
                        Academic Faculty
                      </span>
                      <span className="font-sans text-[11px] font-bold text-secondary-container leading-relaxed uppercase tracking-wide">
                        {ifeoma.faculty}
                      </span>
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-white/50 mb-2 uppercase tracking-[0.2em] font-bold">
                        Global Impact
                      </span>
                      <span className="font-sans text-[11px] font-bold text-secondary-container leading-relaxed uppercase tracking-wide">
                        {ifeoma.globalImpact}
                      </span>
                    </div>
                    <div className="flex items-end justify-start md:justify-end">
                      <a
                        href={ifeoma.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-pulse bg-secondary-container text-on-secondary-container px-8 py-4 font-sans text-xs font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2 rounded-sm shadow-lg uppercase tracking-wider"
                      >
                        CONNECT <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Pioneer 2 - Dr. Kazeem Kolawole Raji (Standard Card) */}
          {(() => {
            const raji = PIONEERS_DATA.find((p) => p.id === "kazeem-raji");
            if (!raji) return null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-4 glass-container ambient-bloom flex flex-col group h-full rounded-xl overflow-hidden hover-card-effect"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    alt={raji.name}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-102"
                    src={raji.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow bg-white/5">
                  <span className="font-sans text-[10px] text-secondary mb-4 uppercase tracking-[0.15em] font-bold block">
                    {raji.category}
                  </span>
                  <h4 className="font-serif text-2xl text-primary mb-3 leading-tight font-bold">
                    {raji.name}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant mb-6 leading-relaxed">
                    Director-General & CEO, National Board for Technology
                    Incubation (NBTI) | Nigeria
                  </p>

                  <div className="border-l-2 border-secondary/50 pl-4 mb-6 py-1">
                    <p className="font-sans text-xs md:text-sm text-primary font-medium italic leading-relaxed">
                      "{raji.quote}"
                    </p>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-on-surface-variant/85 mb-8 flex-grow leading-relaxed">
                    {raji.description}
                  </p>

                  <div className="pt-6 border-t border-outline-variant/30 mt-auto">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center text-[11px] font-bold text-primary tracking-wide">
                        <span>4% LEVY SECURED</span>
                        <span className="text-secondary">
                          £1.5M INV. YEAR 1
                        </span>
                      </div>
                      <div className="text-[10px] font-bold text-outline uppercase tracking-wider">
                        UK-Canada-Nigeria Partnership
                      </div>
                    </div>
                    {/* Link specifies connecting to official portal requested by user (https://nbti.gov.ng/) */}
                    <a
                      href={raji.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-white text-black py-4 font-sans text-xs hover:bg-secondary hover:text-black transition-all text-center block rounded-sm shadow-md font-bold tracking-wider uppercase"
                    >
                      CONNECT
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Pioneer 3 - Uzoma Dozie (Standard Card) */}
          {(() => {
            const dozie = PIONEERS_DATA.find((p) => p.id === "uzoma-dozie");
            if (!dozie) return null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="lg:col-span-4 glass-container ambient-bloom flex flex-col group rounded-xl overflow-hidden hover-card-effect"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    alt={dozie.name}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-102"
                    src={dozie.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow bg-white/5">
                  <span className="font-sans text-[10px] text-secondary mb-4 uppercase tracking-[0.15em] font-bold block">
                    {dozie.category}
                  </span>
                  <h4 className="font-serif text-2xl text-primary mb-3 leading-tight font-bold">
                    {dozie.name}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant mb-6 leading-relaxed">
                    Founder & CEO, Sparkle MFB | Fintech Entrepreneur &
                    Financial Inclusion Advocate | Lagos, Nigeria
                  </p>

                  <div className="border-l-2 border-secondary/50 pl-4 mb-6 py-1">
                    <p className="font-sans text-xs md:text-sm text-primary font-medium italic leading-relaxed">
                      "{dozie.quote}"
                    </p>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-on-surface-variant/85 mb-8 flex-grow leading-relaxed">
                    {dozie.description}
                  </p>

                  <div className="pt-6 border-t border-outline-variant/30 mt-auto">
                    <div className="space-y-2 mb-6 text-[11px] font-bold text-on-surface leading-relaxed uppercase">
                      <div>• 20+ years Banking & Fintech</div>
                      <div>• Sparkle MFB: AI-powered Digital Bank</div>
                      <div>• Financial inclusion for informal sector</div>
                    </div>
                    {/* Link specifies connecting to Dozie's website requested by user: (https://uzomadozie.co/about-me) */}
                    <a
                      href={dozie.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full border-2 border-primary text-primary py-3.5 font-sans text-xs hover:bg-white hover:text-black transition-all text-center block rounded-sm font-bold tracking-wider uppercase"
                    >
                      CONNECT
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* QR Scan Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-8 glass-container ambient-bloom relative overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-14 gap-12 rounded-xl"
          >
            <div className="absolute top-0 right-0 p-8">
              <QrCode className="text-secondary/5 w-40 h-40 select-none" />
            </div>

            <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 flex-shrink-0 bg-white p-3 rounded-xl shadow-2xl ring-1 ring-outline-variant/20 transition-transform duration-700 hover:scale-105">
              <img
                alt="Innovation Portal QR Code"
                className="w-full h-full object-contain"
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://nextgeninnovation.ng/"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="relative z-10 text-center md:text-left flex-grow">
              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4 font-bold">
                Scan to Connect
              </h3>
              <p className="font-sans text-sm md:text-base text-on-surface-variant mb-8 max-w-lg leading-relaxed">
                Access the NBTI Innovation Portal to engage directly with these
                leaders, review strategic whitepapers, and join the pan-African
                innovation network.
              </p>

              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 font-sans text-xs text-secondary font-bold tracking-wider uppercase">
                  <Shield className="w-5 h-5 text-secondary" /> SECURE ACCESS
                </div>
                <div className="flex items-center gap-2 font-sans text-xs text-secondary font-bold tracking-wider uppercase">
                  <Globe2 className="w-5 h-5 text-secondary" /> GLOBAL STANDARDS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Partners (Subheading of Pioneers) */}
      <section className="py-24 border-t border-outline-variant/10 bg-surface-container-low/35" id="partners">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-xs text-secondary tracking-[0.2em] block mb-4 uppercase font-bold">
              {lang === "fr" ? "MEMBRES DE L'ALLIANCE DE L'ÉCOSYSTÈME" : "ECOSYSTEM ALLIANCE MEMBERS"}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mb-6">
              {lang === "fr" ? "Partenaires Stratégiques d'Innovation" : "Strategic Ecosystem Partners"}
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              {lang === "fr"
                ? "L'alliance officielle d'institutions fédérales et mondiales soutenant notre agenda d'accélération technologique."
                : "Supporting the Nextgen Innovation Challenge 2026 are premier institutional partners driving technological advancement and cross-border research commercialization."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERS_DATA.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card p-8 lg:p-10 rounded-xl flex flex-col group hover:border-secondary hover:-translate-y-2 hover:shadow-xl transition-all duration-500 shadow-sm"
              >
                <div className="flex items-start justify-between mb-8">
                  {partner.image === "handshake" ? (
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                      <Handshake className="w-6 h-6 text-secondary" />
                    </div>
                  ) : (
                    <img
                      alt={partner.name}
                      className="h-10 w-auto object-contain max-w-[124px] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      src={partner.image}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <span className="font-sans text-[10px] bg-[#bdae93]/10 text-secondary px-3 py-1.5 rounded uppercase tracking-wider font-bold">
                    {lang === "fr" && partner.role === "REGULATORY SPONSOR" ? "PARRAIN RÉGLEMENTAIRE" :
                     lang === "fr" && partner.role === "STRATEGIC SECRETARIAT" ? "SECRÉTARIAT STRATÉGIQUE" :
                     lang === "fr" && partner.role === "GLOBAL ALLIANCE" ? "ALLIANCE GLOBALE" : partner.role}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-primary mb-4 font-bold">
                  {partner.name}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed flex-grow">
                  {lang === "fr" ? (
                    partner.id === "nbti" ? "L'agence gouvernementale officielle chargée d'établir, de surveiller et de réguler les pôles nationaux d'incubation technologique au Nigeria." :
                    partner.id === "ukald" ? "Diriger la coopération technologique internationale, la mobilisation des capitaux et les corridors bilatéraux d'accréditation transnationaux." :
                    "Soutenant activement la numérisation régionale, l'intégration des écosystèmes et le transfert de technologies résilientes à travers le continent africain."
                  ) : partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Analytics Chart Section */}
      <section className="py-24 border-t border-outline-variant/10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="font-sans text-xs text-secondary tracking-[0.2em] block mb-4 uppercase font-bold">
              {lang === "fr" ? "ANALYTIQUE DE L'INCUBATION STATUTAIRE" : "STATUTORY INCUBATION ANALYTICS"}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mb-6">
              {lang === "fr" ? "Indicateurs de Performance Nationaux" : "National Performance Indicators"}
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              {t.systemStats}
            </p>
          </div>

          {/* Interactive Grid Card */}
          <div className="glass-container rounded-2xl p-6 md:p-10 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Selector Controls */}
              <div className="lg:col-span-1 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-primary font-bold mb-2">
                    {chartLabels[lang].title}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    {chartLabels[lang].desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => setActiveMetric("centers")}
                    className={`text-left px-5 py-3.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeMetric === "centers"
                        ? "bg-secondary text-black"
                        : "bg-surface-container hover:bg-neutral-800 text-neutral-300"
                    }`}
                  >
                    {chartLabels[lang].centers}
                  </button>
                  <button
                    onClick={() => setActiveMetric("rd")}
                    className={`text-left px-5 py-3.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeMetric === "rd"
                        ? "bg-secondary text-black"
                        : "bg-surface-container hover:bg-neutral-800 text-neutral-300"
                    }`}
                  >
                    {chartLabels[lang].rd}
                  </button>
                  <button
                    onClick={() => setActiveMetric("startups")}
                    className={`text-left px-5 py-3.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeMetric === "startups"
                        ? "bg-secondary text-black"
                        : "bg-surface-container hover:bg-neutral-800 text-neutral-300"
                    }`}
                  >
                    {chartLabels[lang].startups}
                  </button>
                  <button
                    onClick={() => setActiveMetric("sovereignty")}
                    className={`text-left px-5 py-3.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeMetric === "sovereignty"
                        ? "bg-secondary text-black"
                        : "bg-surface-container hover:bg-neutral-800 text-neutral-300"
                    }`}
                  >
                    {chartLabels[lang].sovereignty}
                  </button>
                </div>
              </div>

              {/* Graph Area */}
              <div className="lg:col-span-3 flex flex-col justify-between min-h-[350px] md:min-h-[400px] w-full bg-black/35 rounded-xl border border-outline-variant/20 p-6">
                {/* Legend/Info top of chart */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3.5 h-3.5 rounded-sm shrink-0"
                      style={{ backgroundColor: getMetricColor(activeMetric) }}
                    />
                    <span className="font-sans text-xs font-bold tracking-widest text-[#e5e5e5] uppercase">
                      {chartLabels[lang][activeMetric]}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                    {chartLabels[lang].legendTitle}
                  </span>
                </div>

                <div className="w-full h-[320px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={STATUTORY_MILESTONES}
                      margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                      className="select-none"
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.04)"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="year"
                        stroke="#262626"
                        tick={{ fill: "#a3a3a3", fontSize: 11, fontFamily: "var(--font-sans), sans-serif" }}
                        tickLine={{ stroke: "#262626" }}
                      />
                      <YAxis
                        stroke="#262626"
                        tick={{ fill: "#a3a3a3", fontSize: 11, fontFamily: "var(--font-sans), sans-serif" }}
                        tickLine={{ stroke: "#262626" }}
                      />
                      <Tooltip
                        content={
                          <CustomTooltip
                            unit={
                              activeMetric === "centers"
                                ? chartLabels[lang].centersUnits
                                : activeMetric === "rd"
                                ? chartLabels[lang].rdUnits
                                : activeMetric === "startups"
                                ? chartLabels[lang].startupsUnits
                                : chartLabels[lang].sovereigntyUnits
                            }
                          />
                        }
                        cursor={{ fill: "rgba(189, 174, 147, 0.05)" }}
                      />
                      <Bar
                        dataKey={activeMetric}
                        radius={[4, 4, 0, 0]}
                        maxBarSize={60}
                        animationDuration={800}
                      >
                        {STATUTORY_MILESTONES.map((entry, idx) => (
                          <Cell
                            key={`cell-${idx}`}
                            fill={getMetricColor(activeMetric)}
                            className="transition-colors duration-300"
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Milestones Spotlight Section */}
      <section className="bg-surface-container-low/60 py-24 border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-sans text-xs text-secondary tracking-[0.2em] block mb-4 uppercase font-bold">
                Strategic Framework
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">
                NextGen Milestones
              </h2>
            </div>

            <a
              href="https://nextgeninnovation.ng/nextgen-innovation-homepage/#"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-secondary transition-all font-sans text-xs font-bold flex items-center gap-2 border-b-2 border-secondary pb-1 tracking-wider uppercase group"
            >
              VIEW ALL INITIATIVES{" "}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MILESTONES_DATA.map((milestone, index) => {
              // Icon mapping helper
              const renderIcon = () => {
                if (milestone.icon === "TrendingUp")
                  return (
                    <TrendingUp className="w-6 h-6 text-secondary-container" />
                  );
                if (milestone.icon === "Zap")
                  return <Zap className="w-6 h-6 text-secondary-container" />;
                return <Network className="w-6 h-6 text-secondary-container" />;
              };

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface-container border border-outline-variant/30 p-8 hover:shadow-xl hover:border-secondary/50 transition-all duration-500 relative group rounded-xl shadow-lg flex flex-col hover:-translate-y-2"
                >
                  <div className="absolute top-6 right-6 bg-secondary/10 text-secondary px-3 py-1 font-sans text-[9px] tracking-widest rounded-sm font-bold uppercase">
                    {milestone.tag}
                  </div>
                  <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 rounded-sm shadow-md transition-transform duration-300 group-hover:scale-105">
                    {renderIcon()}
                  </div>
                  <h5 className="font-serif text-lg md:text-xl text-primary mb-2 font-bold focus:outline-none">
                    {milestone.title}
                  </h5>
                  <p className="font-sans text-[10px] text-error font-bold mb-4 uppercase tracking-wider">
                    {milestone.status}
                  </p>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                    {milestone.description}
                  </p>

                  <div className="mt-auto">
                    <div className="h-1.5 bg-surface-container-highest w-full relative rounded-full overflow-hidden mb-3">
                      <div
                        className="absolute left-0 top-0 h-full bg-secondary rounded-full progress-shimmer"
                        style={{ width: `${milestone.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between font-sans text-[10px] font-bold tracking-widest uppercase">
                      <span className="text-outline">Progress</span>
                      <span className="text-primary">
                        {milestone.progress}% Active
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seals standard Footnote */}
      <section className="py-20 text-center border-t border-outline-variant/10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-[#e0e0e0]/10 flex items-center justify-center p-3 border border-secondary/20 shadow-2xl relative opacity-[0.45] hover:opacity-100 hover:scale-105 transition-all duration-500 hover:shadow-secondary/10 select-none pointer-events-none">
            <img
              alt="Federal Government of Nigeria Official Seal"
              className="w-full h-full object-contain rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp--BJSGO6AK-90UAu-UuxlWurGDd48vaJLF2PGAoob2d6rg4_di1ByxO9f1RMiGU84uDwZyaD2Pubk8UV6xYYqIqyODDGxCsXVbYLpM7a4buBIsYub12T11N-A-2JZXkL3cYr3UPJ3U9OCuPXr7BnOyPf2-bASxWes3_jQC81FmAEDWofmKRqgcoXj3PIke8TZbEKOW7IVcbi8rv0F5Sn9xovbwbjOB6eEFn3TayrmRnuN6XckkK_msQCU1yCSfcLGZYGCnz4FLc"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>
      </section>
    </div>
  );
}
