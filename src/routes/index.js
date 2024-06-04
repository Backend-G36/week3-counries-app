const express = require('express');
const routerAuthor = require('./author.router');
const routerCountry = require('./country.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/authors', routerAuthor) //! SOLO  EL PROFE

router.use('/countries', routerCountry) // *? USTEDES 


module.exports = router;