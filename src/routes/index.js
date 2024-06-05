const express = require('express');
const routerAuthor = require('./author.router');
const routerCountry = require('./country.router');
const routerArticle = require('./articles.router');
const routerCity = require('./city.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/authors', routerAuthor) //! SOLO  EL PROFE
router.use('/articles', routerArticle)

router.use('/countries', routerCountry) // *? USTEDES 
router.use('/cities', routerCity)


module.exports = router;