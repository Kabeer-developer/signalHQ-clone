import { Calendar, Search, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  {
    icon: <Calendar size={22} />,
    title: "Always Current on Tax Rules",
    desc: "Delivers the latest updates across SALT and Federal taxes directly in your workflow.",
  },
  {
    icon: <Search size={22} />,
    title: "Turn Raw Data into Insight",
    desc: "Uses AI to locate, organize, and surface client insights hidden in client documents.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Surface Savings & Risks",
    desc: "Analyze your client data to unlock opportunities and spot risks proactively.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const UseCase = () => {
  return (
    <section id="usecase" className="bg-[#02000a] text-white py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/20 rounded-full px-5 py-2 text-xs tracking-widest text-purple-200"
        >
          • USE CASE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold mt-10 mb-16 font-display"
        >
          Focus on high-value client outcomes.
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="
                bg-white/5 backdrop-blur-sm
                border border-white/10 rounded-xl
                p-8 text-left
                transition-all duration-300
                hover:border-purple-400/30 hover:bg-white/[0.07]
                hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]
              "
            >
              <div className="bg-purple-400/20 text-purple-300 w-fit p-3 rounded-lg mb-8">
                {c.icon}
              </div>

              <h3 className="font-bold mb-3 font-display">{c.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCase;