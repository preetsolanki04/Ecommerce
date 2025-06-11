const router = require("express").Router();
const productcontroller = require("../controllers/product.controller");

router.route('/products')
.get(productcontroller.getProducts)
.post(productcontroller.createProducts)

router.route('/products/:id')
.delete(productcontroller.deleteProduct)
.put(productcontroller.updateProduct)

module.exports = router;