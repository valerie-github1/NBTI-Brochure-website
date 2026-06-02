/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, usePresence } from "motion/react";
import {
  Landmark,
  Handshake,
  Calendar,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Compass,
  Award,
  Building,
  Share2,
  CornerDownRight,
} from "lucide-react";

import { Language, translations } from "../translations";

interface StrategicPartnershipsProps {
  onOpenWhitepaper: () => void;
  onOpenContact: () => void;
  lang: Language;
}

// Micro Counter Component for numbers counting effect
function AnimatedNumber({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 1800; // ms
    const incrementTime = 40; // ms
    const totalSteps = totalDuration / incrementTime;
    const stepValue = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCurrent(end);
        clearInterval(timer);
      } else {
        setCurrent(Number(start.toFixed(decimals)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, decimals]);

  return (
    <span>
      {current.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function StrategicPartnerships({
  onOpenWhitepaper,
  onOpenContact,
  lang,
}: StrategicPartnershipsProps) {
  const t = translations[lang];
  const [scrolledToFramework, setScrolledToFramework] = useState(false);

  const scrollHandler = () => {
    const el = document.getElementById("framework-engagement");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setScrolledToFramework(true);
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden pt-12">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="bg-animated-mesh" />

        {/* NBTI Watermark Map/Seal */}
        <div className="absolute inset-x-0 mx-auto opacity-5 pointer-events-none flex items-center justify-center z-0">
          <img
            alt="NBTI Seal Coat of Arms"
            className="w-full max-w-[480px] object-contain select-none"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp--BJSGO6AK-90UAu-UuxlWurGDd48vaJLF2PGAoob2d6rg4_di1ByxO9f1RMiGU84uDwZyaD2Pubk8UV6xYYqIqyODDGxCsXVbYLpM7a4buBIsYub12T11N-A-2JZXkL3cYr3UPJ3U9OCuPXr7BnOyPf2-bASxWes3_jQC81FmAEDWofmKRqgcoXj3PIke8TZbEKOW7IVcbi8rv0F5Sn9xovbwbjOB6eEFn3TayrmRnuN6XckkK_msQCU1yCSfcLGZYGCnz4FLc"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
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
            className="lg:col-span-7 space-y-8"
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
              className="font-sans text-xs md:text-sm text-secondary tracking-widest uppercase font-bold px-3 py-1 bg-secondary/15 rounded-sm inline-block"
            >
              {t.instMission}
            </motion.span>
            
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 80, damping: 15 },
                },
              }}
              className="font-serif text-3xl md:text-6xl text-primary leading-tight font-bold"
            >
              {t.partnershipHeroTitle}
            </motion.h2>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 90, damping: 18 },
                },
              }}
              className="font-sans text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed"
            >
              {t.partnershipHeroDesc}
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
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={scrollHandler}
                className="shimmer-btn bg-secondary text-black px-8 py-4 font-sans text-xs font-bold uppercase tracking-wider rounded shadow-sm cursor-pointer"
              >
                {t.btnExploreFramework}
              </button>
              <button
                onClick={onOpenWhitepaper}
                className="btn-hover-scale bg-transparent border-2 border-white text-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all rounded cursor-pointer"
              >
                {t.btnWhitepaper}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square glass-card hover-card-effect rounded-xl bloom-shadow flex items-center justify-center p-6 overflow-hidden group">
              <img
                className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                alt="Drone maintenance and engineering"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjm6oNFmUteljHOVFifFDVQCErRJJGfi7wELpOkwh7FqJH-VLjuz7kVpyDT1gEuNFKxj_dxPTyX0F37f_gTU0gFln3gW_DMEv92esvhu-QLz_LNYcUe8hF_eXVyTY7MQy5Uv72VC-hP_tQGjvl7qtHCz5gt4nEL2KgNKYuM706UH8SnHd9GvzVcqTT88bD0cB3J8uEmpQK_u4LktzU5izvDp7DLPxKTPiU4vCNSPBpM8hjXJ0nQvHWXkRQuHB_xSZqpwEMwZMtijE"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Bento Grid */}
      <section className="px-6 md:px-16 py-20 max-w-[1440px] mx-auto bg-surface-container-low/40 border-y border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Government Initiative Card */}
          <div className="lg:col-span-8 glass-card rounded-xl p-8 md:p-10 bloom-shadow flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-primary font-bold">
                  Government Initiative
                </h3>
              </div>
              <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                A federally mandated infrastructure project designed to bridge
                the gap between academic research and commercial
                industrialization. NBTI facilitates the alignment of regulatory
                frameworks with the needs of the emerging tech sector.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/20 pt-8 mt-4">
              <div className="group">
                <span className="block font-serif text-2xl md:text-3xl text-secondary font-bold group-hover:text-secondary-fixed-dim transition-colors">
                  <AnimatedNumber value={36} suffix="+" />
                </span>
                <span className="font-sans text-[11px] font-bold text-on-surface-variant mt-2 block uppercase tracking-wide">
                  Centers Nationwide
                </span>
              </div>
              <div className="group">
                <span className="block font-serif text-2xl md:text-3xl text-secondary font-bold group-hover:text-secondary-fixed-dim transition-colors">
                  <AnimatedNumber value={850} />
                </span>
                <span className="font-sans text-[11px] font-bold text-on-surface-variant mt-2 block uppercase tracking-wide">
                  SMEs Launched
                </span>
              </div>
              <div className="group">
                <span className="block font-serif text-2xl md:text-3xl text-secondary font-bold group-hover:text-secondary-fixed-dim transition-colors">
                  ₦<AnimatedNumber value={4.2} decimals={1} suffix="B" />
                </span>
                <span className="font-sans text-[11px] font-bold text-on-surface-variant mt-2 block uppercase tracking-wide">
                  Capital Deployed
                </span>
              </div>
            </div>
          </div>

          {/* Strategic Alliance UKALD Card */}
          <div className="lg:col-span-4 alliance-card rounded-xl bg-surface-container border border-outline-variant p-8 md:p-10 flex flex-col justify-between text-on-surface min-h-[400px] shadow-lg">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-white font-bold">
                  Strategic Alliance UKALD
                </h3>
              </div>
              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed mb-8">
                Our partnership with UKALD focuses on localized economic resilience
                through technology transfer and capacity building.
              </p>
            </div>

            <a
              href="https://ukald.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between font-sans text-xs uppercase tracking-widest pt-8 border-t border-outline-variant/30 text-white font-bold hover:text-secondary transition-colors"
            >
              Alliance Details
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          {/* Global Reach Row Card */}
          <div className="lg:col-span-12 rounded-xl relative overflow-hidden h-[400px] md:h-[500px] shadow-lg group">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Toronto skyline"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvILX6eUu_1qiP_irlGQZEMDBDni3v497VnJ78V2ZT-7AxSR7ZGo-5oHjySzbYl4oT9OyA6FtqyenBpDvQZtdUstFQfNnN5N3oLArC3ar_WO0NDFhSDW8Dk1L6-H7dQ2lbxjqySZUdJ9rTZtyi5CMl1mHgO2_jDR35I3RxQ9YG8AYT6hDcvqhVTGEEuxcLt2I1rDUYvQ9cLFXZNZEyBYj3GEVb1hr1iJ6N792gQUcr2Ma6oIbaA0XnHDSHvSKeRiokH4xyL_BzgC8"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent flex items-center">
              <div className="max-w-2xl px-8 md:px-12 space-y-6">
                <span className="inline-block font-sans text-[10px] text-secondary tracking-widest uppercase bg-secondary/20 px-3 py-1 rounded-full ambient-pulse backdrop-blur-sm border border-secondary/30 font-bold">
                  International Expansion
                </span>
                <h3 className="font-serif text-2xl md:text-5xl text-white font-bold leading-tight">
                  Global Reach: Toronto Festival
                </h3>
                <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed">
                  Facilitating cross-continental dialogue at the Toronto
                  Innovation Festival. NBTI leads a delegation of Nigerian tech
                  pioneers to showcase sovereign capabilities to the North
                  American market.
                </p>
                <div className="pt-4">
                  <a
                    href="https://luma.com/r4sox1lf"
                    target="_blank"
                    rel="noreferrer"
                    className="shimmer-btn inline-block bg-white text-black px-8 py-4 font-sans text-xs font-bold uppercase tracking-wider hover:bg-secondary transition-all rounded shadow-sm pulse-effect"
                  >
                    FESTIVAL ITINERARY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Collaboration Section */}
      <section
        id="framework-engagement"
        className="px-6 md:px-16 py-24 max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-6">
            <h4 className="font-serif text-3xl text-primary font-bold leading-tight">
              Framework for Engagement
            </h4>
            <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-lg leading-relaxed">
              Our collaboration model is built on triple-helix principles,
              ensuring that government policy, academic research, and industry
              execution work in synchronized momentum.
            </p>
          </div>

          <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="hover-card-effect p-6 border-l-[3px] border-secondary bg-surface-container-low/50 rounded-r-lg space-y-3 hover:bg-surface-container-low transition-colors">
              <h5 className="font-sans font-bold text-xs text-primary uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" /> Institutional
                Trust
              </h5>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Vetted processes aligned with international governance standards
                and local economic directives.
              </p>
            </div>

            <div className="hover-card-effect p-6 border-l-[3px] border-secondary bg-surface-container-low/50 rounded-r-lg space-y-3 hover:bg-surface-container-low transition-colors">
              <h5 className="font-sans font-bold text-xs text-primary uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-secondary" /> Scalable
                Impact
              </h5>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Proven methodologies for scaling SMEs from incubation to market
                dominance.
              </p>
            </div>

            <div className="hover-card-effect p-6 border-l-[3px] border-secondary bg-surface-container-low/50 rounded-r-lg space-y-3 hover:bg-surface-container-low transition-colors">
              <h5 className="font-sans font-bold text-xs text-primary uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-secondary" /> IP Protection
              </h5>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Secured legal frameworks for protecting intellectual assets
                within the partnership ecosystem.
              </p>
            </div>

            <div className="hover-card-effect p-6 border-l-[3px] border-secondary bg-surface-container-low/50 rounded-r-lg space-y-3 hover:bg-surface-container-low transition-colors">
              <h5 className="font-sans font-bold text-xs text-primary uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" /> Diplomatic Support
              </h5>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Direct access to state-level diplomatic channels for
                international trade facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-highest py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="px-6 md:px-16 max-w-[1440px] mx-auto text-center space-y-8 relative z-10">
          <h2 className="font-serif text-2xl md:text-4xl text-primary font-bold">
            Align with the Future of Governance.
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            We invite global innovation leaders and government agencies to
            explore strategic synergies with the NBTI ecosystem.
          </p>
          <div className="flex justify-center items-center gap-6 pt-4">
            <a
              href="https://ukald.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 group shimmer-btn bg-white text-black px-8 py-4 rounded font-sans text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-black transition-all pulse-effect"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4 text-secondary transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Prominent Seals Footnote */}
      <section className="py-20 text-center">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-[#e0e0e0]/10 flex items-center justify-center p-3 border border-secondary/20 shadow-2xl relative opacity-[0.45] hover:opacity-100 hover:scale-105 transition-all duration-500 hover:shadow-secondary/10 select-none pointer-events-none">
            <img
              alt="Federal Government of Nigeria Official Seal"
              className="w-full h-full object-contain rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp--BJSGO6AK-90UAu-UuxlWurGDd48vaJLF2PGAoob2d6rg4_di1ByxO9f1RMiGU84uDwZyaD2Pubk8UV6xYYqIqyODDGxCsXVbYLpM7a4buBIsYub12T11N-A-2JZXkL3cYr3UPJ3U9OCuPXr7BnOyPf2-bASxWes3_jQC81FmAEDWofmKRqgcoXj3PIke8TZbEKOW7IVcbi8rv0F5Sn9xovbwbjOB6eEFn3TayrmRnuN6XckkK_msQCU1yCSfcLGZYGCnz4FLc"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-[1px] w-32 md:w-48 bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
        </div>
      </section>
    </div>
  );
}
