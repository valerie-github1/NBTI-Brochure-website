/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";

import { Language, translations } from "../translations";

interface SecretariatModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function SecretariatModal({
  isOpen,
  onClose,
  lang,
}: SecretariatModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const t = translations[lang];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email || !category) {
      setErrorMessage(
        lang === "fr"
          ? "Veuillez remplir tous les champs obligatoires."
          : "Please fill in all required fields."
      );
      return;
    }

    setErrorMessage("");

    // Prepare mailto payload according to "All email must go to topeomojayogbe@ukald.com"
    const subject = encodeURIComponent(`NBTI Secretariat Contact: ${category}`);
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nPhone Number: ${phone}\nEmail: ${email}\nCategory: ${category}\n\nSubmitted via NBTI NextGen Portal.`,
    );

    // Open standard mailto programmatically in background or new tab safely
    window.location.href = `mailto:topeomojayogbe@ukald.com?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
  };

  const handleResetAndClose = () => {
    setFormSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setCategory("");
    setErrorMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Content wrapper */}
      <div className="relative w-full max-w-xl bg-surface-container border border-outline-variant/60 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-1"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!formSubmitted ? (
          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary dark:text-white leading-tight">
                  {lang === "fr" ? "Contacter le Secrétariat" : "Contact Secretariat"}
                </h3>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant dark:text-primary-fixed-dim font-medium">
                  {lang === "fr" ? 
                    "Soumettez votre demande aux représentants officiels du programme d'intégration Canada-Afrique." :
                    "Submit your inquiry to the official representatives for the Canada-Africa integration program."
                  }
                </p>
              </div>

              {/* Official Contact Info Badge */}
              <div className="p-4 bg-white/[0.02] border border-outline-variant/30 rounded-lg space-y-2 font-sans text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-bold">Email:</span>
                    <a href="mailto:info@nextgeninnovation.ng" className="text-white hover:underline hover:text-secondary transition-colors font-medium">
                      info@nextgeninnovation.ng
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-bold">Website:</span>
                    <a href="https://www.nextgeninnovation.ng" target="_blank" rel="noreferrer" className="text-white hover:underline hover:text-secondary transition-colors font-medium">
                      www.nextgeninnovation.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg text-xs font-sans font-semibold tracking-wide">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-sans font-bold text-[10px] text-primary/60 dark:text-white/60 mb-2 block uppercase tracking-wider">
                  {lang === "fr" ? "Nom Complet" : "Full Name"}
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-surface-container-low dark:bg-white/5 border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none text-primary dark:text-white font-sans text-sm"
                  placeholder={lang === "fr" ? "Ex: Jean Dupont" : "e.g. John Doe"}
                  required
                  type="text"
                />
              </div>

              <div>
                <label className="font-sans font-bold text-[10px] text-primary/60 dark:text-white/60 mb-2 block uppercase tracking-wider">
                  {lang === "fr" ? "Numéro de Téléphone" : "Phone Number"}
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-surface-container-low dark:bg-white/5 border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none text-primary dark:text-white font-sans text-sm"
                  placeholder="+234..."
                  required
                  type="tel"
                />
              </div>

              <div>
                <label className="font-sans font-bold text-[10px] text-primary/60 dark:text-white/60 mb-2 block uppercase tracking-wider">
                  {lang === "fr" ? "Adresse E-mail" : "Email Address"}
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-low dark:bg-white/5 border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none text-primary dark:text-white font-sans text-sm"
                  placeholder="you@email.com"
                  required
                  type="email"
                />
              </div>

              <div>
                <label className="font-sans font-bold text-[10px] text-primary/60 dark:text-white/60 mb-2 block uppercase tracking-wider">
                  {lang === "fr" ? "Catégorie de la Demande" : "Inquiry Category"}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none text-white font-sans text-sm appearance-none cursor-pointer"
                  required
                >
                  <option
                    value=""
                    disabled
                    className="bg-surface-container text-on-surface-variant"
                  >
                    {lang === "fr" ? "Sélectionnez une catégorie" : "Select a category"}
                  </option>
                  <option
                    value="Strategic Partnership"
                    className="bg-surface-container text-white"
                  >
                    {lang === "fr" ? "Partenariat Stratégique" : "Strategic Partnership"}
                  </option>
                  <option
                    value="Investment Opportunity"
                    className="bg-surface-container text-white"
                  >
                    {lang === "fr" ? "Opportunité d'Investissement" : "Investment Opportunity"}
                  </option>
                  <option
                    value="Technical Inquiry"
                    className="bg-surface-container text-white"
                  >
                    {lang === "fr" ? "Demande Technique" : "Technical Inquiry"}
                  </option>
                  <option
                    value="Media & Press"
                    className="bg-surface-container text-white"
                  >
                    {lang === "fr" ? "Média & Presse" : "Media & Press"}
                  </option>
                  <option
                    value="Other"
                    className="bg-surface-container text-white"
                  >
                    {lang === "fr" ? "Autre" : "Other"}
                  </option>
                </select>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="flex-1 bg-secondary-container text-on-secondary-container px-8 py-4 font-sans text-xs tracking-wider rounded-[4px] font-bold hover:brightness-105 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(254,214,91,0.4)] transition-all active:scale-95 cursor-pointer uppercase"
                  type="submit"
                >
                  {lang === "fr" ? "ENVOYER LA DEMANDE" : "SUBMIT INQUIRY"}
                </button>
                <button
                  className="flex-1 border border-outline text-primary dark:text-white px-8 py-4 font-sans text-xs tracking-wider rounded-[4px] hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.02] transition-all cursor-pointer uppercase"
                  onClick={handleResetAndClose}
                  type="button"
                >
                  {lang === "fr" ? "ANNULER" : "CANCEL"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center space-y-8">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-serif text-2xl font-bold text-white">
                {lang === "fr" ? "Soumission Initialisée" : "Submission Initialized"}
              </h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed font-medium">
                {lang === "fr" ? (
                  <span>Votre messagerie a été activée pour envoyer les détails à </span>
                ) : (
                  <span>Your email client was triggered to route details directly to </span>
                )}
                <span className="font-black text-[#bdae93] text-sm block mt-1 underline">
                  topeomojayogbe@ukald.com
                </span>
                .
              </p>
            </div>
            <button
              className="bg-white text-black hover:bg-secondary hover:text-black hover:scale-105 transition-all duration-300 px-10 py-4 font-sans text-xs font-bold rounded-[4px] mx-auto block uppercase tracking-wider shadow-md cursor-pointer"
              onClick={handleResetAndClose}
            >
              {lang === "fr" ? "FERMER" : "DISMISS"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
