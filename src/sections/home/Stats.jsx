import { motion } from "framer-motion";

const data = [
  { num: "4+ hrs", text: "Time saved" },
  { num: "2X", text: "Advisory Revenue" },
  { num: "95%+", text: "Client Satisfaction" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Stats = () => {
  return (
    <section className="bg-[#02000a] text-white text-center px-6 py-24 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl font-bold max-w-4xl mx-auto font-display leading-tight"
      >
        Cut research and preparation hours with AI-driven automation.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg"
      >
        One reliable layer for authoritative answers, automated intake and
        extraction, and streamlined prep to help your firm cut busy-season
        grind and redirect time to advisory.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-x-20 gap-y-10 mt-16"
      >
        {data.map((stat, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative px-6"
          >
            {index !== 0 && (
              <span className="hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 h-14 w-px bg-white/10" />
            )}

            <h3 className="text-5xl font-bold font-display bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent">
              {stat.num}
            </h3>

            <p className="text-gray-400 mt-2">{stat.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;