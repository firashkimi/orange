const mongoose = require('mongoose')

const uriAtlas = "mongodb://localhost:27017/orange"

mongoose.connect(uriAtlas)
    .then(() =>
        console.log("successful connexion DB"));

module.exports = mongoose