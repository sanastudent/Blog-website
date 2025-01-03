


import React from "react";

interface TwitterProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Twitter: React.FC<TwitterProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="328 355 335 276"
    className={className}  // This will now accept a className prop correctly
    {...rest}  // Any other props passed to the SVG element
  >
    <path
      d="M630 425a195 195 0 0 1-299 175 142 142 0 0 0 97-30 70 70 0 0 1-58-47 70 70 0 0 0 31-2 70 70 0 0 1-57-66 70 70 0 0 0 28 5 70 70 0 0 1-18-90 195 195 0 0 0 141 72 67 67 0 0 1 116-62 117 117 0 0 0 43-17 65 65 0 0 1-31 38 117 117 0 0 0 39-11 65 65 0 0 1-32 35Z"
      style={{
        fill: "#3ba9ee",
      }}
    />
  </svg>
);


// Define the props interface for SVG components
interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string; // Optional className for styling
}

// Youtube Component
export const Youtube: React.FC<SocialIconProps> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 461.001 461.001"
    className={className}
    {...props}
  >
    <path
      d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"
      style={{
        fill: "#f61c0d",
      }}
    />
  </svg>
);

// Github Component
export const Github: React.FC<SocialIconProps> = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className={className} {...rest}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

// Facebook Component
export const Facebook: React.FC<SocialIconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    className={className}
    {...rest}
  >
    <circle cx={16} cy={16} r={14} fill="url(#a)" />
    <path
      fill="#fff"
      d="m21.214 20.282.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 0 0 4.383 0v-9.552h3.269Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={16}
        x2={16}
        y1={2}
        y2={29.917}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#18ACFE" />
        <stop offset={1} stopColor="#0163E0" />
      </linearGradient>
    </defs>
  </svg>
);

// Linkedin Component
export const Linkedin: React.FC<SocialIconProps> = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} {...rest}>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <rect width={28.87} height={28.87} fill="#0b86ca" rx={6.48} ry={6.48} />
        <path
          fill="#fff"
          d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 1 1-1.74 1.75 1.74 1.74 0 0 1 1.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 0 1 2.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
        />
      </g>
    </g>
  </svg>
);

  
  