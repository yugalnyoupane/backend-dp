let express = require("express")
const { books } = require("./database/connection")
let app = express()

require("./database/connection")
app.use(express.json())

//book project
//READ
app.get("/books",async (req,res)=>{
    // logic to fetch books from database
    const datas = await books.findAll() //database query so use await()
    res.json(
        {
            message:"books fetch succesfully",
            datas: datas //or you can simply write datas only since key and value are same
        }
    )
})

//Create
app.post("/books",async (req,res)=>{
    //logic to add book to databse goes here
    console.log(req.body)
    const {bookName,bookPrice,bookAuthor,bookGenre}=req.body
    await books.create({
        //columnName : value sent from Postman or Frontend
        bookName: bookName,
        bookPrice: bookPrice,
        bookAuthor: bookAuthor,
        bookGenre: bookGenre
    })
    res.json({
        message:"Book Added Succesfully"
    })
})

//Delete
app.delete("/books/:id",(req,res)=>{
    //logic to dalete book
    res.json({
        message:"Book Delelted Succesfully"
    })
})

//Update
app.patch("/books/:id",(req,res)=>{
    //logic to update book
    res.json({
        message:"Book updated Succesfully"
    })
})


app.listen(3000,()=>{
    console.log("server started at port 3000")
})