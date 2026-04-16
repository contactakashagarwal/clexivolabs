import { useId } from "react";

type LogoProps = {
  className?: string;
  /** Tighter sizing for the navigation bar */
  compact?: boolean;
};

/**
 * Clexivo Labs logo as defined in the Design Logo for CLEXIVO LABS package
 * (hex mark + CLEXIVO / LABS wordmark — inline SVG, no external logo files).
 */
export function Logo({ className = "", compact = false }: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const gradient1 = `${uid}-g1`;
  const gradient2 = `${uid}-g2`;

  const iconCls = compact
    ? "w-8 h-8 sm:w-9 sm:h-9"
    : "w-11 h-11 sm:w-12 sm:h-12";
  const clexivoCls = compact
    ? "text-base sm:text-lg font-bold tracking-tight text-foreground"
    : "text-[2rem] font-bold tracking-tight text-foreground";
  const labsCls = compact
    ? "text-xs sm:text-sm font-medium tracking-wide text-muted-foreground"
    : "text-[1.25rem] font-medium tracking-wide text-muted-foreground";
  const ruleCls = compact ? "h-px mt-0.5" : "h-[2px] mt-1";

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <div className="relative shrink-0">
        <svg
          className={`${iconCls} drop-shadow-lg`}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
            fill={`url(#${gradient1})`}
            stroke={`url(#${gradient2})`}
            strokeWidth="1.5"
          />
          <path
            d="M30 16C26.6863 16 24 18.6863 24 22V26C24 29.3137 26.6863 32 30 32"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="18" cy="24" r="2.5" fill="white" />
          <circle cx="24" cy="18" r="1.5" fill="white" opacity="0.7" />
          <circle cx="24" cy="30" r="1.5" fill="white" opacity="0.7" />
          <defs>
            <linearGradient
              id={gradient1}
              x1="6"
              y1="2"
              x2="42"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient
              id={gradient2}
              x1="6"
              y1="2"
              x2="42"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className={clexivoCls}>CLEXIVO</span>
          <span className={labsCls}>LABS</span>
        </div>
        <div
          className={`w-full max-w-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-transparent rounded-full ${ruleCls}`}
          aria-hidden
        />
      </div>
    </div>
  );
}
