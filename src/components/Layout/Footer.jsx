import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Use Case", href: "/#usecase" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Articles & Insights", to: "/blog" },
      { label: "Downloads", to: "/resources" },
      { label: "Security", to: "/security" },
      { label: "Evaluate Your Firm", to: "/evaluate" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy policy", to: "/privacy" },
      { label: "Terms conditions", to: "/terms" },
      { label: "Contact us", to: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#02000a] text-white px-6 md:px-10 pt-24 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-500/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-10"
      >
        {/* LOGO */}
        <div>
          <Link
            to="/"
            className="flex items-center text-2xl font-bold font-display"
          >
            <span className="relative mr-2 grid place-items-center w-6 h-6">
              <span className="absolute inset-0 rounded-full bg-purple-500/40 animate-ping-slow" />
              <span className="relative text-purple-400 text-2xl leading-none">
                ✣
              </span>
            </span>
            SignalsHQ
          </Link>

          <p className="text-gray-400 mt-5">
            Smart Automation Built for Scaling Tax Firms.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 text-sm text-white/80 hover:text-white transition-colors relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-purple-300 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* LINK COLUMNS */}
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-gray-400 text-sm uppercase tracking-widest">
              {col.title}
            </h3>

            <div className="flex flex-col mt-5 gap-4">
              {col.links.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-white/80 hover:text-white transition-colors w-fit relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-purple-300 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors w-fit relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-purple-300 transition-all duration-300 group-hover:w-full" />
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </motion.div>

      <p className="relative text-center text-gray-500 mt-20 border-t border-white/10 pt-8 max-w-7xl mx-auto">
        © 2026 SignalsHQ.
      </p>
    </footer>
  );
};

export default Footer;