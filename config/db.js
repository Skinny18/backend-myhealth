const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://myhealth:myhealth123456@cluster0.u7irgjj.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log("Conectou ao Banco")
        return dbConn
    } catch (error) {
        console.log(error)
        
    }
}

conn()

module.exports = conn