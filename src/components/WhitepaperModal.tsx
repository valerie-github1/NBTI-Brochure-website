/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, ShieldCheck } from 'lucide-react';
import { Language } from '../translations';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function WhitepaperModal({ isOpen, onClose, lang }: WhitepaperModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300" 
      />
      
      {/* Container */}
      <div className="relative bg-surface-container max-w-2xl w-full p-8 md:p-10 bloom-shadow border border-outline-variant/60 rounded-xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-1"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">
          {lang === "fr" ? "Accéder au Livre Blanc" : "Access Sovereign Whitepaper"}
        </h3>

        <div className="space-y-6">
          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
            {lang === "fr" ? 
              "Le livre blanc souverain de la NBTI est hébergé sur notre portail sécurisé dédié au cadre souverain." :
              "The NBTI Sovereign Whitepaper is hosted on our secure dedicated 'Sovereign Framework' portal as requested."
            }
          </p>
          
          <div className="space-y-4 border-y border-outline-variant/20 py-6">
            <h4 className="font-sans text-xs text-secondary uppercase tracking-widest font-black">
              {lang === "fr" ? "Contenu de la documentation :" : "Included Documentation Roadmap:"}
            </h4>
            
            <ul className="space-y-4 font-sans text-xs md:text-sm text-on-surface">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span>{lang === "fr" ? "Feuille de Route Stratégique 2024-2029" : "2024-2029 Strategic Roadmap"}</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span>{lang === "fr" ? "Cadre de Gouvernance des Investissements" : "Investment Governance Framework"}</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span>{lang === "fr" ? "Spécifications Techniques : Autonomie des Données" : "Technical Specifications: Data Autonomy"}</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span>{lang === "fr" ? "Spécifications Techniques : Registre Décentralisé / Blockchain" : "Technical Specifications: Decentralized Register / Blockchain Initiatives"}</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            {/* Must send the user to the Whitepaper URL requested by user: "https://nextgeninnovation.ng/pictures-from-the-national-exhibition/" */}
            <a 
              href="https://nextgeninnovation.ng/pictures-from-the-national-exhibition/"
              target="_blank"
              rel="noreferrer"
              className="shimmer-btn btn-hover-scale inline-block bg-white text-black px-8 py-4 font-sans text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-black transition-all w-full text-center rounded shadow-md cursor-pointer"
            >
              {lang === "fr" ? "ENTRER DANS LE RÉPERTOIRE SÉCURISÉ" : "Enter Secure Repository"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
