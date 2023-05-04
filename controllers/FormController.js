const Form = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose")

const jwtSecret = process.env.JWT_SECRET

// Generate user token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: "7d",
    })
}
//Register

const registerForm = async(req, res) => {

    
    const { name, email, cidade} = req.body

    //check if user exists
    const user = await User.findOne({email})

    if(user) {
        res.status(422).json({errors: ["Por favor, utilize outro e-mail"]})
        return
    }

    //Generate password hash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    //Create user
    const newForm = await Form.create({
        name,
        email,
        userId: user._id,
        cidade, 
    })

    // if user was created successfully, return the token

    if(!newForm){
        res.status.json({errors: ["Houve um erro, por favor tente mais tarde."]})
        return
    }
    
    res.status(201).json(newForm);

}
//Get user by Id
const getUserById = async(req, res) => {
    const {id} = req.params

    try {
        const user = await User.findById(mongoose.Types.ObjectId(id)).select("-password")

        if(!user){
            res.status(404).json({errors: ["Usuário nao encontrado"]})
            return
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(422).json({errors: ["Usuário nao encontrado"]})
        return
    }
    

}

module.exports = {
    registerForm,    
    getUserById,
    generateToken
}