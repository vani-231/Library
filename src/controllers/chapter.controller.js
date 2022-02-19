const express = require('express');

const Chapter = require('../models/chapter.model')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const chapter = await Chapter.create(req.body)
        return res.status(201).send(chapter)

    } catch (e) {
        return res.status(500).send({ status: e.message })

    }
})

router.get('/', async (req, res) => {
    try {
        const chapters = await Chapter.find().lean().exec()
        return res.send({ chapters })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const chapter = await Chapter.findById(req.params.id).lean().exec()
        return res.send({ chapter })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const chapter = await Chapter.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        return res.send({ chapter })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const chapter = await Chapter.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send({ chapter })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

module.exports = router