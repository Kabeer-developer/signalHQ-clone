import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-[#02000a] text-white py-40 px-6 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[320px]
          bg-purple-500/20 blur-[130px] rounded-full
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative max-w-3xl mx-auto text-center
          border border-white/10 bg-white/5 backdrop-blur-xl
          rounded-3xl px-10 py-20
          shadow-[0_20px_80px_rgba(124,58,237,0.15)]
        "
      >
        <span className="relative flex h-2 w-2 mx-auto mb-8">
          <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 animate-ping-slow" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
        </span>

        <h2 className="text-5xl font-bold max-w-3xl mx-auto font-display leading-tight">
          Get hands-on with AI-powered
          <br />
          tax automation today.
        </h2>

        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/demo"
            className="
              inline-block mt-12
              bg-[#ffecef] text-black
              px-8 py-4
              rounded-xl font-bold
              transition-shadow duration-300
              hover:shadow-[0_0_40px_rgba(255,236,239,0.35)]
            "
          >
            Book a Demo →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;