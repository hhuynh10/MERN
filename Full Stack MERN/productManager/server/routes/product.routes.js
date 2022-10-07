const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/allProducts', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.post('/api/addProduct', ProductController.addProduct);
    app.put('/api/update/:id', ProductController.updateProduct);
    app.delete('/api/delete/:id', ProductController.deleteProduct);
}