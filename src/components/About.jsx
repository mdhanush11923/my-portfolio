import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <Image
                src="/assets/profail2.png"
                alt="Profile Image"
                className="img-fluid rounded shadow-lg"
                width={300}
                height={300}
                y
                priority
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text font-montserrat">
                I&apos;ve always been a creative person. Sketching random
                things, designing weird stuff that made no sense — but I loved
                it;
              </p>

              <p className="about-wrapper__info-text font-montserrat">
                At the same time, I was naturally curious about how things work.
                I enjoyed finding my own solutions to problems instead of
                blindly following those boring school-taught methods everyone
                memorized;
              </p>

              <p className="about-wrapper__info-text font-montserrat">
                When I discovered <strong>web development</strong>, it just
                clicked — the perfect blend of{" "}
                <strong>creativity and logic</strong>;
              </p>

              <p className="about-wrapper__info-text font-montserrat">
                Since then, I’ve been hooked. Every project feels like an
                opportunity to
                <strong>
                  {" "}
                  create, learn, and push myself to become better
                </strong>{" "}
                — both as a developer and a problem solver;
              </p>

              <div className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="/assets/resume.pdf"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
