import Head from "next/head";
import { Row, Col, Container } from "react-bootstrap";

import AboutMe from "../components/homeComponents/AboutMe";
import MyProjects from "../components/homeComponents/MyProjects";
import MyStack from "../components/homeComponents/MyStack";
import SkillsList from "../components/homeComponents/SkillsList";
import { colorHeaderVariants } from "../assets/animations/variants";
import { MyTitle } from "../assets/reausableComponents/MyTags";
import ShapeAboutMe from "../assets/shapes/Aboutme";
import VotesModal from "../modals/VotesModal";

const Home = () => {
  const skills = []; // Placeholder for skills data, replace with your actual data fetching logic

  const handleCloseModal = () => {
    // Placeholder for handleCloseModal function
  };

  return (
    <>
      <Head>
        <title>RoeiPortfolio</title>
        <link rel="icon" href="/logorg.png" />
      </Head>

      <section className="p-0 m-0">
        <VotesModal handleClose={handleCloseModal} show={false} />{" "}
        {/* Placeholder for VotesModal usage */}
        <Container className="p-0 m-0" fluid>
          <AboutMe />
          <MyProjects />
          <MyStack />

          <div className="pb-5 mx-auto rate-container bg-white">
            <ShapeAboutMe />
            <MyTitle variants={colorHeaderVariants} text="Abilities" />

            <Row
              id="rate"
              className="p-0 m-0 d-flex align-items-center justify-content-center"
            >
              <Col
                md={8}
                className="p-0 m-0 text-center d-flex align-items-center justify-content-center"
              >
                <Col md={8} className="p-0 m-0 text-center">
                  <SkillsList skills={skills} />
                </Col>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

Home.getInitialProps = async ({ query }) => {
  return { query };
};

export default Home;
