const express = require('express');

const Admin = require('../models/admin.model')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const admin = await Admin.create(req.body)
        return res.status(201).send(admin)

    } catch (e) {
        return res.status(500).send({ status: e.message })

    }
})

router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find().lean().exec()
        return res.send({ admins })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id).lean().exec()
        return res.send({ admin })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        return res.send({ admin })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send({ admin })
    } catch (e) {
        return res.status(500).json({ status: e.message })
    }
})

module.exports = router