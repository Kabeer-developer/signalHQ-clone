import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      className="
      min-h-screen
      bg-[#02000a]
      text-white
      flex flex-col justify-center items-center
      text-center
      px-6
      pt-32
      relative
      overflow-hidden
      "
    >
      {/* background glow — breathing, not static */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute w-[800px] h-[320px]
          bg-purple-300/20 blur-[120px] rounded-full
        "
      />
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="
          absolute bottom-0 w-[500px] h-[260px]
          bg-[#ffecef]/10 blur-[110px] rounded-full
        "
      />

      {/* faint signal grid — reinforces "infrastructure" without shouting it */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center"
      >
        {/* eyebrow badge */}
        <motion.div
          variants={item}
          className="
            flex items-center gap-3
            border border-white/10 bg-white/5 backdrop-blur-sm
            rounded-full px-5 py-2 mb-10
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 animate-ping-slow" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
          </span>
          <p className="uppercase tracking-[4px] text-purple-200 text-xs font-medium">
            AI Infrastructure For Tax
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-bold max-w-5xl leading-tight font-display"
        >
          Powering Tax Experts.
          <br />
          <span className="bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Fueling Firm Growth.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={item} className="text-gray-400 text-xl mt-8">
          Smart Automation Built for Scaling Tax Firms
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/demo"
            className="
              inline-block mt-14
              bg-[#ffecef] text-black
              px-10 py-4
              rounded-xl font-bold
              transition-shadow duration-300
              hover:shadow-[0_0_40px_rgba(255,236,239,0.35)]
            "
          >
            Book a Demo →
          </Link>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { delay: 1.2, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 text-white/40"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
};

export default Hero;