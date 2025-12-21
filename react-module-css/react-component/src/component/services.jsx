import React from "react";

function Services() {
  return (
    <section className="services-creamy">
      <div className="services-heading">
        <h1>Our Services</h1>
        <p>
          We offer thoughtfully designed digital solutions, blending elegance,
          simplicity, and functionality to create memorable experiences.
        </p>
      </div>

      <div className="services-container">
        <div className="service-card-creamy">
          <h2>UI / UX Design</h2>
          <p>Clean, intuitive interfaces that delight users and enhance engagement.</p>
        </div>

        <div className="service-card-creamy">
          <h2>Web Development</h2>
          <p>Responsive, fast, and scalable websites built with modern technologies.</p>
        </div>

        <div className="service-card-creamy">
          <h2>Brand Identity</h2>
          <p>Elegant visual identity and branding that reflects your values and vision.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
