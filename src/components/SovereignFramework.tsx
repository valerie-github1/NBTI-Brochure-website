/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Lock, FileText, Shield, Key, Eye, CheckCircle2, CloudDownload, HelpCircle } from "lucide-react";
import { Language } from "../translations";

interface SovereignFrameworkProps {
  onOpenWhitepaper: () => void;
  lang: Language;
}

export default function SovereignFramework({ onOpenWhitepaper, lang }: SovereignFrameworkProps) {
  // Gated resource items matching included documentation from the modal
  const resources = [
    {
      id: "res-001",
      title: lang === "fr" ? "Feuille de Route Technologique Nationale 2026-2031" : "2026-2031 National Tech Roadmap",
      docId: "NBTI-SRMAP-2026-V2.1",
      size: "4.8 MB",
      classification: lang === "fr" ? "RESTREINT (NIVEAU DE CONFIANCE NATIONAL)" : "RESTRICTED (EXECUTIVE TRUST LEVEL)",
      desc: lang === "fr"
        ? "La directive stratégique fédérale officielle détaillant les investissements d'infrastructure, le déploiement de l'incubation en nuage et l'autonomie matérielle."
        : "The official federal strategic blueprint detailing critical infrastructure investments, cloud incubation deployment, and hardware supply security guidelines over the next quinquennium.",
    },
    {
      id: "res-002",
      title: lang === "fr" ? "Codes de Gouvernance des Investissements Transfrontaliers" : "Cross-Border Investment Governance Codes",
      docId: "NBTI-CBIGC-2026-V1.0",
      size: "2.5 MB",
      classification: lang === "fr" ? "COMMERCIALISATION ACCRÉDITÉE" : "ACCREDITED VENTURE ONLY",
      desc: lang === "fr"
        ? "Dispositifs légaux et d'incitation fiscale pour l'organisation de syndicats de co-investissement couvrant le corridor Toronto-Nigéria."
        : "Legal mechanisms, statutory protections, and tax-concession structures governing international co-investment syndicates covering the Toronto-Nigeria tech corridors.",
    },
    {
      id: "res-003",
      title: lang === "fr" ? "Spécifications de l'Autonomie des Données" : "Technical Specs: National Data Autonomy",
      docId: "NBTI-TSDA-2025-REVISION3",
      size: "12.2 MB",
      classification: lang === "fr" ? "CLASSIFIÉ (AGENCES DE RECHERCHE)" : "CLASSIFIED (RESEARCH AGENCIES)",
      desc: lang === "fr"
        ? "Architecture réseau pour les centres de données régionaux de la NBTI, protégeant de manière autonome les informations stratégiques d'intérêt national."
        : "Network-level security architecture designed to establish isolated regional data nodes protecting native training models and state sector databases.",
    },
    {
      id: "res-004",
      title: lang === "fr" ? "Registre des Ressources et Intégration Blockchain" : "Decentralized Resource Register & Blockchain Initiatives",
      docId: "NBTI-DRRBC-2026-OFFICIAL",
      size: "3.7 MB",
      classification: lang === "fr" ? "RESTREINT" : "RESTRICTED",
      desc: lang === "fr"
        ? "Cadre technique décrivant le déploiement de registres d'exportation décentralisés pour garantir la traçabilité des actifs incubés."
        : "Technical protocols describing the deployment of low-latency consensus algorithms to record and secure property rights of regional incubation outputs and tech prototypes.",
    }
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface pb-24 relative overflow-hidden">
      {/* Absolute Decorative ambient background elements */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#bdae93]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#bdae93]/3 blur-[140px] rounded-full pointer-events-none" />

      {/* Header section */}
      <section className="relative pt-12 pb-16 px-6 md:px-16 max-w-[1440px] mx-auto text-center space-y-4">
        <span className="font-sans text-[11px] font-black text-[#bdae93] bg-[#bdae93]/10 px-4 py-1.5 rounded-full inline-block tracking-[0.25em] h-auto uppercase">
          {lang === "fr" ? "CENTRE DE RESSOURCES SÉCURISÉ" : "RESTRICTED INTELLECTUAL CAPITAL"}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary font-bold tracking-tight">
          {lang === "fr" ? "Registre du Cadre National" : "National Framework Registry"}
        </h1>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {lang === "fr"
            ? "Accédez aux rapports officiels d'incubation, aux structures de conformité et aux guides réglementaires fédéraux."
            : "Authorized institutional portal for structural compliance, technical blueprints, and regulatory directives. Access to these resources is subject to credential verification."}
        </p>
      </section>

      {/* Security Warning Notice */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto mb-16">
        <div className="border border-[#bdae93]/35 rounded-xl bg-[#111115] p-6 flex flex-col sm:flex-row items-center gap-6 bloom-shadow max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#bdae93]/10 border border-[#bdae93]/30 flex items-center justify-center text-[#bdae93] shrink-0">
            <Shield className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="font-serif text-lg text-white font-bold">
              {lang === "fr" ? "Dépôt Sécurisé Soumis à une Déclaration d'Intérêt" : "Access Requirements & Compliance Codes"}
            </h3>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
              {lang === "fr"
                ? "Tous les documents ci-dessous nécessitent une auto-authentification via notre formulaire d'accréditation d'investisseur. Les données d'accès sont journalisées."
                : "Downloading any federal ledger files requires completing the National Lead Agreement. Corporate domains and valid professional role designations are verified."}
            </p>
          </div>
        </div>
      </section>

      {/* Resources List (Bento-styled grid layout) */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6">
          {resources.map((res, index) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass-card hover-card-effect border border-outline-variant/60 rounded-xl p-6 md:p-8 bg-gradient-to-r from-neutral-900/40 via-[#0a0a0d] to-neutral-900/40 hover:border-[#bdae93]/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
            >
              {/* Document Info */}
              <div className="space-y-4 flex-grow max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[9px] text-[#bdae93] bg-[#bdae93]/10 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    {res.classification}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 border-l border-outline-variant/50 pl-3">
                    DOC ID: {res.docId}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">
                    SIZE: {res.size}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg md:text-xl text-primary font-bold group-hover:text-[#bdae93] transition-colors flex items-center gap-2">
                    <FileText className="w-5 h-5 text-neutral-400 group-hover:text-[#bdae93] shrink-0" />
                    {res.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {res.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 w-full md:w-auto">
                <button
                  onClick={onOpenWhitepaper}
                  className="shimmer-btn bg-white hover:bg-[#bdae93] text-black hover:text-black font-sans text-xs font-black uppercase tracking-widest px-6 py-4 rounded-[4px] shadow flex items-center justify-center gap-2 w-full md:w-auto transition-all duration-300 cursor-pointer text-center"
                >
                  <Lock className="w-3.5 h-3.5" />
                  {lang === "fr" ? "DÉBLOQUER LA CLÉ" : "Request Access"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions footnote inside Framework */}
      <section className="mt-24 px-6 md:px-16 max-w-[1440px] mx-auto text-center border-t border-outline-variant/30 pt-16 max-w-3xl space-y-4">
        <HelpCircle className="w-8 h-8 text-[#bdae93] mx-auto opacity-70" />
        <h4 className="font-serif text-lg text-white font-bold">
          {lang === "fr" ? "Des questions sur l'accès ?" : "Security Protocol Concerns?"}
        </h4>
        <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed max-w-xl mx-auto">
          {lang === "fr"
            ? "Pour toute demande d'accès média urgente ou délégation physique diplomatique, veuillez soumettre un dossier de transmission auprès du Secrétariat NBTI."
            : "Authorized agency enforcers hold keys of absolute domain authority. For custom integration issues, coordinate with the Center Manager at TIC Abeokuta."}
        </p>
      </section>
    </div>
  );
}
