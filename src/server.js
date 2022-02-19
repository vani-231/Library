const express = require('express');
const mongoose = require('mongoose')
const connect = require('./config/db')
const ejs = require('ejs')
const app = express()

app.use(express.json())

const booksController = require('./controllers/book.controller')

const adminsController = require('./controllers/admin.controller')

const chaptersController = require('./controllers/chapter.controller')

const authorsController = require('./controllers/author.controller')

app.use('/admins', adminsController)
app.use('/chapters', chaptersController)
app.use('/authors', authorsController)
app.use('/books', booksController)




app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index');
})


const start = async function () {
    await connect()
    app.listen(1234, () => {
        console.log("Listening at port 1234");
    })
}


module.exports = start