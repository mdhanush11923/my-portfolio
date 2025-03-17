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
            imageUrl="/assets/project-zero.png"
          />

          <Project
            title="Snack Squad"
            description="A Jetpack Compose-based Android app for snack delivery, featuring an intuitive UI, order tracking, and seamless user experience."
            liveUrl="" // No live URL since it's a mobile app
            sourceCodeUrl="https://github.com/mdhanush11923/Snack-Squad"
            imageUrl="/assets/project1.png"
          />

          <Project
            title="Face Recognition Brain"
            description="A full-stack web application built from scratch with authentication and advanced face detection capabilities, developed through the Zero to Mastery Academy."
            liveUrl="" // No live URL since it's a mobile app
            sourceCodeUrl="https://github.com/mdhanush11923/Snack-Squad"
            imageUrl="/assets/project2.png"
          />
        </div>
      </div>
    </section>
  );
}
