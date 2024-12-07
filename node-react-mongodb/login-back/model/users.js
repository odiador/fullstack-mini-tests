const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true }
    // role: {type: 'string', required: true}},
    // isActive: Boolean,
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
});

module.exports = model('User', userSchema);
