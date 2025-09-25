let express = require("express")
let app = express()

const { books } = require("./database/connection")
const { fetchBook, addBook, deleteBook, editBook } = require("./controllers/book.controller")
const bookRoute = require("./routers/book.route")

require("./database/connection")
app.use(express.json())

// //book project
// //READ
// app.get("/books",fetchBook)

// //Create
// app.post("/books",addBook)

// //Delete
// app.delete("/books/:id",deleteBook)

// //Update
// app.patch("/books/:id",editBook)

app.use("",bookRoute)


app.listen(3000,()=>{
    console.log("server started at port 3000")
})