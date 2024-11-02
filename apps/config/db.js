const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://jat78901:jat78901@cluster0.n7q0mv9.mongodb.net/infohub')
.then(() => console.log('connected to db'))

module.exports = connection;