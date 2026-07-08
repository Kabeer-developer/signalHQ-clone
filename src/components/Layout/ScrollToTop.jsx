import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Place this inside <BrowserRouter> in App.jsx, above your <Routes>
// It scrolls to top on every route change, and lets #hash links
// (like /#features) scroll smoothly to that section instead.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Disable the browser's native scroll restoration once, on mount.
  // Without this, Chrome/Firefox try to restore the previous page's
  // scroll offset on route change — if the new page is shorter, you
  // land clamped near the bottom instead of at the top.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (hash) {
      // small delay so the target section exists in the DOM after route change
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;