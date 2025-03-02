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
                src="/assets/photo.jpg"
                alt="Profile Image"
                className="img-fluid rounded shadow-lg"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                I’ve always been interested in{" "}
                <strong>art and creativity</strong> from a young age. At the
                same time, I enjoyed <strong>math and coding</strong>, which
                challenged me to think logically and improve my problem-solving
                skills.
              </p>

              <p className="about-wrapper__info-text">
                When I came across <strong>web development</strong>, it felt
                like the perfect mix of <strong>creativity and logic</strong>. I
                love designing intuitive user experiences while building
                scalable, high-performance applications. Every project I work on
                excites me because it pushes me to{" "}
                <strong>learn, experiment, and grow</strong>.
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
