import React, { Component } from "react";
import styled from "styled-components";
import { Col, Row, Container, Button } from "reactstrap";
import "./App.css";

// Styled Components
const MyRow = styled(Row)`
  border-top: 1px solid red;
`;

const BookImage = styled.img`
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid grey;
  cursor: pointer;
  margin: 0 auto;
  :hover {
    border-color: red;
  }
`;
// End Styled Components

// List Components for map through database
// Not implementable yet, use later when restructuring
const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = stled.li`
  margin-bottom: 1 em;
`;
// End List Components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col className="header">
            <ul>
              <li>Google Books</li>
              <li>Saved</li>
              <li>Search</li>
            </ul>
          </Col>
        </Row>

        <Container>
          <Row className="jumbotron">
            <Col>
              <h1>(React) Google Books Search</h1>
              <h4>Search for and save books of interest!</h4>
            </Col>
          </Row>
        </Container>
        <Container className="books-container">
          <Row>
            <Col>
              <h4>Saved Books</h4>
            </Col>
          </Row>
          {/* Begin Book component */}
          <Container className="book-component">
            <Row>
              <Col md="9">
                <p className="book-details">
                  Harry Potter and the Sorcerer's Stone
                </p>
                <p className="book-details">Written By: J.K. Rowling</p>
              </Col>
              <Col md="3">
                <Button className="header-btn">View</Button>
                <Button className="header-btn">Delete</Button>
              </Col>
            </Row>
            <MyRow>
              <Col md="2">
                <BookImage
                  className="book-image"
                  src="https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71IWx6RF2noc1HRHhWPmqso_7MUC-c1hPyThZGNJ54zbuoaZ16RN32upthjBfwDiQps7jXGxjoqvLxlPrBmS-ix0aFSTrk6b-JXhjaf0opDpr2BEjkCzI-4BXs1yOFZ1XSocSIS"
                ></BookImage>
              </Col>
              <Col md="10">
                <p className="book-description">
                  Harry Potter has never even heard of Hogwarts when the letters
                  start dropping on the doormat at number four, Privet Drive.
                  Addressed in green ink on yellowish parchment with a purple
                  seal, they are swiftly confiscated by his grisly aunt and
                  uncle. Then, on Harry's eleventh birthday, a great beetle-eyed
                  giant of a man called Rubeus Hagrid bursts in with some
                  astonishing news: Harry Potter is a wizard, and he has a place
                  at Hogwarts School of Witchcraft and Wizardry. An incredible
                  adventure is about to begin!
                </p>
              </Col>
            </MyRow>
          </Container>
          {/* End of Component for each book */}
        </Container>
      </div>
    );
  }
}

export default App;
