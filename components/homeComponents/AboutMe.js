import { Container } from "react-bootstrap";

import { colorHeaderVariants } from "../../assets/animations/variants";
import { MyTitle } from "../../assets/reausableComponents/MyTags";

const AboutMe = () => {
  return (
    <div id="about" className="aboutme-container bg-white">
      <MyTitle variants={colorHeaderVariants} text="About Me" />
      <Container>
        <div className="p-0 text-center md-mx-5 mx-0 about-me-text text-dark">
          <p>
            Hi there! I'm <span className="font-weight-bold">Roei</span>, a
            highly motivated and results-oriented{" "}
            <span className="font-weight-bold">Full Stack Developer</span> with
            over 4 years of experience building dynamic{" "}
            <span className="font-weight-bold">web applications</span> and
            user-friendly interfaces. I have a proven ability to manage projects
            from ideation to deployment, ensuring scalability and performance.
            I'm proficient in <span className="font-weight-bold">React</span>,{" "}
            <span className="font-weight-bold">Node.js</span>, and the{" "}
            <span className="font-weight-bold">MERN stack</span>, as well as in{" "}
            <span className="font-weight-bold">.NET</span>,{" "}
            <span className="font-weight-bold">C#</span>,{" "}
            <span className="font-weight-bold">Java</span>, and{" "}
            <span className="font-weight-bold">C++</span>. I'm passionate about
            leveraging technology to create impactful applications and thrive in
            a fast-paced environment.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
