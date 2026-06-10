/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FolderArchive,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Play,
  X,
  Target
} from "lucide-react";
import { Language } from "../translations";

interface PastEditionsArchiveProps {
  lang: Language;
}

interface ArchiveItem {
  id: string;
  title: string;
  date: string;
  location: string;
  desc: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export default function PastEditionsArchive({ lang }: PastEditionsArchiveProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  // Archive details for Nextgen 2025
  const archiveItems: ArchiveItem[] = [
    {
      id: "ex-1",
      title: lang === "fr" 
        ? "Cérémonie d'Ouverture et Discours Ministériel" 
        : "Grand Opening Ceremony & Ministerial Address",
      date: "January 14, 2025",
      location: "Abuja National Center",
      desc: lang === "fr"
        ? "Présentation officielle de la charte de recherche de la NBTI devant le Conseil fédéral, lançant les corridors bilatéraux."
        : "The official unveiling of NBTI's research charter to the Federal Executive Council, establishing key bilateral routes and statutory backing.",
      icon: <Award className="w-5 h-5 text-[#bdae93]" />,
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "ex-2",
      title: lang === "fr"
        ? "Bacs à Sable et Démonstrations de Prototypes de Recherche"
        : "Deep-Tech Prototypes & Hardware Exhibitions",
      date: "January 15, 2025",
      location: "Ecosystem Arena, Hall C",
      desc: lang === "fr"
        ? "Exposition de plus de 45 brevets d'ingénierie et prototypes locaux d'agritech, d'énergie verte et de robotique."
        : "Showcasing over 45 breakthrough national engineering patents and local prototypes spanning agritech, green energy, and high-performance computing.",
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "ex-3",
      title: lang === "fr"
        ? "Table Ronde Financière et Sessions de Pitch avec les Capital-Risqueurs"
        : "Venture Syndicate Sessions & Direct Investor Roundtables",
      date: "January 16, 2025",
      location: "Sovereign Boardroom",
      desc: lang === "fr"
        ? "Présentations à enjeux élevés devant des syndicats de capital-risque canadiens et internationaux pour financer l'accélération d'innovateurs nigérians."
        : "High-stakes investor matchmaking with Canadian, UK, and European venture funds laying down foundations for the 2026 international funding bridge.",
      icon: <Users className="w-5 h-5 text-blue-400" />,
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80"
    }
  ];

  // Additional exhibition pictures for the interactive lightbox popup
  const galleryPhotos = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop&q=80",
      caption: lang === "fr" ? "Ouverture officielle de l'Exposition Spéciale 2025" : "Official Opening Ceremony of the 2025 National Exhibition",
      tag: "Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80",
      caption: lang === "fr" ? "Exposition de prototypes de technologie souveraine localement conçus" : "Demonstration of locally-engineered sovereign hardware prototypes",
      tag: "Exhibits"
    },
    {
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&auto=format&fit=crop&q=80",
      caption: lang === "fr" ? "Panel d'évaluation et de co-investissement diplomatique" : "Diplomatic Evaluation Board & Co-Investment Matchmaking Panel",
      tag: "Venture Capital"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80",
      caption: lang === "fr" ? "Audience et délégations technologiques au pôle d'Abuja" : "Audience & Scientific delegations filling Abuja Hall C for presentation",
      tag: "Delegations"
    }
  ];

  return (
    <div className="w-full relative py-6">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* Accordion Outermost Box with soft gold border */}
        <div className="border border-[#bdae93]/20 hover:border-[#bdae93]/40 rounded-2xl bg-[#0c0c0f] overflow-hidden transition-all duration-300 shadow-lg">
          
          {/* Header Bar: Clickable Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between text-left gap-4 hover:bg-white/[0.01] cursor-pointer group select-none transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#bdae93]/10 border border-[#bdae93]/20 flex items-center justify-center text-[#bdae93] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FolderArchive className="w-6 h-6 animate-pulse" />
              </div>
              
              <div>
                <span className="font-mono text-[9px] bg-[#bdae93]/15 text-[#bdae93] px-2 py-0.5 rounded uppercase tracking-widest font-black inline-block mb-1.5">
                  {lang === "fr" ? "ÉDITION PRÉCÉDENTE" : "PREVIOUS CYCLE RECORD"}
                </span>
                
                <h3 className="font-serif text-lg md:text-xl text-primary font-bold tracking-tight">
                  {lang === "fr" 
                    ? "NEXTGEN INNOVATION CHALLENGE 2025" 
                    : "NEXTGEN INNOVATION CHALLENGE 2025"
                  }
                </h3>
                <p className="font-sans text-xs text-on-surface-variant max-w-xl">
                  {lang === "fr"
                    ? "Voir les jalons d'archivage, la galerie d'expositions historiques et le rapport fédéral officiel."
                    : "Access historical milestone data, past exhibition photos, and the archived federal portfolio."
                  }
                </p>
              </div>
            </div>

            {/* Expander Icon */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="font-mono text-[10px] text-[#bdae93] font-bold tracking-wider uppercase hidden md:inline opacity-70 group-hover:opacity-100 transition-opacity">
                {isOpen 
                  ? (lang === "fr" ? "REPLIER L'ARCHIVE" : "COLLAPSE ARCHIVE") 
                  : (lang === "fr" ? "CONSULTER L'ARCHIVE" : "EXPLORE ARCHIVE")
                }
              </span>
              <div className="w-8 h-8 rounded-full border border-outline-variant/30 group-hover:border-[#bdae93] flex items-center justify-center shrink-0 transition-all duration-300">
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#bdae93]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-300 group-hover:text-[#bdae93]" />
                )}
              </div>
            </div>
          </button>

          {/* Accordion Expanded Content Box */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="overflow-hidden border-t border-outline-variant/30 bg-[#07070a]"
              >
                <div className="p-6 md:p-10 space-y-8">
                  
                  {/* Summary / Lead paragraph */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 space-y-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#bdae93] shrink-0" />
                        <span className="font-mono text-[10px] text-[#bdae93] tracking-widest uppercase font-black">
                          {lang === "fr" ? "APERCU DE L'EXPOSITION NATIONALE" : "NATIONAL EXHIBITION RECAP"}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                        {lang === "fr"
                          ? "Le festival national de 2025 a réuni plus de 100 jeunes scientifiques, fondateurs technologiques et investisseurs au cœur d'Abuja. Cette édition a jeté les bases réglementaires du modèle d'incubation actuel, enregistrant plus de 20 nouveaux brevets d'infrastructure sous la NBTI."
                          : "The landmark 2025 national exhibition brought together over 100 deep-tech researchers, digital designers, and policymakers. It established the initial infrastructure standards, successfully transferring core laboratory outcomes directly into commercialized pipelines."
                        }
                      </p>
                    </div>

                    <div className="md:col-span-4 flex justify-start md:justify-end">
                      <a
                        href="https://nextgeninnovation.ng/pictures-from-the-national-exhibition/"
                        target="_blank"
                        rel="noreferrer"
                        className="border border-[#bdae93] hover:bg-[#bdae93] hover:text-black text-[#bdae93] text-xs font-black uppercase tracking-widest px-5 py-3.5 rounded-[4px] inline-flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm text-center w-full md:w-auto justify-center"
                      >
                        {lang === "fr" ? "GALERIE OFFICIELLE EXPLO" : "VISIT LIVE EXHIBITION PORTAL"}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {archiveItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="bg-[#0b0b0f] border border-outline-variant/40 rounded-xl overflow-hidden shadow hover:border-outline-variant transition-colors group flex flex-col justify-between h-full"
                      >
                        {/* Aspect Image Block */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                          <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-500 scale-100 group-hover:scale-103"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] to-transparent" />
                          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm p-1.5 rounded-full border border-outline-variant/30 text-white">
                            {item.icon}
                          </div>
                        </div>

                        {/* Card Content Text */}
                        <div className="p-5 flex-grow flex flex-col justify-between">
                          <div className="space-y-2">
                            <h4 className="font-serif text-base text-primary font-bold group-hover:text-[#bdae93] transition-colors">
                              {item.title}
                            </h4>
                            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          {/* Mini footer */}
                          <div className="pt-4 border-t border-outline-variant/20 mt-4 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3 h-3 text-neutral-500" />
                              {item.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3 h-3 text-neutral-500" />
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Mini Lightbox Section inside Expanded State */}
                  <div className="border border-outline-variant/50 rounded-xl bg-gradient-to-r from-white/[0.01] to-white/[0.02] p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-serif text-sm md:text-base text-primary font-bold">
                          {lang === "fr" ? "Instants d'Exposition Sélectionnés (2025)" : "Curated Exhibition Captures (2025)"}
                        </h4>
                        <p className="font-sans text-[11px] text-on-surface-variant">
                          {lang === "fr" ? "Cliquez sur une diapositive historique pour l'agrandir instantanément." : "Click on any historical slide to open the high-fidelity interactive lightbox."}
                        </p>
                      </div>
                      <span className="font-mono text-[9px] text-[#bdae93] bg-[#bdae93]/10 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                        4 {lang === "fr" ? "ARCHIVES" : "RECORDS"}
                      </span>
                    </div>

                    {/* Interactive Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {galleryPhotos.map((photo, i) => (
                        <button
                          key={i}
                          onClick={() => setActivePhoto(photo.url)}
                          className="relative aspect-video rounded-lg overflow-hidden border border-outline-variant/30 hover:border-[#bdae93] group cursor-pointer transition-colors w-full focus:outline-none"
                        >
                          <img 
                            src={photo.url} 
                            alt={photo.caption} 
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                            <span className="font-mono text-[8px] bg-black/60 px-1.5 py-0.5 rounded text-white tracking-widest uppercase">
                              {photo.tag}
                            </span>
                            <Play className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* Lightbox / Popup Overlay */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop click dismiss */}
            <div 
              onClick={() => setActivePhoto(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-[10px] transition-opacity cursor-pointer" 
            />

            {/* Popup Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-[#0c0c0f] border border-[#bdae93]/30 rounded-xl overflow-hidden shadow-2xl z-20 flex flex-col"
            >
              <button 
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 text-white hover:text-[#bdae93] p-1.5 rounded-full bg-black/40 hover:bg-black/80 transition-colors z-35 cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Heavy aspect image box */}
              <div className="aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center relative">
                <img 
                  src={activePhoto} 
                  alt="Archived exhibition photo view" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Capture descriptions bar */}
              <div className="p-4 bg-zinc-950 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#bdae93]" />
                  <p className="font-sans text-xs text-neutral-200">
                    {galleryPhotos.find(p => p.url === activePhoto)?.caption}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[9px] bg-[#bdae93]/15 text-[#bdae93] px-2 py-0.5 rounded uppercase font-bold shrink-0 self-start">
                    {galleryPhotos.find(p => p.url === activePhoto)?.tag}
                  </span>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase">
                    CYCLE: 2025
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
