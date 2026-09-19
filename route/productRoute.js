const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const {
  uploadProduct,
  getAllProducts
} = require('../controller/productController');

router.post('/upload/:userId',upload.single('image'), uploadProduct);
router.get('/getAll', getAllProducts);

module.exports = router;