import { motion } from "framer-motion";
import myPhoto from "../assets/me.png";

const AnimatedPhoto = () => {
  return (
    <div className="flex justify-center items-center relative">
      {/* OUTER GLOW RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="
          absolute w-36 h-36
          border border-dashed border-amber-400/40
          rounded-full
        "
      />

      {/* INNER PHOTO SVG FRAME */}
      <motion.svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        className="relative z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        {/* MASK */}
        <defs>
          <clipPath id="circleView">
            <circle cx="70" cy="70" r="55" />
          </clipPath>
        </defs>

        {/* PHOTO INSIDE SVG */}
        <image
          href={myPhoto}
          width="140"
          height="140"
          clipPath="url(#circleView)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* SVG BORDER */}
        <circle
          cx="70"
          cy="70"
          r="55"
          fill="transparent"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="6 4"
          className="opacity-80"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedPhoto;
