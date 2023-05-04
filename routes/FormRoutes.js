const express = require("express");
const router = express.Router();

//controller
const {registerForm, getUserById} = require('../controllers/FormController');


//middlewares
const {formValidation} = require ("../middlewares/formValidation")
const authGuard = require("../middlewares/authGuard")
const validate = require("../middlewares/handleValidation")

//Routes
router.post("/profile",authGuard,formValidation(),validate, registerForm)


module.exports = router;