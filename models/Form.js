const mongoose = require("mongoose")
const {Schema} = mongoose

const formSchema = new Schema ({
    name:String,
    email:String,
    cidade:String,

},
{
    timestamps:true
}
)

const Form = mongoose.model("Form", formSchema)


module.exports = {
    Form
    
}