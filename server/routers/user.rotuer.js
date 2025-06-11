const usercontroller = require("../controllers/user.controller");
const auth = require("../middleware/auth"); // Ensure this file exists

const router = require("express").Router();



router.post('/register',usercontroller.register);
router.post('/refresh_token',usercontroller.refreshtoken);
router.post('/login',usercontroller.login);
router.get('/logout',usercontroller.logout);
router.get('/infor',auth,usercontroller.getUser);



module.exports = router;

