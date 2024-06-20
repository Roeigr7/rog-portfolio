import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const Skill = ({ votes, name }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView, votes]);

  return (
    <Row className="m-0 p-0  d-flex justify-content-center justify-content-md-around align-items-center my-3 text-dark">
      <Col className="p-0 ml-0" xs={11} md={12} lg={8}>
        <motion.div
          animate={controls}
          ref={ref}
          variants={{
            initial: { width: "0%", zIndex: 1 },
            animate: {
              width: "100%",
              transition: {
                type: "tween",
                duration: 1,
              },
            },
          }}
          className={"animate-Line bg-blue hundred"}
        />
        <div className="line-background bg-lightbright" />
        <p className="line-precent-text text-center text-black p-0 m-0">
          {name}
        </p>
      </Col>
    </Row>
  );
};
export default Skill;
