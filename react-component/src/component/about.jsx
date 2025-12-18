import React from "react";

function About() {
  return (
    <section className="about">
      <div className="heading">
        <h1 className="aboutHeading">About Us</h1>
        <p className="aboutText">This is about component paragraph</p>
      </div>

      <div className="bottom">
        <div className="aboutCard1">
          <h2 className="aboutCardHeading">Intro</h2>
          <p className="aboutCardText">
            We are passionate about creating immersive digital experiences,
            carefully crafted to bring elegance, simplicity, and joy to every
            interaction.
          </p>
          <button>Learn More</button>
        </div>

        <div className="aboutCard1">
          <h2 className="aboutCardHeading">Mission</h2>
          <p className="aboutCardText">
            Our mission is to craft luxurious, memorable digital experiences by
            blending creativity, technology, and warmth.
          </p>
          <button>Learn More</button>
        </div>
        <div className="aboutCard1">
          <h2 className="aboutCardHeading">Vision</h2>
          <p className="aboutCardText">
            Our vision is to create meaningful digital experiences that feel
            timeless, intuitive, and beautifully designed for everyone.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
