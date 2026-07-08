import { Lock, Radio, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import Testimonials from "../sections/home/Testimonials";
import CTA from "../sections/home/CTA";
import Footer from "../components/layout/Footer";

const security = [
  { icon: <Lock size={22} />, title: "End-to-end Encryption", desc: "SOC 2 Type II" },
  {
    icon: <Radio size={22} />,
    title: "Monitoring Systems",
    desc: "24/7 intrusion detection. Quarterly scans & annual pen tests",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Access Control",
    desc: "Multi-Factor Authentication & Role-based permissions",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "Regulation Compliant",
    desc: "TLS 256-bit in transit & at rest",
  },
];

const privacy = [
  {
    title: "No AI Training on Your Data",
    desc: "Your data and your clients' data is never used to train, fine-tune, or improve AI models. Period.",
  },
  {
    title: "No Data Retention by Partners",
    desc: "Our AI technology partners never store or train on your client data.",
  },
  {
    title: "No Humans in the Loop",
    desc: "Only your team has access to your data. We never use manual human review on our side.",
  },
  {
    title: "Secure Document Processing",
    desc: "Documents are processed through our proprietary server, redacted, and securely stored within AWS infrastructure.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Security = () => {
  return (
    <>
      <section className="bg-[#02000a] text-white pt-40 pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-purple-500/15 blur-[130px] rounded-full" />

        <div className="max-w-6xl mx-auto relative">
          {/* Heading */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-bold font-display"
            >
              Security & Compliance You Can Trust
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg"
            >
              We safeguard your clients' most sensitive financial data with
              enterprise-grade security and rigorous compliance protocols.
            </motion.p>
          </div>

          {/* Security Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-4 gap-6 mt-20"
          >
            {security.map((s, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                className="
                  bg-white/5 backdrop-blur-sm border border-white/10
                  rounded-xl p-8
                  transition-all duration-300
                  hover:border-purple-400/30 hover:bg-white/[0.07]
                  hover:shadow-[0_16px_40px_rgba(124,58,237,0.15)]
                "
              >
                <div className="text-purple-300 w-11 h-11 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  {s.icon}
                </div>

                <h3 className="font-bold mt-6 font-display">{s.title}</h3>

                <p className="text-purple-300/80 mt-3 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Privacy */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 mt-24"
          >
            {privacy.map((p, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                className="
                  bg-white/5 backdrop-blur-sm border border-white/10
                  rounded-xl p-8
                  transition-all duration-300
                  hover:border-purple-400/30
                  hover:shadow-[0_16px_40px_rgba(124,58,237,0.15)]
                "
              >
                <h3 className="text-2xl font-bold font-display">{p.title}</h3>
                <p className="text-gray-400 mt-5">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Security;