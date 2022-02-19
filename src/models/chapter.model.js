const mongoose = require('mongoose')
const chapterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        pages: { type: Number, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)
module.exports = mongoose.model('chapter', chapterSchema)