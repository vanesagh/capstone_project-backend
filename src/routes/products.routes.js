// Router
const {Router} = require('express'); 
const {createProduct,getProducts,getProduct,updateProduct,deleteProduct} = require('../controller/products');
const {createOrder,getOrder} =require('../controller/orders');

const router = Router();

//Admin routes

router.get('/admin',getProducts);
router.get('/admin/product/:id',getProduct);
router.post('/admin',createProduct);
router.put('/admin/product/:id',updateProduct);
router.delete('/admin/product/:id',deleteProduct);

// Customer routes

router.get('/',getProducts);
router.post('/checkout',createOrder);
router.get('/checkout/:id',getOrder);




module.exports = router;