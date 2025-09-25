const { books } = require("../database/connection")

//can export by using exports.fetchBooks 
const fetchBook = async (req,res)=>{
    // logic to fetch books from database
    const datas = await books.findAll() //database query so use await()
    res.json(
        {
            message:"books fetch succesfully",
            datas: datas //or you can simply write datas only since key and value are same
        }
    )
}

const addBook = async (req,res)=>{
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
}

const deleteBook = async (req,res)=>{
    //selecting id of the book that we want to delete
    const id = req.params.id //id, because :id is sent, choose name according to it 

    //delete logic
    await books.destroy({
        where:{
            id:id
        }
    })
    res.json({
        message:"Book Delelted Succesfully"
    })
}


const editBook = async (req,res)=>{
    //logic to update book
    // which id is needed to be edited 
    const id = req.params.id

    //what what to update
    const {bookName, bookPrice, bookAuthor,bookGenre} = req.body

    await books.update({
        bookName : bookName,
        bookPrice : bookPrice,
        bookAuthor : bookAuthor,
        bookGenre : bookGenre
    },{
        where : {
            id : id
        }
    })

    res.json({
        message:"Book updated Succesfully"
    })
}

//for dynamic Routing
const singleFetchBook = async function(req,res){
    //first capture what id is sent, 
    const id = req.params.id //id just a name that we gave, /:id
    const datas = await books.findByPk(id) //find by pk always returns object
    //if you want to do by findaAll method -> returns array 
    // books.findAll({
    //     where:{
    //         bookName: "hello world",
    //         authorName: "Yugal"
    //     }
    // })
    res.json({
        message:"Single Book Fetched successfully",
        datas
    })

}

module.exports = {fetchBook, addBook, deleteBook, editBook,singleFetchBook}