import { Lock, Radio, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <Lock size={22} />,
    title: "End-to-end Encryption",
    text: "SOC 2 Type II",
  },
  {
    icon: <Radio size={22} />,
    title: "Monitoring Systems",
    text: "24/7 intrusion detection Quarterly scans & annual pen tests",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Access Control",
    text: "Multi-Factor Authentication Role-based permissions",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "Regulation Compliant",
    text: "TLS 256-bit in transit & at rest",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const SecurityPreview = () => {
  return (
    <section className="bg-[#02000a] text-white py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl font-bold font-display leading-tight">
            Secure Conversations.
            <br />
            Smarter Tax Strategies.
          </h2>

          <p className="text-gray-400 mt-6">
            Built on industry-leading standards to keep your clients' data
            safe and your firm audit-ready.
          </p>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-8
              bg-[#ffecef] text-black
              px-6 py-3
              rounded-lg font-semibold
              transition-shadow duration-300
              hover:shadow-[0_0_30px_rgba(255,236,239,0.3)]
            "
          >
            Find more
          </motion.button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-5"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="
                bg-white/5 backdrop-blur-sm
                border border-white/10
                rounded-xl p-6
                transition-all duration-300
                hover:border-purple-400/30 hover:bg-white/[0.07]
                hover:shadow-[0_16px_40px_rgba(124,58,237,0.15)]
              "
            >
              <div className="text-purple-300 w-11 h-11 rounded-lg bg-purple-500/10 flex items-center justify-center">
                {card.icon}
              </div>

              <h3 className="font-bold mt-5 font-display">{card.title}</h3>

              <p className="text-purple-300/80 text-sm mt-3">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityPreview;