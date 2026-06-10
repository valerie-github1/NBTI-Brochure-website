/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { PARTNERS_DATA } from "../data";
import { TabId } from "../types";
import { Language, translations } from "../translations";
import PastEditionsArchive from "./PastEditionsArchive";
import {
  Cpu,
  Building,
  MapPin,
  Handshake,
  Shield,
  HelpCircle,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

const faqData = {
  en: [
    {
      q: "What is the primary objective of NBTI Nextgen 2026?",
      a: "NBTI Nextgen 2026 is an official federal initiative driven by the National Board for Technology Incubation (NBTI) and UKALD to foster high-tech entrepreneurship, secure economic self-reliance, and commercialize ready-to-scale research and development projects across Nigeria."
    },
    {
      q: "Who is eligible to participate in the incubation program?",
      a: "Prospective tech startups, local researchers with commercializable IP, and next-generation entrepreneurs working on deep-tech, clean energy, agricultural innovation, fintech, and advanced manufacturing are eligible to apply through official incubation hubs."
    },
    {
      q: "What resources do prospective startups receive upon admission?",
      a: "Admitted startups gain access to physical R&D sandboxes across 36 states, bilateral international certification runways via UKALD, up to 4% institutional statutory levy facilitation assistance, and direct connections to global venture ecosystems."
    },
    {
      q: "How can international organizations partner with the Hub?",
      a: "International partners, bilateral agencies, and technology conglomerates can align with the Secretariat by establishing joint tech transfer labs, cross-border investment tracks, or regional acceleration alliances."
    },
    {
      q: "Does NBTI provide intellectual property protection for innovators?",
      a: "Yes, preserving ownership over local innovations is a statutory core mission. We work directly with registry departments to provide robust IP assistance, legal sandboxes, and safe commercialization corridors."
    }
  ],
  fr: [
    {
      q: "Quel est l'objectif principal de NBTI Nextgen 2026?",
      a: "Il s'agit d'une initiative fédérale officielle menée par l'Office national de l'incubation technologique (NBTI) et UKALD pour stimuler l'entrepreneuriat technologique de pointe, garantir l'autosuffisance économique et commercialiser des projets de recherche et de développement prêts à être déployés au Nigeria."
    },
    {
      q: "Qui est admissible à participer au programme d'incubation?",
      a: "Les jeunes entreprises technologiques, les chercheurs locaux disposant de brevets commercialisables et les innovateurs de nouvelle génération travaillant sur les technologies profondes, l'énergie verte, l'agritech et l'industrie avancée."
    },
    {
      q: "Quelles ressources les startups admises reçoivent-elles?",
      a: "Elles ont accès à des environnements de prototypage physiques dans 36 États, à des parcours de certification internationaux bilatéraux via UKALD, au soutien lié à l'allocation statutaire de 4% et à des connexions de capital-risque mondiales."
    },
    {
      q: "Comment les organisations internationales peuvent-elles s'associer?",
      a: "Les partenaires mondiaux, institutions bilatérales et conglomérats peuvent collaborer avec le Secrétariat pour co-créer des laboratoires de transfert de technologies ou des corridors d'accréditation transnationaux."
    },
    {
      q: "L'NBTI protège-t-il la propriété intellectuelle (IP) des innovateurs?",
      a: "Oui, la préservation de la propriété de l'innovation locale est une mission statutaire centrale. Nous fournissons des raccordements légaux et des cadres d'enregistrement d'IP robustes pour les incubés."
    }
  ]
};

interface SovereignHubProps {
  setActiveTab: (tab: TabId) => void;
  onOpenContact: () => void;
  lang: Language;
}

export default function SovereignHub({
  setActiveTab,
  onOpenContact,
  lang,
}: SovereignHubProps) {
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center hero-gradient pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(189, 174, 147, 0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10 w-full text-center flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
            className="space-y-8 w-full flex flex-col items-center"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              className="font-sans text-xs md:text-sm font-bold text-secondary tracking-widest block uppercase bg-secondary/10 px-4 py-1.5 rounded-full"
            >
              {t.heroSubtitle}
            </motion.span>
            
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 80, damping: 15 },
                },
              }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary max-w-4xl leading-[1.1] animate-float"
            >
              {t.heroTitle}
            </motion.h1>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 90, damping: 18 },
                },
              }}
              className="font-sans text-base md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed"
            >
              {t.heroDesc}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 22 },
                },
              }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6 justify-center w-full sm:w-auto"
            >
              <button
                onClick={() => setActiveTab("mandate")}
                className="shimmer-btn bg-secondary-container text-on-secondary-container px-8 py-4 font-sans text-xs md:text-sm rounded-[4px] font-bold uppercase tracking-wider shadow-md w-full sm:w-auto cursor-pointer"
              >
                {t.btnExplore}
              </button>

              <a
                href="https://ukald.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-primary text-primary px-8 py-4 font-sans text-xs md:text-sm rounded-[4px] hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto text-center font-bold uppercase tracking-wider shadow-sm block"
              >
                {t.btnJoin}
              </a>

              <button
                onClick={() => setActiveTab("leadership")}
                className="text-primary px-6 py-4 font-sans text-xs md:text-sm rounded-[4px] font-bold uppercase tracking-wider hover:text-secondary group transition-all"
              >
                {t.btnMeet}{" "}
                <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Spotlight */}
      <section className="py-24 bg-surface-container-low/50 border-y border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="font-sans text-xs md:text-sm text-secondary uppercase tracking-[0.2em] block mb-4 font-bold">
                {t.partnersSubtitle}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 leading-tight">
                {t.partnersTitle}
              </h2>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                {t.partnersDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERS_DATA.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-container p-8 lg:p-10 rounded-2xl flex flex-col group hover:border-secondary hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/15 transition-all duration-500 shadow-sm"
              >
                <div className="flex items-start justify-between mb-8">
                  {partner.image === "handshake" ? (
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                      <Handshake className="w-6 h-6 text-secondary" />
                    </div>
                  ) : (
                    <img
                      alt={partner.name}
                      className="h-10 w-auto object-contain max-w-[120px]"
                      src={partner.image}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <span className="font-sans text-[10px] bg-primary/5 text-primary px-3 py-1.5 rounded-full uppercase tracking-wider font-bold">
                    {lang === "fr" && partner.role === "REGULATORY SPONSOR" ? "PARRAIN RÉGLEMENTAIRE" : 
                     lang === "fr" && partner.role === "STRATEGIC SECRETARIAT" ? "SECRÉTARIAT STRATÉGIQUE" :
                     lang === "fr" && partner.role === "GLOBAL ALLIANCE" ? "ALLIANCE GLOBALE" : partner.role}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-primary mb-4">
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

      {/* Bento Grid Section (Opportunities) */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 leading-tight">
              {t.ecoTitle}
            </h2>
            <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {t.ecoDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
            {/* Lead Flagship Challenge card */}
            <div className="lg:col-span-12 xl:col-span-7 glass-container p-8 md:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-end group hover:border-secondary hover:-translate-y-2 transition-all duration-500 hover:shadow-xl shadow-sm min-h-[380px]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 animate-float">
                <Cpu className="text-secondary w-32 h-32 md:w-44 md:h-44" />
              </div>
              <div className="relative z-10 space-y-4">
                <span className="font-sans text-xs text-secondary bg-secondary/10 px-4 py-1.5 rounded-full inline-block font-bold uppercase tracking-wider">
                  {t.ecoFlagship}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-primary leading-tight">
                  {t.ecoNextgenTitle}
                </h3>
                <p className="font-sans text-sm md:text-lg text-on-surface-variant max-w-md leading-relaxed">
                  {t.ecoNextgenDesc}
                </p>
                <div className="pt-4">
                  <a
                    href="https://nextgeninnovation.ng/"
                    target="_blank"
                    rel="noreferrer"
                    className="shimmer-btn bg-white text-black px-8 py-4 font-sans text-xs rounded-[4px] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 transition-all font-bold uppercase tracking-wider shadow-md inline-block"
                  >
                    {t.btnApply}
                  </a>
                </div>
              </div>
            </div>

            {/* Incubation Hubs card */}
            <div className="lg:col-span-12 xl:col-span-5 glass-container p-8 rounded-2xl flex flex-col justify-between group hover:border-secondary hover:-translate-y-2 transition-all duration-500 hover:shadow-xl shadow-sm min-h-[380px]">
              <div>
                <Building className="text-secondary w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-serif text-xl md:text-2xl text-primary mb-3">
                  {t.ecoIncTitle}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                  {t.ecoIncDesc}
                </p>
              </div>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
                <img
                  alt="Map of Incubation Hubs in Nigeria"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkQT3c0jYkuOcAlIPy9RPxF-qeRMQC4x_yBlSrOnwldrBNEvg8DYq6J1X4UfnNhmJldcU1d6TnNmqxN7xrb-qaJDYWEq4NLygwEWsAiYEgAa0eoTkso5kHQQ3_EYkhPM9yBS9JO5SAAy8hqS5lRzixRXxRueEqNMDBloXufvgsgMhNBqf__tEGFqpsaGiTOPnCp2wb1OTM5w8xP11aWrqE6y69CdPnvQmeFxM2Jn5VboeSCkEVQ1YNjGyQSdPanCiG42DVTlw_vsw"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Cycle Archive Accordion Section */}
      <PastEditionsArchive lang={lang} />

      {/* Frequently Asked Questions Section */}
      <section className="py-24 border-t border-outline-variant/10 bg-[#070707] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background opacity-70" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="font-sans text-xs md:text-sm text-secondary uppercase tracking-[0.2em] block mb-4 font-bold">
              {lang === "fr" ? "FOIRE AUX QUESTIONS" : "COMMON INQUIRIES"}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4 leading-tight">
              {lang === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {lang === "fr" 
                ? "Tout ce que vous devez savoir pour rejoindre l'écosystème d'incubation Nextgen en tant qu'innovateur ou partenaire officiel."
                : "Clear answers to essential questions regarding the sovereign incubation pathway, partnerships, and Nextgen opportunities."}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData[lang].map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`glass-container border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-[#bdae93]/50 bg-white/[0.02]" : "border-outline-variant/20 bg-transparent"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] cursor-pointer group select-none"
                  >
                    <span className={`font-serif text-base md:text-lg transition-colors duration-200 ${
                      isOpen ? "text-[#bdae93]" : "text-primary group-hover:text-[#bdae93]"
                    }`}>
                      {item.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "border-[#bdae93] bg-[#bdae93]/10" : "border-outline-variant/30 group-hover:border-[#bdae93]"
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#bdae93]" />
                      ) : (
                        <Plus className="w-4 h-4 text-neutral-300 group-hover:text-[#bdae93]" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-outline-variant/10 font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Boxed Section */}
      <section className="mb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="bg-primary-container text-on-primary p-12 md:p-20 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse" />
            <div
              className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
                {t.ctaTitle}
              </h2>
              <p className="font-sans text-sm md:text-lg text-primary-fixed-dim max-w-2xl mx-auto leading-relaxed">
                {t.ctaDesc}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <a
                  href="https://ukald.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-secondary-container text-on-secondary-container px-10 py-5 font-sans font-bold text-xs tracking-wider uppercase rounded-[4px] hover:brightness-105 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(254,214,91,0.5)] active:scale-95 transition-all text-center"
                >
                  {t.btnBecomePartner}
                </a>
                <button
                  onClick={onOpenContact}
                  className="border-2 border-white/50 text-white px-10 py-5 font-sans font-bold text-xs tracking-wider uppercase rounded-[4px] hover:bg-white/10 hover:border-white hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-center"
                >
                  {t.btnContactSec}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
