import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // If there's a hash, try to scroll to the element
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          // Add offset for fixed header
          const headerHeight = 80; // Approximate header height
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
          return;
        }
      }
      // Otherwise, smooth scroll to top on route change
      window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}

export default ScrollToTop;


