const express = require("express")
const router = express.Router()

const {register, login, getCurrentUser, getUserById} = require("../controllers/UserController")
//Middlewares
const authGuard = require("../middlewares/authGuard")
const {userCreateValidation, loginValidation} = require("../middlewares/userValidation")
const validate = require("../middlewares/handleValidation")



//Routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/profile", authGuard, getCurrentUser)
router.get("/:id", getUserById)
//router.post("/profile/form", formvalidation() , authGuard, formUser)

module.exports = router