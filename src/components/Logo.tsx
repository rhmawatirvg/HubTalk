import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
  variant?: 'light' | 'dark' | 'transparent';
  iconOnly?: boolean;
}

export default function Logo({
  className = "h-11",
  withText = true,
  variant = 'transparent',
  iconOnly = false
}: LogoProps) {
  // Determine color scheme based on variant
  // In the image, the logo has a white background, black text "The Hubtalk.", blue accents.
  // We want to make it look incredibly sharp and adapt to dark/light themes.
  const isDarkBg = variant === 'dark';
  const textClass = isDarkBg ? 'text-white' : 'text-slate-900';
  const logoBgClass = variant === 'light' ? 'bg-white p-2.5 rounded-2xl shadow-sm border border-gray-100' : '';

  return (
    <div className={`flex items-center gap-3 ${logoBgClass} ${className}`}>
      {/* High-Fidelity SVG of the "th" Logo Mark */}
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 flex-shrink-0"
      >
        {/* ================= LEFT LETTER 't' ================= */}
        {/* Blue Cap (Antenna top) for 't' */}
        <path
          d="M 45 25 A 15 15 0 0 1 75 25 L 75 42 L 45 42 Z"
          fill="#3B66CF"
        />
        {/* White thin separator between cap and stem */}
        <rect x="45" y="42" width="30" height="2" fill={variant === 'light' ? '#FFFFFF' : '#0B1E43'} />

        {/* Black Stem body of 't' (lowercase) */}
        {/* Curving at the bottom to the right */}
        <path
          d="M 45 44 
             L 45 92 
             A 20 20 0 0 0 65 112 
             L 85 112 
             A 10 10 0 0 0 95 102 
             L 95 92 
             A 10 10 0 0 0 85 82 
             L 75 82 
             A 10 10 0 0 1 65 72 
             L 65 44 Z"
          fill="#000000"
        />

        {/* Blue Horizontal bar wrapping around 't' (belt/collar) */}
        {/* It curves around the left side of 't' */}
        <path
          d="M 33 60 
             A 12 12 0 0 1 45 48 
             L 75 48 
             A 12 12 0 0 1 87 60 
             L 87 62 
             A 12 12 0 0 1 75 74 
             L 45 74 
             A 12 12 0 0 1 33 62 Z"
          fill="#0F2B5C"
        />
        <path
          d="M 39 60 
             A 6 6 0 0 1 45 54 
             L 75 54 
             A 6 6 0 0 1 81 60 
             L 81 62 
             A 6 6 0 0 1 75 68 
             L 45 68 
             A 6 6 0 0 1 39 62 Z"
          fill="#1E4CB0"
        />

        {/* Three Radiating Blue Leaves/Waves on top-right of 't' */}
        {/* Inner Wave */}
        <path
          d="M 83 48 C 88 43, 94 43, 98 48 C 100 50, 99 55, 95 58 C 91 61, 86 58, 84 54 C 82 52, 82 49, 83 48 Z"
          fill="#1E4CB0"
        />
        {/* Middle Wave */}
        <path
          d="M 91 38 C 98 32, 106 32, 111 39 C 113 42, 112 48, 107 52 C 102 56, 95 52, 92 46 C 90 43, 90 40, 91 38 Z"
          fill="#1E4CB0"
        />
        {/* Outer Wave */}
        <path
          d="M 99 28 C 108 21, 118 21, 124 29 C 127 33, 125 41, 119 46 C 113 51, 104 46, 100 38 C 98 34, 98 30, 99 28 Z"
          fill="#1E4CB0"
        />

        {/* ================= RIGHT LETTER 'h' ================= */}
        {/* Blue Cap (Antenna top) for 'h' stem */}
        <path
          d="M 107 25 A 15 15 0 0 1 137 25 L 137 42 L 107 42 Z"
          fill="#3B66CF"
        />
        {/* White thin separator */}
        <rect x="107" y="42" width="30" height="2" fill={variant === 'light' ? '#FFFFFF' : '#0B1E43'} />

        {/* Black Stem and arch body of 'h' */}
        <path
          d="M 107 44 
             L 107 102 
             A 10 10 0 0 0 117 112 
             L 117 112 
             A 10 10 0 0 0 127 102 
             L 127 75 
             A 15 15 0 0 1 142 60 
             L 142 60 
             A 15 15 0 0 1 157 75 
             L 157 102 
             A 10 10 0 0 0 167 112 
             L 167 112 
             A 10 10 0 0 0 177 102 
             L 177 75 
             A 35 35 0 0 0 142 40 
             A 35 35 0 0 0 127 50 
             L 127 44 Z"
          fill="#000000"
        />
      </svg>

      {/* Brand Text Section with droplet accent */}
      {withText && !iconOnly && (
        <div className="flex flex-col select-none">
          <div className="flex items-center gap-1">
            {/* Droplet/Flame Accent on the left of 'The' */}
            <svg viewBox="0 0 12 18" className="w-3.5 h-4 text-sky-500 fill-current animate-pulse flex-shrink-0" style={{ transform: 'rotate(-10deg)' }}>
              <path d="M6,0 C6,0 12,6.5 12,11.5 C12,14.8 9.3,17.5 6,17.5 C2.7,17.5 0,14.8 0,11.5 C0,6.5 6,0 6,0 Z" />
              <path d="M6,3 C6,3 10,8 10,11.5 C10,13.8 8.2,15.5 6,15.5 C3.8,15.5 2,13.8 2,11.5 C2,8 6,3 6,3 Z" fill="#FFF" opacity="0.3" />
            </svg>
            
            {/* Main Brand Text */}
            <span className={`font-display text-lg sm:text-xl font-black tracking-tight ${textClass}`}>
              The Hubtalk<span className="text-sky-500 font-extrabold text-xl animate-pulse">.</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
