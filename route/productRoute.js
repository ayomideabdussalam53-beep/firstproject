const express = require("express");
const router = express.Router();
const {
  uploadProduct,
  getAllProducts
} = require('../controller/productController');

router.post('/upload', uploadProduct);
router.get('/getAll', getAllProducts);

module.exports = router;