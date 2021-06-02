import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import Hero from "../components/Hero/Hero";


function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Hero>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Hero>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
