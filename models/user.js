const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const userSchema = new Schema({
    email: String,
    password: String,
    username: String
}, {
    timestamps: {
        createdat: 'createdAT',
        updatedat: 'updatedAT'
    }
})
const User = mongoose.model('user', userSchema)
module.exports = User

module.exports.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    } catch (error) {
        throw new error('hashing failed out', error)
    }
}
