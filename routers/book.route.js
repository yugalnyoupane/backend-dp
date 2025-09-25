const { addBook, fetchBook, deleteBook, editBook, singleFetchBook } = require("../controllers/book.controller")

const router = require("express").Router()


router.route("/books").get(fetchBook).post(addBook)
router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)


module.exports = router