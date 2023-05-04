const {body} = require("express-validator")


const formValidation = () =>  {
    return [
        body("name")
        .optional()
        .isLength({min: 3})
        .withMessage("O nome precisa ter no mínimo 3 caracteres"),
    ]
}

module.exports = {
    formValidation
}