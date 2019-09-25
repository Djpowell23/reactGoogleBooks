const router = require("express").Router();
const booksRoutes = require("./books");

// Article routes
router.use("/books", booksRoutes);

module.exports = router;
