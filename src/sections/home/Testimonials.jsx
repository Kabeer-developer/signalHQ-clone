import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Research used to be a black hole. Now, I just type the question and get a citable IRS answer in seconds.",
    person: "ST",
    role: "Tax Manager",
    company: "Sama Tributa",
  },
  {
    text: "80% faster first drafts. What used to take us two days is now done in two hours.",
    person: "NT",
    role: "Managing Partner",
    company: "Northbridge Tax Advisory",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Testimonials = () => {
  return (
    <section className="bg-[#02000a] text-white py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/20 px-5 py-2 rounded-full text-xs tracking-widest text-purple-200"
        >
          • CUSTOMER STORIES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold mt-10 mb-16 font-display"
        >
          Trusted by firms across the board
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="
                relative bg-white/5 backdrop-blur-sm
                border border-white/10 rounded-xl
                p-8 text-left
                transition-all duration-300
                hover:border-purple-400/30
                hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]
              "
            >
              <Quote
                className="text-purple-400/30 mb-4"
                size={32}
                fill="currentColor"
              />

              <p className="italic text-white/90 leading-relaxed">
                "{r.text}"
              </p>

              <div className="flex gap-4 mt-8">
                <div
                  className="
                    w-10 h-10 rounded-full
                    bg-gradient-to-br from-purple-400 to-purple-600
                    flex items-center justify-center
                    text-sm font-semibold
                  "
                >
                  {r.person}
                </div>

                <div>
                  <h4 className="font-medium">{r.role}</h4>
                  <p className="text-purple-300 text-sm">{r.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;