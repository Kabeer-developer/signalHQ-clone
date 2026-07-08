import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const products = [
  {
    tag: "TAX ASSIST",
    title: "Instant, reliable answers to your tax questions.",
    points: [
      "Direct IRS citations & court ruling references",
      "Federal & SALT coverage across all 50 states",
      "Context-aware answers",
      "Exportable memos for client-ready documentation",
    ],
    img: "https://imgs.search.brave.com/ZplkP7KmRIh2tTibv9Fy6KvXjOUKZBt3kjw3WvsrIyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudGF4YXNzaXN0/ZnJhbmNoaXNlLmNv/LnVrL2ZpbGUtdXBs/b2Fkcy9nY3MvMTc0/MzQzMjc4M18yMjA3/MDQtdGF4YXNzaXN0/LTE0NjU0LnBuZw",
  },
  {
    tag: "CLIENT ORGANIZER",
    title: "Client Data in One Place. Structured. Searchable.",
    points: [
      "AI document intake; drag, drop, done",
      "K-1, 1099s, W-2s auto-extraction at 95%+ accuracy",
      "360° client overview with smart categorization",
      "Automated binders",
    ],
    img: "https://imgs.search.brave.com/9MC0HXPDdzJ_aWxQrjah9PwEaMd8zVVNZp3C61Won9w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2VzdGlvbi1kZS1j/b250YWN0LmZyL2lt/Zy9CbG9nLzYtb3Jn/YW5pc2VyLXNvbi1m/aWNoaWVyLWNsaWVu/dC5qcGc",
  },
  {
    tag: "CLIENT REVIEW",
    title: "Get workpaper insight. Zero Manual Grind.",
    points: [
      "Current-year category rollups",
      "Multi-entity support for 1040, 1065, 1120-S",
      "Auto-Generated Workpapers",
      "AI-drafted first-pass returns; 70% faster prep",
    ],
    img: "https://imgs.search.brave.com/2Py7KQ7YWjhIWLwKRlOEwH9Wg18da96suQC2eJGFS9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg2LzY0/L2E1Lzg2NjRhNWVj/ZGU3M2NlNzcwYTRl/NzM5YThiM2UwYmI5/LmpwZw",
    soon: true,
  },
];

const Product = () => {
  return (
    <section id="features" className="bg-[#02000a] text-white py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/20 px-5 py-2 rounded-full text-xs tracking-widest text-purple-200"
        >
          • PRODUCT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold mt-10 mb-20 font-display"
        >
          Cut research and preparation hours with AI-driven automation.
        </motion.h2>

        <div className="space-y-10">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="
                group grid md:grid-cols-2
                border border-white/10 rounded-2xl overflow-hidden
                bg-[#090512]/80 backdrop-blur-sm
                min-h-[300px]
                transition-all duration-500
                hover:border-purple-400/30
                hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]
              "
            >
              {/* text side */}
              <div
                className={`p-12 text-left flex flex-col justify-center ${
                  index === 1 && "md:order-2"
                }`}
              >
                <p className="text-purple-300 text-xs tracking-widest mb-5">
                  • {item.tag}
                </p>

                <h3 className="text-2xl font-bold mb-6 font-display">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.points.map((p, i) => (
                    <li
                      key={i}
                      className="text-gray-400 flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-purple-400 mt-0.5 shrink-0"
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                {item.soon && (
                  <span className="mt-8 border border-white/20 rounded-full px-4 py-1 w-fit text-sm text-white/70">
                    Coming soon
                  </span>
                )}
              </div>

              {/* image side */}
              <div className="relative flex items-center justify-center bg-black/30 overflow-hidden">
                <div className="absolute w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full" />
                <img
                  src={item.img}
                  className="
                    relative w-72 h-72 object-cover opacity-90 rounded-xl
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;