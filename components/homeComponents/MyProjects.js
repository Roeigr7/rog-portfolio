import { Row, Container } from "react-bootstrap";

import ProjectImage from "./ProjectImage";
import { whiteHeaderVariants } from "../../assets/animations/variants";
import { MyTitle } from "../../assets/reausableComponents/MyTags";
import ShapeMyprojects from "../../assets/shapes/ShapeMyprojects";

const MyProjects = () => {
  return (
    <div id="projects" className="my-projects-container">
      <ShapeMyprojects />
      <div className="header-divider">
        <MyTitle variants={whiteHeaderVariants} text="My Projects" />
        <Container fluid className="px-1 pt-4 m-0">
          <Row className="m-0 p-0">
            <ProjectImage
              title="Ephrown"
              desc="Dynamic website for online auctions of U.S. apartments. | React and Go"
              src="/projectsLogos/ephrown.jpg"
              href="https://ephrown.triggo.co"
            />
            <ProjectImage
              title="Auto Scale"
              desc="WordPress and css site for company"
              src="/projectsLogos/autoscale.jpg"
              href="https://autoscale.tech/"
            />
            <ProjectImage
              title="Tenfund"
              desc="Non-profit organization operations and facilitate donations | React and AWS"
              src="/projectsLogos/tenfund.jpg"
              href="https://front-end.d7b7d2p7gbhli.amplifyapp.com/"
            />
            <ProjectImage
              title="Zaad Productions"
              desc="Website for productions company | React and Firebase"
              src="/projectsLogos/zaad.jpg"
              href="https://zaad-b5b7e.web.app/"
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyProjects;
