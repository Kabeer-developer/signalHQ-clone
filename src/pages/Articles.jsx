import { motion } from "framer-motion";
import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/Layout/Footer";

const posts = [
  {
    img: "https://picsum.photos/seed/blog1/700/450",
    title: "Beyond your cloud tax software: the AI prep layer on top",
    date: "Jun 25, 2026",
    tags: ["CPA Workflow & Automation", "AI in Tax & Security"],
  },
  {
    img: "https://picsum.photos/seed/blog2/700/450",
    title: "What practice-management software doesn't do: automating the prep",
    date: "Jun 25, 2026",
    tags: ["Firm Practice Management"],
  },
  {
    img: "https://picsum.photos/seed/blog3/700/450",
    title: "2027 HSA Contribution Limits and HDHP Rules",
    date: "Jun 24, 2026",
    tags: ["Tax Law & Policy Updates", "Blog"],
  },
  {
    img: "https://picsum.photos/seed/blog4/700/450",
    title: "Wyoming Tax Deadlines 2026: What Actually Applies",
    date: "Jun 24, 2026",
    tags: ["State Tax Deadlines"],
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

const Articles = () => {
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
            Articles & Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-gray-400 text-lg"
          >
            Get insights and emerging trends shaping the future of tax
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-14 mt-24"
          >
            {posts.map((p, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={p.img}
                    className="
                      w-full h-64 object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <h2 className="font-bold mt-6 text-xl font-display group-hover:text-purple-200 transition-colors">
                  {p.title}
                </h2>

                <p className="text-gray-500 mt-3">{p.date}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tags.map((t, index) => (
                    <span
                      key={index}
                      className="
                        border border-white/15 bg-white/5
                        px-3 py-1 text-sm rounded-full
                        text-purple-200
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
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

export default Articles;