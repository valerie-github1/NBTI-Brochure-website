/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, Key, Lock, Mail, Building, User, ChevronDown, CheckCircle2 } from "lucide-react";
import { Language } from "../translations";

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

// Allowed user roles for dropdown menu as specified
type InvestorRole = "Venture Capitalist" | "Institutional Partner" | "Government Representative" | "Tech Innovator";

export default function WhitepaperModal({ isOpen, onClose, lang }: WhitepaperModalProps) {
  const [step, setStep] = useState<"info" | "form" | "submitting" | "granted">("info");
  
  // Form fields state variables
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState<InvestorRole | "">("");
  
  // Validation state variables
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");

  if (!isOpen) return null;

  // Real-time email validation verifying corporate domains
  const validateEmailDomain = (inputEmail: string) => {
    if (!inputEmail) return false;
    // Common public/personal free email carriers to filter out as per spec
    const personalDomains = /@(gmail|yahoo|hotmail|outlook|live|msn|icloud|aol|mail|yandex|proton|zoho)\./i;
    if (personalDomains.test(inputEmail)) {
      setEmailError(
        lang === "fr" 
          ? "Domaine institutionnel requis (@org / @entreprise). Les boîtes Gmail/Yahoo sont restreintes."
          : "Corporate or institutional domain preferred. Public domains (Gmail, Yahoo, etc.) are restricted."
      );
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!fullName.trim() || !email.trim() || !organization.trim() || !role) {
      setFormError(
        lang === "fr" 
          ? "Veuillez remplir tous les champs requis."
          : "Please complete all required fields and select an institutional role."
      );
      return;
    }

    const isValidDomain = validateEmailDomain(email);
    if (!isValidDomain) {
      return;
    }

    // Move to submitting state with loading transition
    setStep("submitting");

    // Secure lead-registration logging
    const leadData = {
      fullName,
      email,
      organization,
      role,
      tokenIssued: `NBTI-SOV-2026-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      timestamp: new Date().toISOString()
    };

    // Save lead to local storage for durable client persistence
    try {
      const activeLeads = JSON.parse(localStorage.getItem("nbti_investor_leads") || "[]");
      activeLeads.push(leadData);
      localStorage.setItem("nbti_investor_leads", JSON.stringify(activeLeads));
      console.log("🔒 [Security Officer] Dynamic investor lead cataloged successfully:", leadData);
    } catch (e) {
      console.error("Local storage enrollment failed:", e);
    }

    // Simulate key generation & authorization handshake with a high-end experience
    setTimeout(() => {
      setStep("granted");
    }, 2000);
  };

  const handleResetModal = () => {
    setStep("info");
    setFullName("");
    setEmail("");
    setOrganization("");
    setRole("");
    setEmailError("");
    setFormError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dynamic Backdrop */}
      <div 
        onClick={handleResetModal}
        className="absolute inset-0 bg-black/85 backdrop-blur-[14px] transition-opacity duration-300" 
      />
      
      {/* Core Dialog Container */}
      <div className="relative bg-[#0c0c0f] max-w-2xl w-full p-8 md:p-10 bloom-shadow border border-[#bdae93]/25 rounded-xl animate-in fade-in zoom-in-95 duration-300 z-10 overflow-hidden">
        
        {/* Top Gold Horizon Ambient line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#bdae93] to-transparent" />

        {/* Close Button */}
        <button 
          onClick={handleResetModal}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/5"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <AnimatePresence mode="wait">
          {/* STEP 1: Main Sovereign Framework Overview */}
          {step === "info" && (
            <motion.div
              key="step-info"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#bdae93]/10 border border-[#bdae93]/30 flex items-center justify-center text-[#bdae93]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                    {lang === "fr" ? "Accéder au Livre Blanc" : "Sovereign Framework Access"}
                  </h3>
                  <p className="font-mono text-[9px] text-[#bdae93] tracking-widest uppercase font-bold mt-0.5">
                    {lang === "fr" ? "COFFRE D'INVESTISSEMENT GÉRÉ" : "RESTRICTED DOCUMENT REGISTRY"}
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                {lang === "fr" ? 
                  "Le livre blanc souverain de la NBTI est hébergé sur notre portail sécurisé dédié au cadre souverain. Ce coffre-fort contient un matériel stratégique d'importance géopolitique et économique." :
                  "The NBTI Sovereign Whitepaper is hosted on our secure 'Sovereign Framework' portal. This repository exposes classified geopolitical, technical, and regulatory roadmaps designed for accredited institutions."
                }
              </p>
              
              <div className="space-y-4 border-y border-outline-variant/30 py-6 bg-white/[0.01] px-4 rounded-lg">
                <h4 className="font-mono text-[10px] text-[#bdae93] uppercase tracking-widest font-black">
                  {lang === "fr" ? "Contenu de la documentation :" : "Included Strategic Assets:"}
                </h4>
                
                <ul className="space-y-3 font-sans text-xs md:text-sm text-[#e5e5e5]">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#bdae93] shrink-0 mt-0.5" />
                    <span>{lang === "fr" ? "Feuille de Route Stratégique 2026-2031" : "2026-2031 National Sovereign Tech Roadmap"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#bdae93] shrink-0 mt-0.5" />
                    <span>{lang === "fr" ? "Cadre de Gouvernance des Investissements" : "Cross-Border Investment Governance Codes"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#bdae93] shrink-0 mt-0.5" />
                    <span>{lang === "fr" ? "Spécifications Techniques : Autonomie des Données" : "Technical Specifications: Sovereign Data Autonomy"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#bdae93] shrink-0 mt-0.5" />
                    <span>{lang === "fr" ? "Registre Décentralisé et Blockchain" : "Decentralized Resource Register & Blockchain Integration Initiatives"}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setStep("form")}
                  className="shimmer-btn btn-hover-scale inline-flex items-center justify-center bg-white text-black px-8 py-4 font-sans text-xs font-black uppercase tracking-widest hover:bg-[#bdae93] hover:text-black transition-all w-full text-center rounded-[4px] shadow-lg cursor-pointer"
                >
                  {lang === "fr" ? "ENTRER DANS LE RÉPERTOIRE SÉCURISÉ" : "Enter Secure Repository"}
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Frictionless Investor Lead-Generation Form */}
          {step === "form" && (
            <motion.div
              key="step-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#bdae93]/10 border border-[#bdae93]/30 flex items-center justify-center text-[#bdae93]">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
                    {lang === "fr" ? "Inscription des Investisseurs" : "Accredited Investor Enrollment"}
                  </h3>
                  <p className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase mt-0.5">
                    {lang === "fr" ? "FORMULAIRE D'ACCÈS SÉCURISÉ" : "SECURE ENROLLMENT HANDSHAKE"}
                  </p>
                </div>
              </div>

              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {lang === "fr" 
                  ? "Veuillez fournir vos coordonnées d'accréditation professionnelle ci-dessous pour déverrouiller instantanément le canal de téléchargement officiel de la NBTI."
                  : "Due to federal compliance regulations, please supply your current professional credentials below to instantly generate a secure, authenticated download token."}
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4 pt-1">
                {formError && (
                  <div className="bg-red-950/40 border border-red-500/30 text-red-200 text-xs px-4 py-3 rounded">
                    {formError}
                  </div>
                )}

                {/* Field 1: Full Name */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-[#bdae93] uppercase tracking-wider block font-bold">
                    {lang === "fr" ? "Nom Complet" : "Full Name"} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={lang === "fr" ? "Kazeem Raji" : "Dr. Sophia Vance"}
                      className="w-full bg-[#111115] border border-outline-variant rounded px-4 py-3 pl-11 text-xs md:text-sm text-white focus:outline-none focus:border-[#bdae93] transition-colors"
                    />
                  </div>
                </div>

                {/* Field 2: Institutional Email */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-[#bdae93] uppercase tracking-wider block font-bold">
                    {lang === "fr" ? "E-mail Professionnel / Institutionnel" : "Corporate / Institutional Email"} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) validateEmailDomain(e.target.value);
                      }}
                      onBlur={() => validateEmailDomain(email)}
                      placeholder={lang === "fr" ? "nom@votreentreprise.com" : "svance@goldmanfunds.com"}
                      className="w-full bg-[#111115] border border-outline-variant rounded px-4 py-3 pl-11 text-xs md:text-sm text-white focus:outline-none focus:border-[#bdae93] transition-colors"
                    />
                  </div>
                  {emailError && (
                    <p className="text-[11px] text-[#bdae93] font-sans font-medium mt-1">
                      ⚠️ {emailError}
                    </p>
                  )}
                </div>

                {/* Field 3: Fund / Organization Name */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-[#bdae93] uppercase tracking-wider block font-bold">
                    {lang === "fr" ? "Nom de l'Organisation / Fonds" : "Organization / Fund Name"} *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder={lang === "fr" ? "Fonds d'Incubation Canada-Afrique" : "Apex Global Partners"}
                      className="w-full bg-[#111115] border border-outline-variant rounded px-4 py-3 pl-11 text-xs md:text-sm text-white focus:outline-none focus:border-[#bdae93] transition-colors"
                    />
                  </div>
                </div>

                {/* Field 4: Role Dropdown Menu */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-[#bdae93] uppercase tracking-wider block font-bold">
                    {lang === "fr" ? "Rôle Institutionnel" : "Role"} *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value as InvestorRole)}
                      className="w-full bg-[#111115] border border-outline-variant rounded px-4 py-3 pr-10 text-xs md:text-sm text-white focus:outline-none focus:border-[#bdae93] transition-colors appearance-none"
                    >
                      <option value="" className="text-neutral-500">
                        {lang === "fr" ? "-- Sélectionner une Option --" : "-- Select Option --"}
                      </option>
                      <option value="Venture Capitalist">Venture Capitalist</option>
                      <option value="Institutional Partner">Institutional Partner</option>
                      <option value="Government Representative">Government Representative</option>
                      <option value="Tech Innovator">Tech Innovator</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep("info")}
                    className="border border-outline-variant hover:bg-white/5 text-neutral-300 font-sans text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-[4px] cursor-pointer"
                  >
                    {lang === "fr" ? "Retour" : "Back"}
                  </button>
                  <button
                    type="submit"
                    className="shimmer-btn flex-grow bg-white text-black hover:bg-[#bdae93] hover:text-black font-sans text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-[4px] cursor-pointer transition-all text-center"
                  >
                    {lang === "fr" ? "Valider et Authentifier" : "Authorize Key Agreement"}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 3: Cryptographic Key Agreement Generation Loading Loader */}
          {step === "submitting" && (
            <motion.div
              key="step-submitting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center space-y-6 flex flex-col items-center justify-center min-h-[350px]"
            >
              {/* Spinner */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 border-3 border-[#bdae93]/10 rounded-full" />
                <div className="absolute inset-0 border-3 border-t-[#bdae93] rounded-full animate-spin" />
                <Lock className="w-5 h-5 text-[#bdae93] absolute animate-pulse" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-white">
                  {lang === "fr" ? "Contrôle de Conformité" : "Securing Key Handshake"}
                </h4>
                <p className="font-mono text-[9px] text-[#bdae93] tracking-widest uppercase">
                  VERIFYING LEADS & SECURITY REGISTRY AGENT
                </p>
                <p className="font-sans text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                  {lang === "fr"
                    ? "Génération sécurisée des clés d'autorisation pour débloquer la documentation..."
                    : "Logging institution footprint in federal ledger and generating cryptographic framework tokens..."}
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Success, Tokens Issued, Download assets link rendered */}
          {step === "granted" && (
            <motion.div
              key="step-granted"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="space-y-6 text-center py-6 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-950/50 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                  {lang === "fr" ? "Accès Sécurisé Accordé" : "Sovereign Access Granted"}
                </h3>
                <p className="font-mono text-[9px] text-[#bdae93] tracking-widest uppercase font-black">
                  TRANSMISSION CHANNEL SUCCESSFULLY AUTHORIZED
                </p>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/25 p-5 rounded-lg text-xs md:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed space-y-3">
                <p>
                  {lang === "fr"
                    ? "Vos informations institutionnelles ont été vérifiées avec succès. Un jeton d'autorisation à usage unique a été inscrit."
                    : "Your institutional footprint is successfully registered. Direct, uncensored download access is now unlocked with a secure temporary token."}
                </p>
                <div className="font-mono text-[10px] bg-black/50 text-[#bdae93] px-3 py-1.5 rounded inline-block select-all">
                  AUTHORIZATION SIGNATURE: SECURED-NBTI-2026-X
                </div>
              </div>

              <div className="pt-4 w-full space-y-3">
                {/* 
                  Target Document Download Portal URL 
                */}
                <a 
                  href="https://nextgeninnovation.ng/pictures-from-the-national-exhibition/"
                  target="_blank"
                  rel="noreferrer"
                  className="shimmer-btn btn-hover-scale inline-block bg-[#bdae93] text-black px-8 py-4 font-sans text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full text-center rounded-[4px] shadow-lg cursor-pointer"
                >
                  {lang === "fr" ? "TÉLÉCHARGER LE CADRE DE L'INVESTISSEUR" : "Download Sovereign Roadmaps Now"}
                </a>
                
                <button
                  onClick={handleResetModal}
                  className="font-mono text-[10px] text-neutral-400 hover:text-white uppercase tracking-widest font-black transition-colors"
                >
                  {lang === "fr" ? "Quitter le Coffre" : "Disconnect / Exit Vault"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
