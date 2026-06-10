import React from "react";

export default function CanadaAfricaImage() {
  return (
    <div className="relative w-full h-full bg-[#0a0a0c] overflow-hidden select-none">
      <svg
        viewBox="0 0 800 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        aria-label="Dr. Kazeem Kolawole Raji in colorful Agbada addressing the Canada Africa Innovation Festival"
      >
        <defs>
          {/* Linear Ceiling Light Glow filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Gradients for Agbada Folds */}
          <linearGradient id="agbadaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4c276a" />
            <stop offset="40%" stopColor="#311448" />
            <stop offset="100%" stopColor="#1a042a" />
          </linearGradient>

          <linearGradient id="agbadaFoldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5d2e83" />
            <stop offset="100%" stopColor="#311448" />
          </linearGradient>

          <linearGradient id="embroideryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9a75cc" />
            <stop offset="50%" stopColor="#dfdfef" />
            <stop offset="100%" stopColor="#9a75cc" />
          </linearGradient>

          {/* Golden Clock and Watch gradients */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffea79" />
            <stop offset="50%" stopColor="#c5a014" />
            <stop offset="100%" stopColor="#8c6a02" />
          </linearGradient>

          {/* Skin and Face tones */}
          <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#553d33" />
            <stop offset="100%" stopColor="#35241e" />
          </linearGradient>

          <linearGradient id="skinShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c1d18" />
            <stop offset="100%" stopColor="#1a110e" />
          </linearGradient>

          {/* Traditional Fila Pattern */}
          <pattern id="capStripes" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="10" x2="20" y2="10" stroke="#7e4a9e" strokeWidth="2.5" />
            <line x1="0" y1="20" x2="20" y2="20" stroke="#250f38" strokeWidth="2.5" />
          </pattern>
        </defs>

        {/* 1. WALL BACKDROP BASE */}
        <rect width="800" height="1000" fill="#0d0d10" />

        {/* Diagonal Sleek Ceiling Linear Flourescent Light */}
        <path d="M-50 -10 L180 120" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" filter="url(#glow)" />
        <path d="M-50 -10 L180 120" stroke="#e0f0ff" strokeWidth="10" strokeLinecap="round" />

        {/* 2. THE FESTIVAL EXHIBITION WALL/BANNER (From coordinates y=160 downwards) */}
        {/* Left vertical red display block */}
        <rect x="0" y="200" width="230" height="800" fill="#cc1e29" />
        {/* Red panel white typo "me" / "nue" (Part of Welcome / Venue layout) */}
        <text x="30" y="320" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="62" fontWeight="700" letterSpacing="-2px">me</text>
        <text x="30" y="390" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="62" fontWeight="700" letterSpacing="-2px">nue</text>

        {/* Right white backdrop block */}
        <rect x="230" y="200" width="570" height="300" fill="#fcfcfc" />

        {/* Canada-Africa Innovation Festival Bento-style 2x2 Logo Grid */}
        <g id="BentoLogo" transform="translate(360, 260)">
          {/* Top-Left: Red block with delicate white Maple Leaf */}
          <rect x="0" y="0" width="55" height="55" rx="14" fill="#cc1e29" />
          <path d="M27.5 14 L29.5 22 L36.5 20.5 L33 26.5 L39.5 31.5 L31 31.5 L27.5 39 L24 31.5 L15.5 31.5 L22 26.5 L18.5 20.5 L25.5 22 Z" fill="#ffffff" />

          {/* Top-Right: Dark Charcoal block with green Africa silhouette */}
          <rect x="62" y="0" width="55" height="55" rx="14" fill="#323338" />
          <path d="M82 14 C83 14 84 15 85 16 C87 18 90 18 92 19 C94 20 95 22 95 24 C94 27 92 28 92 30 C92 31 93 32 94 32 C94 34 92 36 90 38 C88 40 85 41 84 43 L84 46 L81 44 C80 43 79 41 78 40 C77 39 77 37 76 36 L75 35 L76 32 C76 31 75 30 74 29 L74 26 C75 25 76 24 77 23 C77 21 78 20 79 19 C80 17 80 15 82 14 Z" fill="#00a35e" />

          {/* Bottom-Left: Solid Gold-Yellow block */}
          <rect x="0" y="62" width="55" height="55" rx="14" fill="#fcaa15" />

          {/* Bottom-Right: Solid Orange-Red block */}
          <rect x="62" y="62" width="55" height="55" rx="14" fill="#e2453f" />
        </g>

        {/* Festival Branding Logo Text */}
        <text x="495" y="300" fill="#24252a" fontFamily="'Inter', sans-serif" fontSize="26" fontWeight="800" letterSpacing="0.5px">CANADA</text>
        <text x="495" y="330" fill="#24252a" fontFamily="'Inter', sans-serif" fontSize="26" fontWeight="800" letterSpacing="0.5px">AFRICA</text>
        <text x="495" y="352" fill="#5c5d64" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="600" letterSpacing="1px">Innovation Festival</text>

        {/* 3. WALL ACCENT GRAPHICS UNDER LOGO (Vibrant color blocking layout) */}
        {/* Large orange block with yellow arches */}
        <rect x="230" y="500" width="570" height="500" fill="#f89e1b" />

        {/* Sleek yellow arches columns on the orange block */}
        <path d="M 600,500 L 600,750 A 25,25 0 0,0 650,750 L 650,500" fill="#f5b822" />
        <path d="M 660,500 L 660,750 A 25,25 0 0,0 710,750 L 710,500" fill="#f5b822" />
        <path d="M 720,500 L 720,750 A 25,25 0 0,0 770,750 L 770,500" fill="#f5b822" />

        {/* Bottom geometric patches */}
        {/* Dark Green Banner block */}
        <rect x="230" y="780" width="120" height="220" fill="#024128" />
        <rect x="350" y="780" width="450" height="220" fill="#008051" />

        {/* Rotating yellow decorations overlay */}
        <rect x="710" y="850" width="40" height="40" rx="4" transform="rotate(25 710 850)" fill="#fcaa15" />
        <rect x="610" y="870" width="30" height="30" rx="4" transform="rotate(-15 610 870)" fill="#fcaa15" />
        <rect x="670" y="930" width="22" height="22" rx="4" transform="rotate(40 670 930)" fill="#fcaa15" />

        {/* Typography indicator underneath */}
        <text x="495" y="635" fill="rgba(255,255,255,0.9)" fontFamily="'Inter', sans-serif" fontSize="23" fontWeight="600" letterSpacing="-0.5px">ing</text>

        {/* 4. DR. KAZEEM KOLAWOLE RAJI - FIGURE CONSTRUCTION */}
        <g id="DrKazeemRajiFigure">
          
          {/* Subtle Shadow representation under the figure to anchor on canvas */}
          <ellipse cx="330" cy="990" rx="200" ry="25" fill="rgba(5, 5, 10, 0.6)" />

          {/* AGBADA - CAPE BACK SHIELD */}
          <path
            d="M 120,750 
               C 130,550, 480,550, 680,750 
               L 720,1050 
               L 80,1050 Z"
            fill="url(#agbadaGrad)"
          />

          {/* Sleek traditional Striped Lining on Agbada Edges (The shoulder stripes) */}
          <path d="M 140,580 C 130,680, 150,780, 160,1000" stroke="#7e4a9e" strokeWidth="15" strokeLinecap="round" opacity="0.8" />
          <path d="M 145,580 C 135,680, 155,780, 165,1000" stroke="#e2d8e8" strokeWidth="3" opacity="0.75" />
          <path d="M 115,640 C 105,740, 115,840, 120,1000" stroke="#a27eb8" strokeWidth="10" opacity="0.5" />

          {/* Left Agbada shoulder folds */}
          <path d="M 160,540 C 90,660, 40,750, 30,1000" stroke="#250f38" strokeWidth="22" strokeLinecap="round" />
          <path d="M 160,540 C 90,660, 40,750, 30,1000" stroke="url(#agbadaFoldHighlight)" strokeWidth="12" strokeLinecap="round" />

          {/* NECK */}
          <path d="M 285,460 L 345,460 L 345,540 L 285,540 Z" fill="url(#skinShadow)" />
          {/* Smooth anatomical shadow line */}
          <path d="M 285,490 C 310,510, 320,510, 345,490" stroke="#1d110d" strokeWidth="4" />

          {/* HEAD AND FACE */}
          <g id="FaceStructure">
            {/* Main Face Oval */}
            <path
              d="M 252,380 
                 C 252,310, 378,310, 378,380 
                 C 378,445, 365,475, 315,475 
                 C 265,475, 252,445, 252,380 Z"
              fill="url(#skinTone)"
            />

            {/* Nose Contour */}
            <path d="M 310,365 C 315,365, 320,369, 317,390" stroke="#201511" strokeWidth="4" strokeLinecap="round" />
            <path d="M 307,390 C 310,394, 320,394, 323,390" stroke="#201511" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* Cheerful Warm Eyes */}
            {/* Left Eye */}
            <path d="M 276,360 C 283,353, 294,353, 301,360" stroke="#1a110e" strokeWidth="5" strokeLinecap="round" fill="none" />
            <ellipse cx="288" cy="361" rx="4.5" ry="4" fill="#0f0907" />
            <ellipse cx="289" cy="360" rx="1.5" fill="#fcfcfc" /> {/* Eye reflection */}
            <path d="M 275,351 C 283,348, 292,348, 298,351" stroke="#100a08" strokeWidth="3" fill="none" /> {/* Eyebrow */}

            {/* Right Eye */}
            <path d="M 329,360 C 336,353, 347,353, 354,360" stroke="#1a110e" strokeWidth="5" strokeLinecap="round" fill="none" />
            <ellipse cx="341" cy="361" rx="4.5" ry="4" fill="#0f0907" />
            <ellipse cx="342" cy="360" rx="1.5" fill="#fcfcfc" />
            <path d="M 331,351 C 339,348, 348,348, 354,351" stroke="#100a08" strokeWidth="3" fill="none" />

            {/* Happy, friendly, broad smile */}
            <path
              d="M 285,415 
                 C 285,445, 345,445, 345,415 
                 Z"
              fill="#ffffff"
              stroke="#1d110d"
              strokeWidth="4.5"
            />
            {/* Smile crease corner shadows */}
            <path d="M 280,413 C 283,415, 285,419, 287,422" stroke="#251713" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 350,413 C 347,415, 345,419, 343,422" stroke="#251713" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Inner line for teeth segment */}
            <line x1="286" y1="421" x2="344" y2="421" stroke="#dedede" strokeWidth="3" />

            {/* Detailed Ears */}
            {/* Left Ear */}
            <path d="M 254,370 C 242,370, 244,395, 255,398" fill="url(#skinTone)" stroke="#201511" strokeWidth="2" />
            {/* Right Ear */}
            <path d="M 376,370 C 388,370, 386,395, 375,398" fill="url(#skinTone)" stroke="#201511" strokeWidth="2" />
          </g>

          {/* TRADITIONAL FILA CAP (Traditional Yoruba Cap made of matching purple/silver striped fabric) */}
          <g id="YorubaFilaCap">
            <path
              d="M 248,348 
                 C 240,280, 275,225, 315,225 
                 C 355,225, 388,280, 382,348 
                 Z"
              fill="url(#capStripes)"
              stroke="#1b0330"
              strokeWidth="4"
            />
            {/* Fila Folds & Crown Shading */}
            <path
              d="M 252,320 
                 C 275,250, 345,250, 378,320"
              stroke="#250f38"
              strokeWidth="5.5"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M 305,226 
                 C 312,230, 340,250, 335,280"
              stroke="#120222"
              strokeWidth="4"
              fill="none"
              opacity="0.9"
            />
            {/* Sleek golden accessory edge accentuation */}
            <path
              d="M 247,344 C 285,352, 345,352, 383,344"
              stroke="#7a479a"
              strokeWidth="5"
              fill="none"
            />
          </g>

          {/* AGBADA - CENTRAL GARMENT MASS */}
          {/* Main vertical robe and body */}
          <path
            d="M 160,600 
               L 470,600 
               L 520,1050 
               L 110,1050 Z"
            fill="url(#agbadaGrad)"
            stroke="#120222"
            strokeWidth="3"
          />

          {/* Main front Agbada central fold seams */}
          <path d="M 315,580 L 315,1050" stroke="#1c0a2a" strokeWidth="6" strokeLinecap="round" />

          {/* EMBROIDERED FRONT BIB (Traditional Yoruba Agbada Embroidered Plate) */}
          <g id="EmbroideredBib" transform="translate(195, 545)">
            {/* The beautiful shield-shaped embroidered chest bib */}
            <path
              d="M 35,0 
                 L 205,0 
                 C 205,80, 210,135, 185,220 
                 C 165,280, 75,280, 55,220 
                 C 30,135, 35,80, 35,0 Z"
              fill="#523073"
              stroke="url(#embroideryGrad)"
              strokeWidth="3.5"
            />

            {/* Outlined Embroidery Lines - Gears, compass, light contours */}
            {/* Innermost outline ring */}
            <path
              d="M 50,15 
                 L 190,15 
                 C 190,75, 195,120, 172,192 
                 C 152,240, 88,240, 68,192 
                 C 45,120, 50,75, 50,15 Z"
              stroke="#7e5aa0"
              strokeWidth="2"
              fill="none"
            />

            {/* TECH EMBROIDERY DECORATIVE SYMBOLS (Gears, Map shape, Lightbulb lines) */}
            {/* 1. Map of Africa contour */}
            <path d="M 110,50 C 115,50, 120,53, 123,56 C 126,59, 131,59, 134,62 C 137,65, 138,68, 140,73 C 137,80, 132,83, 132,88 C 131,90, 132,92, 133,95 L 129,103 L 122,100 C 120,95, 118,91, 115,88 L 110,85 L 111,79 L 107,74 L 109,64 L 112,56 Z" stroke="#e2d8ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />

            {/* 2. Technological gear motif (Circular design with notches) */}
            <circle cx="165" cy="115" r="18" stroke="#dfbdff" strokeWidth="2" fill="none" strokeDasharray="3,3" />
            <circle cx="165" cy="115" r="12" stroke="#dfbdff" strokeWidth="1.5" fill="none" />
            <circle cx="165" cy="115" r="5" stroke="#dfbdff" strokeWidth="1.5" fill="none" />

            {/* 3. Innovative Lightbulb motif */}
            <ellipse cx="78" cy="105" rx="11" ry="13" stroke="#e2d8ee" strokeWidth="2" fill="none" strokeDasharray="6,2" />
            <path d="M 72,116 L 84,116 M 74,120 L 82,120" stroke="#e2d8ee" strokeWidth="2" />
            {/* Filament */}
            <path d="M 75,108 L 78,102 L 81,108" stroke="#dfbdff" strokeWidth="1.5" fill="none" />

            {/* 4. Elegant digital/growth arrows */}
            <path d="M 70,175 L 85,160 L 95,170 S 115,145, 130,150" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <polyline points="123,144 131,149 127,157" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

            {/* 5. Delicate human head contours (Smart brain waves) */}
            <path d="M 152,192 C 147,175, 132,175, 128,190 S 135,212, 122,207" stroke="#9a75cc" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Small circular embroidery punch patterns */}
            <circle cx="120" cy="20" r="2.5" fill="#ffffff" />
            <circle cx="120" cy="245" r="4.5" fill="#ffffff" />
            <circle cx="56" cy="40" r="2" fill="#ffffff" opacity="0.6" />
            <circle cx="184" cy="40" r="2" fill="#ffffff" opacity="0.6" />
          </g>

          {/* GORGEOUS SHADED SLEEVES AND OVERLAYS */}
          {/* Overlayer fold on right shoulder (User's perspective: left) */}
          <path
            d="M 460,540 
               C 550,650, 640,750, 680,1000"
            stroke="#1a042a"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M 460,540 
               C 550,650, 640,750, 680,1000"
            stroke="#451e60"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* 5. HANDS & ACCENTS (Microphone, Luxury gold watch) */}
          {/* User's left (Dr. Raji's right hand) - Raised holding the microphone */}
          <g id="HandHoldingMic">
            {/* Elegant African Skin Tone sleeve cuff */}
            <path
              d="M 183,736 
                 C 192,670, 260,650, 275,700 
                 L 220,772 Z"
              fill="#250f38"
            />
            {/* Shunted sleeve edge fold */}
            <path d="M 183,736 C 215,700, 255,715, 275,700" stroke="#7e4a9e" strokeWidth="6" />

            {/* WRIST AND HAND TONES */}
            <path
              d="M 227,705 
                 C 230,685, 255,640, 280,630 
                 L 295,660 
                 C 285,680, 260,715, 237,719 Z"
              fill="url(#skinTone)"
            />

            {/* Hand fingers clasp detail (gripping the mic) */}
            <ellipse cx="270" cy="635" rx="10" ry="6" fill="url(#skinShadow)" transform="rotate(-15 270 635)" />
            <ellipse cx="273" cy="643" rx="10" ry="6" fill="url(#skinShadow)" transform="rotate(-15 273 643)" />
            <ellipse cx="275" cy="651" rx="9" ry="5.5" fill="url(#skinShadow)" transform="rotate(-15 275 651)" />
            <ellipse cx="277" cy="659" rx="8.5" ry="5" fill="url(#skinShadow)" transform="rotate(-15 277 659)" />
            <ellipse cx="265" cy="631" rx="12" ry="7" fill="url(#skinTone)" transform="rotate(-15 265 631)" /> {/* Clasping thumb */}

            {/* THE MICROPHONE */}
            {/* Wireless transmitter base ring */}
            <rect x="236" y="700" width="10" height="20" rx="3" fill="#cc1e29" transform="rotate(-18 236 700)" />
            {/* Solid matte black metal handle capsule */}
            <path
              d="M 235,710 L 290,560"
              stroke="#1c1c20"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M 235,710 L 290,560"
              stroke="#2e2e35"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Shiny silver transmitter ring on mic */}
            <line x1="281" y1="585" x2="287" y2="568" stroke="#dedede" strokeWidth="18" />

            {/* Traditional metallic grill cap */}
            <ellipse cx="292" cy="554" rx="15" ry="18" fill="#4a5568" transform="rotate(-18 292 554)" />
            <ellipse cx="292" cy="554" rx="13" ry="16" fill="#718096" transform="rotate(-18 292 554)" />
            <ellipse cx="291" cy="550" rx="12" ry="14" fill="#a0aec0" transform="rotate(-18 291 550)" />
            {/* Intersecting grill texture lines */}
            <path d="M 284,545 L 302,560 M 278,554 L 300,542 M 288,536 L 296,568" stroke="#1a202c" strokeWidth="1.5" />
          </g>

          {/* LUXURY GOLDEN WATCH ON DR. RAJI'S WRIST (Gold shine and detailed watch-head) */}
          <g id="GoldenWristwatch" transform="translate(4, -8)">
            {/* Watch bracket strap wraps around wrist */}
            <path
              d="M 233,707 
                 C 226,712, 222,725, 229,735 
                 L 235,731"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="10.5"
              strokeLinejoin="round"
            />
            {/* Gold metallic links definition */}
            <path d="M 233,707 S 224,718, 229,735" fill="none" stroke="#b08d0a" strokeWidth="2" strokeDasharray="3,1" />

            {/* Watch face container */}
            <circle cx="227" cy="719" r="12" fill="url(#goldGrad)" />
            <circle cx="227" cy="719" r="10.5" fill="#fcfcfc" stroke="#684e03" strokeWidth="1" />
            
            {/* Polished inner clock elements */}
            <line x1="227" y1="719" x2="227" y2="713" stroke="#121212" strokeWidth="1.5" />
            <line x1="227" y1="719" x2="233" y2="719" stroke="#121212" strokeWidth="1" />
            <circle cx="227" cy="719" r="2.5" fill="#121212" />
          </g>

        </g>
      </svg>
    </div>
  );
}
