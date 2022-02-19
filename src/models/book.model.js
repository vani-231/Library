const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        year: { type: Number, required: true },
        author_id: {
            type: mongoose.Types.ObjectId,
            ref: "author",
            required: true,
        },
        chapter_id: {
            type: mongoose.Types.ObjectId,
            ref: "chapter",
            required: true,

        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)
module.exports = mongoose.model('book', bookSchema)