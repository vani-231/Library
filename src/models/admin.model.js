const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema(
    {
        email: { type: 'string', required: true, unique: true },
        password: { type: 'string', required: true },
        author_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true,
        }

    }
    , {
        versionKey: false,
        timestamps: true,

    }
)

module.exports = mongoose.model('admin', adminSchema)