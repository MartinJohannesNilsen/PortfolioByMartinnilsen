import { useEffect, useState } from "react";
import $ from "jquery";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      const calc =
        (window.scrollY / ($(document).height()! - $(window).height()!)) * 100;
      const percentage = calc < 0 ? 0 : calc > 100 ? 100 : calc;
      setScrollPosition(percentage);
    };
    window.addEventListener("scroll", updatePosition, { passive: true });
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
