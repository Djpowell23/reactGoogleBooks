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
    query: "",
    articles: []
  };

  //   Methods
  componentDidMount() {
    this.loadBooks();
    console.log("Books state:", this.state);
  }

  // Decide how I want it to function. Could convert to lowercase on the back end
  handleInputChange = event => {
    // console.log("event target value:", event.target.value);
    const query = event.target.value.toLowerCase(); // Convert query to lowerstring for simplicity / error handling. Also is causing it to make it unable to type Uppercase
    // console.log("query:", query);
    // The function after setting state, allows the state to be set with the values before accessing them.
    this.setState({ query: query }, () => {
      // console.log("state query:", this.state.query);
      // Run the API Search Here Possibly?
    });
  };

  handleClick = event => {
    event.preventDefault();
    console.log("State.Query:", this.state.query);
    this.findBooks(this.state.query);
  };

  findBooks = term => {
    API.searchBooks(term).then((req, res) => {
      console.log("req.body", req.data.items);
      // Store first ten books in searches
      const book = req.data.items;
      // console.log(book[].accessInfo.embeddable);
      for (let i = 0; i < 10; i++) {
        if (book[i].accessInfo.embeddable === true) {
          let bookObject = {
            title: book[i].volumeInfo.title,
            author: book[i].volumeInfo.authors,
            synopsis: book[i].searchInfo.textSnippet,
            saved: false
          };
          this.state.searches.push(bookObject);
          console.log("state search", this.state.searches);
        }
      }
      // Less Typing
      // const book = req.data.items[0].volumeInfo;
      // const Book = {
      //   title: book.title,
      //   author: book.authors,
      //   synopsis: req.data.items[0].searchInfo.textSnippet,
      //   saved: false
      // };
      // console.log("Book:", Book);
      // this.setState({
      //   searches: res.data.items
      // });
    });
    console.log("searches", this.state.searches);
    //   .catch(err => console.log(err));
    // API.searchBooks(term).then((req, res) => {
    //   console.log("req.data.items:", req.data.items);
    // });
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
          {/* Search */}
          <Col size="md-5 sm-12">
            <h1 className="header">Google Books Search</h1>
            <Form className="book-search">
              <FormGroup>
                <Input
                  name="query"
                  className="search-input"
                  placeholder="Book Title (required)"
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Button onClick={this.handleClick}>Search</Button>
            </Form>
          </Col>
          {/* Results */}
          <Col size="md-7 sm-12">
            <h1 className="header">Results</h1>
            {/* Loop through every book, display card with appropriate information */}
            {/* {this.state.searches.map(book => (
              <BookResult
               title={book.title}
               author={[book.authors]}
               synopsis={book.synopsis}
               />
            ))} */}
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
