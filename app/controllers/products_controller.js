var db = require("../../config/database.js");
var ObjectId = require('mongodb').ObjectID;

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
	  db.get().collection("products").findOne({"_id": ObjectId(req.params.id)}, function(err, product) {
	    if (err) {
	      handleError(res, err.message, "Failed to get products.");
	    } else {
				res.render("products/show", {title: "Products Show", layout: 'layouts/layout.ejs', product: product});
	    }
	  });
	},

	create: function(req, res) {

	}
};
