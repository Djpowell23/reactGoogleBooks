import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <img
        src="../assets/book-cover-photo.jpg" // Change the photo to something that fits better later
        className="img-fluid hero-image"
        alt="Shelves of Books"
      />
    );
  }
}

export default Hero;
