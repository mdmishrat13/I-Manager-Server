const router = require('express').Router()
const {getProducts, createProduct} = require('./../controllers/Products')

router.post('/product',createProduct)
router.get('/products',getProducts)


module.exports = router