const express = require('express');

const Book = require('../models/book.model')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body)
        return res.status(201).send(book)

    } catch (e) {
        return res.status(500).send({ status: e.message })

    }
})

router.get('/', async (req, res) => {
    try {
        const books = await Book.find().populate(["author_id", "chapter_id"]).lean().exec()
        return res.send(books)
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).lean().exec()
        return res.send(book)
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        return res.send({ book })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send({ book })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

module.exports = router