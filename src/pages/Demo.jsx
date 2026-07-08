import { useState } from "react";
import Calendar from "react-calendar";
import { AnimatePresence, motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";

const slots = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

const fieldClass = `
  border w-full p-4 rounded-lg
  bg-white/5 border-white/15 text-white
  placeholder:text-white/30 outline-none
  transition-all duration-300
  focus:border-purple-400/60 focus:bg-white/[0.07]
  focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]
`;

const Demo = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [step, setStep] = useState(1);

  return (
    <section className="bg-[#02000a] min-h-screen text-white pt-40 px-6 md:px-8 pb-28 relative overflow-hidden">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/15 blur-[130px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="
          calendar-dark
          relative max-w-6xl mx-auto
          bg-white/5 backdrop-blur-xl
          border border-white/10 rounded-2xl
          p-6 md:p-10
          shadow-[0_20px_80px_rgba(124,58,237,0.15)]
        "
      >
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Calendar */}
              <div>
                <h1 className="text-3xl font-bold mb-8 font-display">
                  Book a Demo
                </h1>

                <Calendar onChange={setDate} value={date} />
              </div>

              {/* Slots */}
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  Select a time
                </h2>

                <div className="space-y-4">
                  {slots.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setTime(item)}
                      className={`
                        w-full border rounded-lg p-4
                        transition-all duration-300
                        ${
                          time === item
                            ? "bg-[#ffecef] text-black border-[#ffecef]"
                            : "border-white/15 hover:border-purple-400/40 hover:bg-white/5"
                        }
                      `}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ y: time ? -3 : 0 }}
                  whileTap={{ scale: time ? 0.97 : 1 }}
                  disabled={!time}
                  onClick={() => setStep(2)}
                  className="
                    mt-10
                    bg-[#ffecef] text-black
                    px-8 py-3 rounded-lg font-semibold
                    disabled:opacity-30 disabled:cursor-not-allowed
                    transition-all duration-300
                    enabled:hover:shadow-[0_0_30px_rgba(255,236,239,0.3)]
                  "
                >
                  Next
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl mx-auto"
            >
              <h1 className="text-3xl font-bold font-display">
                Enter Details
              </h1>

              <p className="mt-3 text-gray-400">
                {date.toDateString()} at {time}
              </p>

              <div className="space-y-5 mt-10">
                <input placeholder="Your name *" className={fieldClass} />
                <input placeholder="Email address *" className={fieldClass} />
                <input
                  placeholder="What is this meeting about? *"
                  className={fieldClass}
                />
                <textarea
                  rows="5"
                  placeholder="Please share anything that will help prepare for our meeting."
                  className={fieldClass}
                />
                <input placeholder="Add guests" className={fieldClass} />

                <p className="text-sm text-gray-500">
                  By proceeding, you agree to Cal.com's Terms and Privacy
                  Policy.
                </p>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="border border-white/15 px-8 py-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Back
                  </button>

                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      bg-[#ffecef] text-black px-8 py-3
                      rounded-lg font-semibold
                      transition-shadow duration-300
                      hover:shadow-[0_0_30px_rgba(255,236,239,0.3)]
                    "
                  >
                    Confirm
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* dark re-skin for react-calendar's default light theme */}
      <style>{`
        .calendar-dark .react-calendar {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 1rem;
          font-family: inherit;
          color: white;
        }
        .calendar-dark .react-calendar__navigation button {
          color: white;
          font-weight: 600;
        }
        .calendar-dark .react-calendar__navigation button:enabled:hover,
        .calendar-dark .react-calendar__navigation button:enabled:focus {
          background: rgba(255,255,255,0.08);
          border-radius: 0.5rem;
        }
        .calendar-dark .react-calendar__month-view__weekdays {
          color: rgba(255,255,255,0.4);
          font-size: 0.75rem;
          text-transform: uppercase;
        }
        .calendar-dark .react-calendar__month-view__weekdays abbr {
          text-decoration: none;
        }
        .calendar-dark .react-calendar__tile {
          color: white;
          border-radius: 0.5rem;
          padding: 0.75rem 0.5rem;
        }
        .calendar-dark .react-calendar__tile:enabled:hover,
        .calendar-dark .react-calendar__tile:enabled:focus {
          background: rgba(168,85,247,0.15);
        }
        .calendar-dark .react-calendar__tile--now {
          background: rgba(255,255,255,0.06);
        }
        .calendar-dark .react-calendar__tile--active {
          background: #ffecef !important;
          color: black !important;
          font-weight: 700;
        }
        .calendar-dark .react-calendar__month-view__days__day--neighboringMonth {
          color: rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
};

export default Demo;