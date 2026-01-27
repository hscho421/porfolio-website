import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: false,
      wheelMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis to window for scroll-to functionality
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

// Helper function to scroll to element
export function scrollToElement(elementId: string, offset: number = -80) {
  const element = document.getElementById(elementId);
  if (element) {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(element, { offset });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
