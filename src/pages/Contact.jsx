import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/Layout/Footer";

const fieldClass = `
  mt-3 w-full bg-white/5
  border border-white/15 rounded-lg p-4
  outline-none text-white placeholder:text-white/30
  transition-all duration-300
  focus:border-purple-400/60 focus:bg-white/[0.07]
  focus:shadow-[0_0_0_4px_rgba(168,85,247,0.1)]
`;

const Contact = () => {
  return (
    <>
      <section className="bg-[#02000a] text-white pt-40 pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-24 left-1/4 w-[500px] h-[280px] bg-purple-500/15 blur-[130px] rounded-full" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display">
              Let's connect
            </h1>

            <p className="text-gray-400 mt-8 text-lg max-w-md">
              Have questions? We're here to help. Reach out to us and our
              team will get back to you as soon as possible.
            </p>

            <div className="mt-16">
              <p className="text-gray-400">Email</p>

              <div className="flex items-center gap-3 mt-3">
                <Mail className="text-purple-300" />
                <span>contact@signalshq.io</span>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-400">Follow us</p>

              <motion.div
                whileHover={{ y: -3 }}
                className="
                  mt-4 bg-purple-500/20 w-12 h-12 rounded-lg
                  flex items-center justify-center
                  border border-white/10
                  transition-colors duration-300
                  hover:bg-purple-500/30 hover:border-purple-400/40
                  cursor-pointer
                "
              >
                <FaLinkedin size={22} />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="
              bg-white/5 backdrop-blur-xl
              border border-white/10 rounded-2xl
              p-10 space-y-6
              shadow-[0_20px_80px_rgba(124,58,237,0.1)]
            "
          >
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input className={fieldClass} placeholder="Enter your Name" />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input className={fieldClass} placeholder="Enter your Email" />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="6"
                className={fieldClass}
                placeholder="Enter your message"
              />
            </div>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="
                bg-[#ffecef] text-black font-bold
                px-8 py-4 rounded-xl
                transition-shadow duration-300
                hover:shadow-[0_0_30px_rgba(255,236,239,0.3)]
              "
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Testimonials />
      <SecurityPreview />
      <CTA />
      <Footer />
    </>
  );
};

export default Contact;