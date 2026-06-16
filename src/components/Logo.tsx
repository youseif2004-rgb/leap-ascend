import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  animated?: boolean;
}

export function Logo({ size = 36, withWordmark = true, animated = true }: LogoProps) {
  const draw = animated
    ? { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 } }
    : { initial: false, animate: { pathLength: 1, opacity: 1 } };

  return (
    <div className="flex items-center gap-3">
      <motion.svg
        width={size} height={size} viewBox="0 0 64 64" fill="none"
        initial={{ rotate: -8, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-label="LEAP"
      >
        <defs>
          <linearGradient id="leap-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a6fff" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <motion.polygon
          points="32,4 56,18 56,46 32,60 8,46 8,18"
          stroke="url(#leap-stroke)" strokeWidth="2" fill="rgba(109,74,255,0.06)"
          {...draw}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M22 40 L32 22 L42 40 M26 36 H38"
          stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
          {...draw}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {[
          [32, 4], [56, 18], [56, 46], [32, 60], [8, 46], [8, 18],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i} cx={cx} cy={cy} r={2.4} fill="#D4AF37"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.85] }}
            transition={{ duration: 1.6, delay: 1.1 + i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
          />
        ))}
      </motion.svg>
      {withWordmark && (
        <span
          className="heading-display gradient-text text-xl tracking-[0.18em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          LEAP
        </span>
      )}
    </div>
  );
}
