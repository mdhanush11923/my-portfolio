
export default function Home() {
  return (
    // <section
    //   id="hero"
    //   className="flex flex-col min-h-screen px-7 font-bold gap-2 justify-center"
    // >
    //   <h1 className="text-6xl text-blackblue">
    //     Hi, my name is{" "}
    //     <span className="bg-gradient-to-r from-primecolor to-secolor bg-clip-text text-transparent">
    //       M Dhanush
    //     </span>
    //     <br />
    //     I&apos;m the Developer you need.
    //   </h1>
    //   <p className="hero-cta load-hidden">
    //     <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
    //       Know more
    //     </a>
    //   </p>
    // </section>
    <div>
      <div id="top"></div>
      <section id="hero" className="jumbotron">
        <div className="container">
          <h1 className="hero-title load-hidden">
            Hi, my name is <span className="text-color-main">M Dhanush</span>
            <br />
            I&apos;m the Developer you need.
          </h1>
          <p className="hero-cta load-hidden">
            <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
              Know more
            </a>
          </p>
        </div>
      </section>
      
    </div>
  );
}