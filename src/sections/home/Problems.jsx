import { motion } from "framer-motion";

const problems = [
  "Review queue is jammed again",
  "W-2s and 1099s everywhere - help!",
  "K-1s are slowing everything down",
  "What's the nexus rule in California?",
  "We're double-entering the same data!",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatOffsets = [0, 6, -5, 8, -4];

const Problems = () => {
  return (
    <section className="bg-[#02000a] py-16 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto"
      >
        {problems.map((text, i) => (
          <motion.div
            key={i}
            variants={item}
            animate={{ y: [0, floatOffsets[i], 0] }}
            transition={{
              y: {
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              },
            }}
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/5 backdrop-blur-sm text-white
              px-6 py-4 rounded-full
              border border-white/10
              transition-colors duration-300
              hover:border-purple-400/40 hover:bg-white/10
            "
          >
            {text}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Problems;