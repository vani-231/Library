
const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }

},
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model('author', authorSchema)
