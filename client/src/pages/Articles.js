import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "reactstrap";

class Articles extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="5">
            <h1 className="header">Google Books Search</h1>
          </Col>
          <Col md="7">
            <h1 className="header">Results</h1>
          </Col>
        </Row>
        {/* Saved */}
        <Row>
          <Col size="md-8 sm-12" id="results-container">
            <h1 className="header">Saved Articles</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
