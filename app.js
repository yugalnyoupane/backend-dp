let express = require("express")
let app = express()

require("./database/connection")

//book project
//READ
app.get("/books",(req,res)=>{
    // logic to fetch books from database
    res.json(
        {
            message:"books fetch succesfully"
        }
    )
})

//Create
app.post("/books",(req,res)=>{
    //logic to add book to databse goes here
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