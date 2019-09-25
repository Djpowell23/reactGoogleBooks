import React, { Component } from "react";
import API from "../utils/API";
import {
  Col,
  Row,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

class Articles extends Component {
  state = {};

  //   Methods
  handleClick = event => {
    event.preventDefault();
    console.log("Event.target:", event.target);
  };
  // End Methods

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-5 sm-12">
            <h1 className="header">Google Books Search</h1>
            <Form className="book-search">
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  name="book-search"
                  placeholder="Book Title"
                  className="search-input"
                />
              </FormGroup>
              <Button onClick={this.handleClick}>Search</Button>
            </Form>
          </Col>
          <Col size="md-7 sm-12">
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
