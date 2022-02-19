const mongoose = require('mongoose')


//const DB = 'mongodb+srv://vani:Vani@chinu231@cluster0.mndrt.mongodb.net/library?retryWrites=true&w=majority'
module.exports = () => {
    //return mongoose.connect('mongodb+srv://vani:Vani@chinu231@cluster0.mndrt.mongodb.net/library?retryWrites=true&w=majority')
    return mongoose.connect('mongodb://127.0.0.1:27017/library')
}