

//database connection logic
const {Sequelize,DataTypes} = require("sequelize")

const sequelize = new Sequelize(process.env.CS)



sequelize.authenticate()
.then(()=>{
    console.log("Authenticated!")
})
.catch((err)=>{
    console.log("Error!")
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize,DataTypes) // directly importing and triggering
db.products = require("./models/product.model")(sequelize,DataTypes)

//migrate code 
sequelize.sync({alter:false}).then(()=>{
    console.log("Migrated Succesfully!")
})

module.exports = db