const Item = require('../models/ItemModel')


exports.home = (req, res) => { res.send('Hello server ...'); }

exports.getItems = (req, res) => {
    Item.find({}, (err, results) => {
        err ? res.send(err) : res.send(results)
    });
}

exports.getItemById = (req, res) => {
    Item.find({ _id: req.params.id }, (err, result) => {
        if (!err) {
            res.send(result);
        }
    });
}

exports.addItem = async (req, res) => {
    let newItem = new Item(req.body);
    try {
        await newItem.save();
        res.status(200).send({ message: `${newItem.nom} is succussffully added` });
    }
    catch (err) {
        res.status(400).send({ error: `error adding newItem ${err}` })
    }
}

exports.deleteItem = async (req, res) => {
    try {
        const Item = await Item.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: `${Item.nom} is succussffully deleted` });
    }
    catch (err) {
        res.status(400).send({ error: `error deleting Item ${err}` })
    }
}

exports.updateItem = async (req, res) => {
    try {
        const Item = await Item.findByIdAndUpdate(req.params.id, req.body);
        await item.save()
        res.status(200).send({ message: `${Item.nom} is succussffully updated` });
    }
    catch (err) {
        res.status(400).send({ error: `error updating Item ${err}` })
    }
}