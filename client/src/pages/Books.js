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

class Books extends Component {
  state = {
    searches: [],
    query: {
      q: ""
    },
    articles: []
  };

  //   Methods
  componentDidMount() {
    this.loadBooks();
    console.log("Books state:", this.state);
  }

  handleClick = event => {
    event.preventDefault();
    console.log("Event.target:", event.target);
  };

  findBooks = term => {
    API.searchBooks(term)
      .then(res => this.setState({ searches: res.data.response.docs }))
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  // End Methods

  render() {
    // console.log("Books state:", this.state);
    return (
      <Container fluid>
        <Row>
          <Col size="md-5 sm-12">
            <h1 className="header">Google Books Search</h1>
            <Form className="book-search">
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  name="q"
                  placeholder="Book Title (required)"
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

export default Books;
