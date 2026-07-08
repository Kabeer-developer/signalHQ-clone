import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Footer from "../components/Layout/Footer";

const steps = ["Time", "Your firm", "The number"];

const Evaluate = () => {
  const [step, setStep] = useState(1);

  const [hours, setHours] = useState({
    collection: 1.25,
    validation: 0.5,
    workpaper: 1.75,
    collab: 0.5,
    prep: 2.5,
    review: 1,
    entry: 0.5,
  });

  const [firm, setFirm] = useState({
    returns: 10000,
    cost: 50,
    revenue: 500,
    growth: 30,
    associates: 2,
    share: 30,
  });

  const total = Object.values(hours).reduce((a, b) => a + b, 0);

  return (
    <>
      <section className="bg-[#02000a] min-h-screen pt-36 px-6 md:px-8 pb-28 text-white relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/15 blur-[130px] rounded-full" />

        {/* STEPS */}
        <div className="relative flex justify-center gap-10 md:gap-20 mb-16">
          {steps.map((label, i) => {
            const n = i + 1;
            const active = step === n;
            const done = step > n;
            return (
              <div key={label} className="flex items-center gap-2">
                <span
                  className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    border transition-colors duration-300
                    ${
                      active || done
                        ? "bg-purple-500 border-purple-500 text-white"
                        : "border-white/20 text-white/40"
                    }
                  `}
                >
                  {n}
                </span>
                <p
                  className={`transition-colors duration-300 ${
                    active ? "font-bold text-purple-200" : "text-white/40"
                  }`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-purple-300 font-bold text-sm tracking-widest">
                  — STEP 1 • DIAGNOSE
                </p>

                <h1 className="text-4xl font-bold mt-3 font-display">
                  How your hours land on one return.
                </h1>

                <div className="mt-10 space-y-4">
                  {Object.keys(hours).map((key) => (
                    <div
                      key={key}
                      className="
                        bg-white/5 backdrop-blur-sm border border-white/10
                        rounded-xl p-5 flex justify-between items-center
                        transition-colors duration-300 hover:border-purple-400/30
                      "
                    >
                      <h3 className="capitalize font-semibold">{key}</h3>

                      <div className="flex items-center gap-5">
                        <button
                          onClick={() =>
                            setHours({ ...hours, [key]: Math.max(0, hours[key] - 0.25) })
                          }
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                          <Minus size={14} />
                        </button>

                        <b className="w-10 text-center">{hours[key]}</b>

                        <button
                          onClick={() => setHours({ ...hours, [key]: hours[key] + 0.25 })}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mt-10 font-display">
                  {total.toFixed(2)} hrs / return
                </h2>

                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setStep(2)}
                  className="
                    mt-8 bg-[#ffecef] text-black px-8 py-3 rounded-xl font-semibold
                    transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,236,239,0.3)]
                  "
                >
                  Next: scale it to your firm →
                </motion.button>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-purple-300 font-bold text-sm tracking-widest">
                  — STEP 2 • SCALE
                </p>

                <h1 className="text-4xl font-bold mt-3 font-display">
                  Now we scale it to your firm.
                </h1>

                <div className="grid grid-cols-2 gap-5 mt-10">
                  {Object.keys(firm).map((key) => (
                    <div
                      key={key}
                      className="
                        bg-white/5 backdrop-blur-sm border border-white/10
                        p-6 rounded-xl transition-colors duration-300 hover:border-purple-400/30
                      "
                    >
                      <p className="capitalize text-white/70">{key}</p>

                      <div className="flex justify-between items-center mt-5">
                        <button
                          onClick={() => setFirm({ ...firm, [key]: firm[key] - 10 })}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                          <Minus size={14} />
                        </button>

                        <b>{firm[key]}</b>

                        <button
                          onClick={() => setFirm({ ...firm, [key]: firm[key] + 10 })}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-10">
                  <button
                    onClick={() => setStep(1)}
                    className="border border-white/15 px-8 py-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    ← Back
                  </button>

                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStep(3)}
                    className="
                      bg-[#ffecef] text-black px-8 py-3 rounded-xl font-semibold
                      transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,236,239,0.3)]
                    "
                  >
                    See what your season costs →
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="text-purple-300 font-bold text-sm tracking-widest">
                  — STEP 3 • RESULTS
                </p>

                <h1 className="text-4xl font-bold mt-3 font-display">
                  Here is where your season goes.
                </h1>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="
                    mt-10 bg-[#0c0715]/80 backdrop-blur-xl
                    border border-white/10 rounded-3xl p-12
                    shadow-[0_20px_80px_rgba(124,58,237,0.2)]
                  "
                >
                  <h2 className="text-5xl font-bold font-display bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent">
                    $520,000
                  </h2>

                  <p className="mt-4 text-gray-400">
                    Estimated annual savings
                  </p>

                  <div className="grid grid-cols-2 gap-5 mt-10">
                    <div>
                      <h2 className="text-2xl font-bold font-display">
                        {total.toFixed(2)}
                      </h2>
                      <p className="text-gray-400 mt-1">Hours Saved</p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold font-display">2.8 hrs</h2>
                      <p className="text-gray-400 mt-1">Per Return</p>
                    </div>
                  </div>
                </motion.div>

                <div className="flex justify-between mt-10">
                  <button
                    onClick={() => setStep(2)}
                    className="border border-white/15 px-8 py-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    ← Back
                  </button>

                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/demo"
                      className="
                        inline-block bg-[#ffecef] text-black px-8 py-3 rounded-xl font-semibold
                        transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,236,239,0.3)]
                      "
                    >
                      Book a workflow review →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Evaluate;