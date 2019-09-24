import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Jumbotron from "reactstrap";

class NoMatch extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NoMatch;
