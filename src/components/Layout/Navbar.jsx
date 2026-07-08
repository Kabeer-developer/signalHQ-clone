import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Use Case", href: "/#usecase" },
  { label: "Security", to: "/security" },
];

const resourceLinks = [
  { label: "Articles & Insights", to: "/blog" },
  { label: "Downloads", to: "/resources" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3 px-4">
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          w-full max-w-7xl
          flex items-center justify-between
          rounded-2xl
          px-6 md:px-8
          transition-all duration-500 ease-out
          ${
            scrolled
              ? "h-16 bg-[#0c0715]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(124,58,237,0.15)]"
              : "h-24 bg-transparent border border-transparent"
          }
        `}
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center text-white text-2xl font-semibold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="relative mr-2.5 grid place-items-center w-7 h-7">
            <span className="absolute inset-0 rounded-full bg-purple-500/40 animate-ping-slow" />
            <span className="relative text-purple-400 text-2xl leading-none">
              ✣
            </span>
          </span>
          SignalsHQ
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-9 text-white/80 font-medium text-[15px]">
          {navLinks.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}

          {/* RESOURCES DROPDOWN */}
          <div className="relative group py-4">
            <button className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              Resources
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div
              className="
                absolute top-full left-1/2 -translate-x-1/2
                pt-3
                opacity-0 invisible translate-y-1
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-300 ease-out
              "
            >
              <div
                className="
                  w-60 p-2 rounded-2xl
                  bg-[#0c0715]/95 backdrop-blur-xl
                  border border-white/10
                  shadow-[0_16px_48px_rgba(0,0,0,0.5)]
                "
              >
                {resourceLinks.map((r) => (
                  <Link
                    key={r.label}
                    to={r.to}
                    className="
                      block px-4 py-3 rounded-xl text-sm text-white/80
                      hover:text-white hover:bg-white/5
                      transition-colors
                    "
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavItem label="Contact" to="/contact" />
        </div>

        {/* CTA + MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            to="/demo"
            className="
              hidden sm:inline-flex items-center
              bg-[#ffecef] text-black font-semibold
              px-5 py-2.5 md:px-6 md:py-3
              rounded-xl text-sm md:text-[15px]
              transition-all duration-300
              hover:bg-white hover:shadow-[0_0_24px_rgba(255,236,239,0.4)]
              hover:-translate-y-0.5
            "
          >
            Book a Demo →
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              md:hidden absolute top-[88px] left-4 right-4
              rounded-2xl p-6
              bg-[#0c0715]/95 backdrop-blur-xl
              border border-white/10
              shadow-[0_16px_48px_rgba(0,0,0,0.5)]
              flex flex-col gap-1
            "
          >
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-white/85 hover:text-white py-3 text-base font-medium border-b border-white/5 last:border-0"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/85 hover:text-white py-3 text-base font-medium border-b border-white/5"
                >
                  {link.label}
                </a>
              )
            )}
            {resourceLinks.map((r) => (
              <Link
                key={r.label}
                to={r.to}
                className="text-white/85 hover:text-white py-3 text-base font-medium border-b border-white/5"
              >
                {r.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-white/85 hover:text-white py-3 text-base font-medium border-b border-white/5"
            >
              Contact
            </Link>

            <Link
              to="/demo"
              className="
                mt-4 text-center
                bg-[#ffecef] text-black font-semibold
                px-6 py-3.5 rounded-xl
                hover:bg-white transition
              "
            >
              Book a Demo →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavItem = ({ label, to, href }) => {
  const content = (
    <span className="relative group/link py-4 inline-flex items-center">
      {label}
      <span
        className="
          absolute left-0 -bottom-0.5 h-px w-0
          bg-gradient-to-r from-purple-400 to-purple-200
          transition-all duration-300 ease-out
          group-hover/link:w-full
        "
      />
    </span>
  );

  return to ? (
    <Link to={to} className="hover:text-white transition-colors">
      {content}
    </Link>
  ) : (
    <a href={href} className="hover:text-white transition-colors">
      {content}
    </a>
  );
};

export default Navbar;