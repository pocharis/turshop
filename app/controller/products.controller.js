const db = require('../config/db.config.js');
const Product = db.product;

// Post a Products
exports.create = (req, res) => {	
	// Save to MySQL database
	Product.create({  
	  product_id: req.body.product_id,
	  description: req.body.description,
	  price: req.body.price,
	  discounted_price: req.body.discounted_price,
	  image: req.body.image,
	  image_2: req.body.image_2,
	  thumbnail: req.body.thumbnail,
	  display: req.body.display
	}).then(product => {		
		// Send created product to client
		res.send(product);
	});
};



 
// FETCH all Products
exports.findAll = (req, res) => {
	Product.findAll().then(products => {
	  // Send all products to Client
	  res.send(products);
	});
};

// Find a Product by Id
exports.findById = (req, res) => {	
	Product.findById(req.params.productId).then(product => {
		res.send(product);
	})
};
 
// Update a Product
exports.update = (req, res) => {
	const id = req.params.productId;
	Product.update( { product_id: req.body.product_id,description: req.body.description}, 
					 { where: {id: req.params.productId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a product with id = " + id);
				   });
};
 
// Delete a Product by Id
exports.delete = (req, res) => {
	const id = req.params.productId;
	Product.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a product with id = ' + id);
	});
};