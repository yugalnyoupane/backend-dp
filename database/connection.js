

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

module.exports = db