db = require("../../config/database.js");
module.exports = {
	index: function(req, res) {
	  db.get().collection("products").find({}).toArray(function(err, products) {
	    if (err) {
	      handleError(res, err.message, "Failed to get products.");
	    } else {
				res.render("products/index", {title: "Product Index", layout: 'layouts/layout.ejs', products: products});
	    }
	  });
	},

	show: function(req, res) {
		// db = require("../../config/database.js").get();
		// console.log("show action");
		// console.log(db);
		// db.get().collection('comments')
	  var products = db.get().collection('products');
	  products.insert({name: "Node depot", description: "Somee Rails depot step by step", price: 99.99})
		// res.render("products/show", {title: "Heloo", layout: 'layout'});
		res.render("products/show", {title: "Heloo", layout: 'layouts/layout.ejs'});
	},

	create: function(req, res) {

	}
};
