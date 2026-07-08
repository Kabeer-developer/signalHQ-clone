import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/Layout/Footer";

const resources = [
  {
    img: "https://picsum.photos/seed/res1/700/450",
    title: "Post–Tax Season Debrief Template",
    date: "Apr 22, 2026",
  },
  {
    img: "https://picsum.photos/seed/res2/700/450",
    title: "2026 Tax Strategies Workbook",
    date: "Oct 15, 2025",
  },
  {
    img: "https://picsum.photos/seed/res3/700/450",
    title: "2025–2028 Tax Strategy Guide for Individuals and Owners",
    date: "Oct 15, 2025",
  },
  {
    img: "https://picsum.photos/seed/res4/700/450",
    title: "2026 Individual IRS Inflation Adjustments Guide",
    date: "Oct 15, 2025",
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

const Downloads = () => {
  return (
    <>
      <section className="bg-[#02000a] text-white pt-40 px-6 md:px-10 pb-28 relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-purple-500/15 blur-[130px] rounded-full" />

        <div className="max-w-6xl mx-auto relative">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-bold font-display"
          >
            Knowledge Hub
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-gray-400 text-lg"
          >
            Get instant access to high quality CPA resources.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-14 mt-24"
          >
            {resources.map((res, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={res.img}
                    className="
                      w-full h-64 object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute inset-0 bg-black/40 opacity-0
                      group-hover:opacity-100 transition-opacity duration-300
                      flex items-center justify-center
                    "
                  >
                    <div className="bg-[#ffecef] text-black rounded-full p-4">
                      <Download size={22} />
                    </div>
                  </div>
                </div>

                <h2 className="font-bold mt-6 text-xl font-display group-hover:text-purple-200 transition-colors">
                  {res.title}
                </h2>

                <p className="text-gray-500 mt-4">{res.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <SecurityPreview />
      <CTA />
      <Footer />
    </>
  );
};

export default Downloads;