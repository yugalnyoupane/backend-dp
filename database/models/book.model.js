//we are creating a table book with , following columns
//bookName, bookPrice, bookAuthor, bookGenre


const bookModel = (sequelize,DataTypes) =>{
    const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull: false
        },
        bookPrice : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookAuthor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookGenre: {
            type: DataTypes.STRING,
            //allowNull default set to true
            defaultValue: "Unknown"
        }
    })
    return Book
}

module.exports = bookModel
