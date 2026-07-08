import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="bg-[#02000a] px-6 py-20 flex justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-500/15 blur-[130px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative max-w-5xl w-full h-[500px]
          bg-[#15101f]
          rounded-3xl
          border border-white/10
          shadow-[0_30px_100px_rgba(124,58,237,0.2)]
          overflow-hidden
        "
      >
        <video className="w-full h-full object-cover" controls>
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};

export default VideoSection;