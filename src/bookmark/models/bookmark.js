const mongoose  = require('mongoose')

const bookmarkSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        default:'Others',
        trim: true
    },
    link:{
        type: String,
        required:true,
        trim: true
    },
    poster:{
        type: String,
    }
})

const Bookmark = mongoose.model('Bookmark',bookmarkSchema)

module.exports = Bookmark