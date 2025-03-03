import ScrollReveal from "scrollreveal";

export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

  const sr = ScrollReveal({ reset: false }); // ✅ Create a single instance

  targetElements.forEach(({ element, animation }) => {
    sr.reveal(element, { ...defaultProps, ...animation }); // ✅ Use the instance
  });
}
