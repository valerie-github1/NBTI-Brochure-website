/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Quote,
  TrendingUp,
  Compass,
  Award,
  ShieldCheck,
  Building,
  CheckCircle2,
} from "lucide-react";
import { Language } from "../translations";
import CanadaAfricaImage from "./CanadaAfricaImage";

interface GlobalFootprintProps {
  lang: Language;
}

export default function GlobalFootprint({ lang }: GlobalFootprintProps) {
  const [expanded, setExpanded] = useState(false);

  // Subsequent dispatches dataset for strategic scalability
  const subsequentDispatches = [
    {
      id: "md-001",
      category: lang === "fr" ? "DIRECTIVE OPÉRATIONNELLE" : "Operational Directive",
      status: lang === "fr" ? "Mise au Point Active" : "Active Focus",
      title: lang === "fr" ? "Protection de l'IP et Intégration Réglementaire" : "IP Protection & Regulatory Onboarding",
      desc: lang === "fr" 
        ? "Application d'un modèle strict de conformité d'enregistrement d'entreprise et de protection des brevets pour tous les innovateurs actifs."
        : "Enforcing rigorous patent-shielding compliance, corporate registration, and regulatory protection pathways for all active domestic sandboxes scaling within the Nigerian technology corridors.",
      blockId: "Systematic Block ID: MD-001"
    },
    {
      id: "md-002",
      category: lang === "fr" ? "LEVIER DE LA DIASPORA" : "Diaspora Leverage",
      status: lang === "fr" ? "En Expansion" : "Expanding",
      title: lang === "fr" ? "Alignement des Syndicats de Capital-Risque" : "Cross-Border VC Syndicate Alignment",
      desc: lang === "fr"
        ? "Expansion du canal Toronto-Toronto vers un pont financier structuré pour connecter les incubés avec les syndicats de capital internationaux."
        : "Expanding the Toronto-Toronto investment channel into a structured multi-national funding bridge linking high-potential incubatees with institutional capital syndicates.",
      blockId: "Systematic Block ID: MD-002"
    },
    {
      id: "md-003",
      category: lang === "fr" ? "INCUBATION LOCALE" : "Local Incubation",
      status: lang === "fr" ? "Planifiée" : "Planned",
      title: lang === "fr" ? "Déploiement Stratégique au TIC Abeokuta" : "Ecosystem Scaling at TIC Abeokuta",
      desc: lang === "fr"
        ? "Établissement de sessions d'accélération commerciale locales pour sortir les projets technologiques des archives universitaires."
        : "Establishing localized commercialization sprints to lift breakthrough scientific research and indigenous prototypes off academic shelves and onto marketplace shelves.",
      blockId: "Systematic Block ID: MD-003"
    },
    {
      id: "md-4",
      category: lang === "fr" ? "MEMBRES DE L'INNOVATION" : "Innovation Fellowship",
      status: lang === "fr" ? "Planifiée" : "Planned",
      title: lang === "fr" ? "Comité Consultatif Scientifique National" : "Next-Gen Scientific Advisory Board",
      desc: lang === "fr"
        ? "Constitution d'un vivier de mentors internationaux pour guider les entrepreneurs dans la mise à l'échelle robuste de prototypes de niveau industriel."
        : "Curating a pipeline of international mentors and scientific advisors from top-tier research institutes to guide digital innovators in robust prototype scaling.",
      blockId: "Systematic Block ID: MD-004"
    }
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface pb-24 overflow-x-hidden selection:bg-[#bdae93] selection:text-black">
      {/* Background ambient animations */}
      <div className="absolute inset-0 bg-animated-mesh opacity-30 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-6 md:px-16 max-w-[1440px] mx-auto text-center">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-[#bdae93]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="font-sans text-[11px] font-black text-[#bdae93] bg-[#bdae93]/10 px-4 py-1.5 rounded-full inline-block tracking-[0.25em] h-auto uppercase">
            {lang === "fr" ? "CORRIDORS BILATÉRAUX & IMPACTS" : "CORRIDORS & IMPACT REGISTRY"}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-primary font-bold tracking-tight">
            {lang === "fr" ? "Empreinte Globale" : "NBTI on the Move: Global Footprint"}
          </h1>
          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
            {lang === "fr"
              ? "Le registre officiel de l'influence géopolitique de la NBTI, connectant l'innovation incubée localement au capital-risque international."
              : "The official statutory registry of NBTI's geopolitical footprint, connecting locally incubated scientific breakthroughs with regional pipelines and international risk capital corridors."}
          </p>
        </div>
      </section>

      {/* Headline Event Spotlight: Toronto */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-20">
        <div className="glass-container border border-outline-variant/50 rounded-2xl overflow-hidden bloom-shadow transition-colors duration-300">
          
          {/* Subtle Accent top line representing official gold and mint */}
          <div className="h-1 bg-gradient-to-r from-emerald-800 via-[#bdae93] to-white w-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Hand: Body Context */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center space-y-6">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                <span className="bg-[#bdae93]/15 text-[#bdae93] px-3 py-1 rounded font-bold">
                  {lang === "fr" ? "Feuilleton Spécial" : "SPECIAL BULLETIN"}
                </span>
                <span className="flex items-center gap-1.5 border-l border-outline-variant/30 pl-3 text-neutral-400">
                  <Calendar className="w-3.5 h-3.5" />
                  May 30, 2026
                </span>
                <span className="flex items-center gap-1 text-neutral-400">
                  <MapPin className="w-3.5 h-3.5" />
                  Toronto, Canada
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight leading-[1.15] bg-gradient-to-tr from-[#bdae93] via-[#bdae93] to-white bg-clip-text text-transparent">
                MADE IN NIGERIA, CAPITALIZED IN TORONTO
              </h2>
              
              <p className="font-sans text-xs md:text-sm font-bold text-[#bdae93] tracking-wide uppercase leading-relaxed max-w-xl">
                NBTI’s Next-Gen Innovators' Challenge Captain — <br className="hidden sm:inline" />
                Dr. K K Raji Dazzles Global Investors, Seals Cross-Border Tech Pipelines
              </p>

              <div className="font-sans text-xs md:text-sm text-on-surface-variant border-l-[3px] border-emerald-800 pl-4 py-1 italic leading-relaxed max-w-2xl">
                {lang === "fr"
                  ? "Le TIC Abeokuta félicite le NEXT-GEN Innovation Challenge, saluant le « Czar du Programme d'Incubation Technologique » pour la relocalisation commerciale des recherches universitaires nigérianes sur le marché mondial."
                  : "TIC Abeokuta Commends the NEXT-GEN Innovation Challenge, Hailing the “Czar of TECHNOLOGY INCUBATION PROGRAMME” for Transitioning Nigerian Research from Academic Shelves to International Marketplaces."}
              </div>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                In a historic geopolitical leap for African technology commercialization, Nigeria’s innovation ecosystem took center stage today at the prestigious Canada-Africa Innovation Festival in Toronto, Canada. The National Board for Technology Incubation (NBTI) successfully presented the second edition NEXT-GEN Innovation Challenge 2026.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="shimmer-btn bg-white text-black hover:bg-[#bdae93] hover:text-black font-sans text-xs font-black uppercase tracking-widest px-8 py-4 rounded-[4px] shadow-lg flex items-center gap-2 transition-all duration-300 cursor-pointer text-center w-full sm:w-auto"
                >
                  {expanded ? (
                    <>
                      <ArrowLeft className="w-4 h-4" />
                      {lang === "fr" ? "REPLIER LE COMPTE-RENDU" : "Collapse Briefing"}
                    </>
                  ) : (
                    <>
                      {lang === "fr" ? "LIRE LE RAPPORT OFFICIEL" : "Read Full Press Briefing"}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Hand: Screenshot Image Panel with dynamic crop styling */}
            <div className="lg:col-span-5 relative bg-[#090909] border-t lg:border-t-0 lg:border-l border-outline-variant/30 min-h-[450px] lg:min-h-full">
              <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                
                {/* 
                  This represents the user-attached image of Dr. Kazeem Kolawole Raji in Toronto 2026.
                  We render the custom, high-fidelity colorful Agbada vector component.
                */}
                <CanadaAfricaImage />
                
                {/* Subtle dark layout overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-4 left-6 right-6">
                  <p className="font-sans text-[11px] font-bold text-[#bdae93] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-black/60 backdrop-blur-sm self-start px-3 py-1.5 rounded inline-block">
                    Dr. Kazeem Kolawole Raji addressing developers and global VCs, Toronto 2026.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Expanded Editorial Sub-page Layout inside Accordion with Smooth Animation */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden bg-[#0c0c0f] border-t border-outline-variant/60"
              >
                <div className="p-8 md:p-16 max-w-4xl mx-auto space-y-10 selection:bg-[#bdae93] selection:text-black">
                  
                  {/* Decorative Header divider */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px bg-gradient-to-r from-transparent to-outline-variant/50 flex-grow" />
                    <span className="font-mono text-[9px] text-[#bdae93] uppercase tracking-[0.2em] font-black">
                      Official Press Dossier (Toronto CORRIDOR)
                    </span>
                    <div className="h-px bg-gradient-to-l from-transparent to-outline-variant/50 flex-grow" />
                  </div>

                  {/* Section 1: Detailed Press Release Text */}
                  <div className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed space-y-6">
                    <p>
                      In a historic geopolitical leap for African technology commercialization, Nigeria’s innovation ecosystem took center stage today at the prestigious <strong className="text-white">Canada-Africa Innovation Festival</strong> in Toronto, Canada. The National Board for Technology Incubation (NBTI) successfully presented the second edition of the NEXT-GEN Innovation Challenge 2026 to a global audience of venture capitalists, institutional partners, and Canadian tech leaders.
                    </p>
                    <p>
                      Delivering a powerful opening address, the Director-General and CEO of the NBTI, <strong className="text-white">Dr. Kazeem Kolawole Raji, FCIPM (UK), FPMA (UK)</strong>—widely regarded as the “Czar of the Technology Incubation Programme in Nigeria”—projected the nation’s aggressive industrialization mandate. He warmly commended the organizers - Efosa, Osas, and the entire team at the Africa Impact Initiative, for putting African ingenuity on the global map.
                    </p>
                  </div>

                  {/* Highlight Blockquote */}
                  <div className="glass-card border border-outline-variant/50 rounded-xl p-8 bg-gradient-to-br from-neutral-900 to-[#121215] relative group">
                    <Quote className="absolute -top-3 -left-3 text-[#bdae93] w-12 h-12 opacity-10" />
                    <blockquote className="font-serif text-lg md:text-xl text-white font-semibold leading-relaxed mb-4 italic text-center">
                      "The ultimate joy of being in the diaspora is what you can structurally give back to the society where you were born."
                    </blockquote>
                    <p className="font-sans text-xs text-[#bdae93] text-center font-black uppercase tracking-widest">
                      — Dr. Kazeem Kolawole Raji, Director-General and CEO, NBTI
                    </p>
                  </div>

                  {/* Section 2: Statutory Context */}
                  <div className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed space-y-6">
                    <p>
                      Unveiling the statutory mandate of the NBTI as a bedrock agency under the Federal Ministry of Innovation, Science, and Technology, Dr. Raji declared a definitive end to un-monetized intellect: <span className="text-white">"For too long, valuable research ended up on shelves and in institutional archives. The Federal Government has decisively stopped that trend. NBTI is empowered to convert those raw research outcomes into market-ready products, sustainable jobs, and generational wealth."</span>
                    </p>
                    <p>
                      Addressing continental innovators during the high-stakes investment pitch sessions, Dr. Raji labeled all participants "winners" while delivering a vital regulatory charge: any innovator scaling operations within the Nigerian corridor must strictly adhere to compliance, formalize corporate registration, and aggressively secure Intellectual Property (IP) rights to shield their patents from theft.
                    </p>
                  </div>

                  {/* Section 3: Ecosystem Solidarity (Abeokuta Tribute) */}
                  <div className="border border-outline-variant/30 rounded-xl bg-gradient-to-b from-white/[0.01] to-white/[0.04] p-8 space-y-4">
                    <span className="font-mono text-[9px] text-[#bdae93] flex items-center gap-1.5 uppercase tracking-widest font-black">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 animate-pulse" />
                      Ecosystem Solidarity: TIC Abeokuta Salutes Transformational Leadership
                    </span>
                    
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant italic leading-relaxed">
                      "On behalf of TIC Abeokuta, we extend our proudest congratulations to our visionary DG/CEO, <strong>Dr. Kazeem Kolawole Raji FCIMP(UK), FPMA(Uk)</strong> on this historic global outing. Your brilliant presentation in Toronto proves that when Nigerian innovation is structurally incubated, it can lead anywhere in the world. Under your value-driven stewardship, the Technology Incubation Programme (TIP) has officially become a premium global pathway for economic transformation. The paradigm shift you championed in Canada—moving research from academic shelves straight into commercial markets—is already transforming our operations back home. This international victory reinforces our resolve to scale our local incubatees into investable global entities. We salute your legacy of unyielding excellence." Oguntayo added.
                    </p>
                    <div className="border-t border-outline-variant/20 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="font-mono text-xs text-[#bdae93] font-black uppercase tracking-wider">
                        — Gabriel Olusanya Oguntayo, NIM, NIMN
                      </span>
                      <span className="font-sans text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                        Centre Manager, Technology Incubation Centre, Abeokuta
                      </span>
                    </div>
                  </div>

                  {/* Secondary Image Embed Section */}
                  <div className="space-y-3">
                    <div className="relative rounded-2xl overflow-hidden border border-outline-variant/40 aspect-[16/10] bg-[#111111] bloom-shadow">
                      <CanadaAfricaImage />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="font-sans text-[10px] sm:text-xs text-[#bdae93] tracking-wide text-center drop-shadow">
                          Official Nigeria Delegation & Strategic Envoys cementing Canada–Africa Tech Pipelines, Toronto.
                        </p>
                      </div>
                    </div>
                    <p className="font-sans text-[10px] text-on-surface-variant text-center justify-center leading-relaxed">
                      *Bilateral strategic corridors established to scale indigenous patent outcomes directly into global markets.
                    </p>
                  </div>

                  {/* Section 4: Secondary descriptive footer paragraphs */}
                  <div className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed space-y-4 pt-4 border-t border-outline-variant/20">
                    <p>
                      The National Board for Technology Incubation (NBTI) is an apex regulatory agency under the Federal Ministry of Innovation, Science, and Technology, engineered to nurture technology-based startups, commercialize indigenous research, and build a robust, industrialized economy through its nationwide network of incubation hubs.
                    </p>
                    <p>
                      In furtherance to adding a voice to global ecosystem, the NEXT-GEN Innovation Challenge is the NBTI’s premium accelerator platform designed to scout, upscale, fund, and commercialize breakthrough industrial technologies developed by Africa's brightest digital and scientific youth minds.
                    </p>
                    
                    {/* Becky Thorpe signoff */}
                    <div className="pt-6 text-right font-mono text-xs">
                      <p className="text-[#bdae93] font-black uppercase tracking-wider">— Becky Thorpe</p>
                      <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mt-0.5">
                        Public Relations Officer, Technology Incubation Centre, Abeokuta, Ogun State
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Grid: Subsequent Milestones & Dispatches Registry */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="border-b border-outline-variant/30 pb-4 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold">
              {lang === "fr" ? "Dépêches et Jalons Suivants" : "Subsequent Dispatches & Milestones"}
            </h2>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant mt-1.5">
              {lang === "fr"
                ? "Le registre systématique de l'expansion stratégique, des impacts locaux et des percées de commercialisation."
                : "The systematic registry of strategic expansion, local impacts, and commercialization breakthroughs."}
            </p>
          </div>
          <span className="font-mono text-[9px] text-[#bdae93] uppercase tracking-[0.25em] font-black shrink-0">
            {lang === "fr" ? "Registre d'Écosystème" : "Ecosystem Ledger Grid"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {subsequentDispatches.map((dispatch) => (
            <motion.article
              key={dispatch.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card hover-card-effect border border-outline-variant/50 p-6 md:p-8 rounded-xl flex flex-col justify-between min-h-[260px] group relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="font-mono text-[9px] text-[#bdae93] uppercase tracking-widest font-black">
                    {dispatch.category}
                  </span>
                  <span className="font-mono text-[8px] bg-white/[0.04] border border-outline-variant px-2 py-0.5 rounded-full text-neutral-400 capitalize">
                    {dispatch.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-primary font-bold transition-colors group-hover:text-[#bdae93]">
                    {dispatch.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {dispatch.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant">
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#bdae93]/70 font-bold">
                  {dispatch.blockId}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#bdae93]/80" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
