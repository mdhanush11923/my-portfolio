import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>

          <Project
            title="Pizza Delivery App"
            description="A full-stack pizza delivery app with authentication, ordering, and real-time tracking."
            liveUrl="https://pizza-delivery-lemon.vercel.app/dashboard"
            sourceCodeUrl="https://github.com/mdhanush11923/pizza-delivery-app"
            imageUrl="/assets/project0.png"
          />
        </div>
      </div>
    </section>
  );
}
