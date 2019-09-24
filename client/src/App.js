import React, { Component } from "react";
// import styled from "styled-components";
// import { Col, Row, Container, Button } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import NoMatch from "./pages/NoMatch";

// CSS
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

class App extends Component {
  state = {
    page: "home",
    saved: [],
    searchTerm: ""
  };

  componentDidMount() {
    console.log("component mounted");
  }

  // Methods

  // End Methods

  render() {
    return (
      <Router>
        <div className="page-wrapper">
          <NavBar />
          <Hero />
          <Switch>
            <Route exact path="/" component={Articles} />
            <Route exact path="/articles" component={Articles} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// <div className="page-wrapper">
{
  /* <NavBar />

<Container>
  <Hero />
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
  {/* Begin Book component */
}
// <Container className="book-component">
//   <Row>
//     <Col md="9">
//       <p className="book-details">
//         Harry Potter and the Sorcerer's Stone
//       </p>
//       <p className="book-details">Written By: J.K. Rowling</p>
//     </Col>
//     <Col md="3">
//       <Button className="header-btn">View</Button>
//       <Button className="header-btn">Delete</Button>
//     </Col>
//   </Row>
//   <MyRow>
//     <Col md="2">
//       <BookImage
//         className="book-image"
//         src="https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71IWx6RF2noc1HRHhWPmqso_7MUC-c1hPyThZGNJ54zbuoaZ16RN32upthjBfwDiQps7jXGxjoqvLxlPrBmS-ix0aFSTrk6b-JXhjaf0opDpr2BEjkCzI-4BXs1yOFZ1XSocSIS"
//       ></BookImage>
//     </Col>
//     <Col md="10">
//       <p className="book-description">
//         Harry Potter has never even heard of Hogwarts when the letters
//         start dropping on the doormat at number four, Privet Drive.
//         Addressed in green ink on yellowish parchment with a purple
//         seal, they are swiftly confiscated by his grisly aunt and
//         uncle. Then, on Harry's eleventh birthday, a great beetle-eyed
//         giant of a man called Rubeus Hagrid bursts in with some
//         astonishing news: Harry Potter is a wizard, and he has a place
//         at Hogwarts School of Witchcraft and Wizardry. An incredible
//         adventure is about to begin!
//       </p>
//     </Col>
//   </MyRow>
// </Container>
{
  /* End of Component for each book */
}
// </Container>
// </div> */}
