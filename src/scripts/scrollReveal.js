import ScrollReveal from "scrollreveal";

export default function initScrollReveal(targetElements, defaultProps) {
  if (typeof window === "undefined" || !targetElements.length) return;

  const sr = ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    sr.reveal(element, Object.assign({}, defaultProps, animation));
  });
}
