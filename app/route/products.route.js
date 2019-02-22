module.exports = function(app) {
 
    const products = require('../controller/products.controller.js');
 
    // Create a new product
    app.post('/api/products', products.create);
 
    // Retrieve all products
    app.get('/api/products', products.findAll);
 
    // Retrieve a single product by Id
    app.get('/api/products/:productId', products.findById);
 
    // Update a product with Id
    app.put('/api/products/:productId', products.update);
 
    // Delete a product with Id
    app.delete('/api/products/:productId', products.delete);
}