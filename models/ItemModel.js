
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
let itemSchema = new Schema(
    {
        name: Number,
        product: String
    }, { versionKey: false });

let Item = mongoose.model("Item", itemSchema);


module.exports = Item;