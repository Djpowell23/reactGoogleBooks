import axios from "axios";
const apiKey = "AIzaSyBG7_4fP3b68naan34DccYLvsuVjx029yQ";

// Group all API Calls
export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.remove("/api/books/" + id);
  },
  searchBooks: function(term) {
    const q = term.join(" ", "+");
    console.log("q:", q);
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        q +
        "+" +
        "&key=" +
        apiKey
    );
  }
};
