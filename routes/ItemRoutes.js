const express = require('express');
const { getItemById, getItems, addItem, deleteItem, updateItem, home } = require('../controllers/ItemControllers');
const auth = require('../middleware/auth')

const router = express.Router();


router.get('/', home);

// Route pour l'Affichage des déaprtements
router.get("/item", auth, getItems);

// route pour l'affichage des infos d'un département dont connait l'identifiant
router.get("/item/:id", auth, getItemById);

// Ajout d'un nouveau département 

router.post("/add", auth, addItem);

// Suppression d'un département bien déterminé !
router.delete("/delete/:id", auth, deleteItem);

// Mise à jour d'un département dont on caonnait l'identifiant
router.put("/update/:id", auth, updateItem)

module.exports = router;