import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";

const sections = [
  {
    title: "Information We Collect",
    text: "We collect information provided by users including contact details, documents, and usage information required to deliver our services.",
  },
  {
    title: "How We Use Data",
    text: "Your data is used to provide automation services, improve workflows, maintain security, and support your firm.",
  },
  {
    title: "Data Security",
    text: "We use encryption, monitoring systems, and access controls to protect sensitive information.",
  },
  {
    title: "No AI Training",
    text: "Your information is never used to train external AI models.",
  },
  {
    title: "Contact",
    text: "For privacy questions contact us at contact@signalshq.io",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Privacy = () => {
  return (
    <>
      <section className="bg-[#02000a] min-h-screen text-white pt-40 px-6 md:px-8 pb-28 relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="max-w-4xl mx-auto relative">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-bold font-display"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 mt-5"
          >
            Last updated: 2026
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 space-y-6 text-gray-300 leading-8"
          >
            {sections.map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                className="
                  bg-white/5 backdrop-blur-sm border border-white/10
                  rounded-2xl p-8
                  transition-colors duration-300 hover:border-purple-400/20
                "
              >
                <h2 className="text-2xl text-white font-bold font-display">
                  {s.title}
                </h2>
                <p className="mt-4">{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacy;