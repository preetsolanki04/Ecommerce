const router = require("express").Router();
const categorycontroller = require('../controllers/category.controller')
const auth = require("../middleware/auth")
const authAdmin = require("../middleware/authAdmin")

router.route('/category')
.get(categorycontroller.getCategory)
.post(auth,authAdmin,categorycontroller.createCategory)

router.route('/category/:id')
.delete(auth,authAdmin,categorycontroller.deleteCategory)
.put(auth,authAdmin,categorycontroller.updateCategory)

module.exports = router;