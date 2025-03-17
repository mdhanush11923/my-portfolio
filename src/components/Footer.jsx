import React from "react";

export default function Footer() {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/dhanush--m/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin fa-inverse"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/mdhanush11923"
            target="_blank"
          >
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>
        <hr />

        <p className="footer__text">
          © 2021 - Template developed by
          <a
            rel="noreferrer"
            href="https://github.com/cobiwave"
            target="_blank"
          >
            Jacobo Martínez
          </a>
        </p>
      </div>
    </footer>
  );
}
