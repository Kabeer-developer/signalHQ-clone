import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/layout/Footer";

const plans = [
  {
    icon: "🔍",
    title: "Tax Assist",
    desc: "AI-powered tax research and Q&A that gives you IRS-cited answers in seconds.",
    features: [
      "Instant tax research with direct IRS citations",
      "Federal & SALT coverage across all 50 states",
      "Court ruling references",
      "Context-aware answers",
      "Natural language queries",
      "Exportable memos",
    ],
  },
  {
    icon: "📂",
    title: "Client Organizer",
    desc: "Automated document intake and extraction that turns stacks of PDFs into structured searchable client data.",
    features: [
      "AI document intake; drag, drop, done",
      "K-1,1099s,W-2 auto-extraction with 95%+ accuracy",
      "Automated binders",
      "360° client overview",
      "Smart categorization",
      "Audit-ready trail",
    ],
    popular: true,
  },
  {
    icon: "🧠",
    title: "Client Review",
    desc: "Proactive advisory insights that surface tax savings and generate strategy.",
    features: [
      "Current-year category rollups",
      "Comprehensive schedule summaries",
      "Multi-entity support:1040,1065,1120-S",
      "Auto-Generated Workpapers",
      "Anomaly alerts",
      "AI-drafted returns; 70% faster prep",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Pricing = () => {
  return (
    <>
      <section className="bg-[#02000a] text-white min-h-screen px-6 pt-40 pb-28 relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-purple-500/15 blur-[130px] rounded-full" />

        <div className="max-w-6xl mx-auto text-center relative">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/20 rounded-full px-5 py-2 text-xs tracking-widest text-purple-300"
          >
            • PRICING
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-bold mt-10 font-display"
          >
            Simple Subscription to Scale your Practice
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 mt-20 items-start"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                className={`
                  relative rounded-2xl p-8 text-left
                  border backdrop-blur-sm
                  transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-white/[0.07] border-purple-400/40 shadow-[0_20px_70px_rgba(124,58,237,0.25)]"
                      : "bg-white/5 border-white/10 hover:border-purple-400/30 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
                  }
                `}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 bg-[#ffecef] text-black text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="text-3xl">{plan.icon}</div>

                <h2 className="text-2xl font-bold mt-8 font-display">
                  {plan.title}
                </h2>

                <p className="text-gray-400 mt-4">{plan.desc}</p>

                <hr className="border-white/10 my-8" />

                <ul className="space-y-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2.5">
                      <Check size={18} className="text-purple-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} className="mt-10">
                  <Link
                    to="/demo"
                    className="
                      block w-full text-center
                      bg-[#ffecef] text-black py-3 rounded-lg font-bold
                      transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,236,239,0.3)]
                    "
                  >
                    Talk to Sales
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-gray-500 mt-14">
            All plans include SOC 2 Type II compliance, E2E encryption, and
            dedicated onboarding.
          </p>
        </div>
      </section>

      <Testimonials />
      <SecurityPreview />
      <CTA />
      <Footer />
    </>
  );
};

export default Pricing;