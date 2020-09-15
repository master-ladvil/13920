const mongoose = require("mongoose")

const exermod = mongoose.Schema({
    username : {
        type: String,
        required : true,
    },
    description : {
        type: String,
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('exerecise',exermod)