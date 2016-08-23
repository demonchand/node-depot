module.exports = function(app) {
	var product = require("../app/controllers/products_controller")

	app.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express', layout: 'layout.ejs' });
	});

	app.get('/users', function(req, res, next) {
	  res.render('users', { title: 'User Sucks' });
	});

	// Products
	app.get("/products", product.index);
	app.get("/products/new", product.new);
	app.get("/products/:id", product.show);
	app.get("/products/:id/edit", product.edit);
	app.post("/products", product.create);
	app.delete("/products", product.destroy);
}
