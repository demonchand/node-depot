var db = require("../../config/database.js");
var Product = require("../models/product.js");
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

	new: function(req, res) {
		obj = {
						title: "New Product", 
						layout: 'layouts/layout.ejs',
						method: "post",
						action: "/products"
					}
		res.render("products/new", obj);
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

	edit: function(req, res) {
	  db.get().collection("products").findOne({"_id": ObjectId(req.params.id)}, function(err, product) {
	    if (err) {
	      handleError(res, err.message, "Failed to get product.");
	    } else {
				obj = {
								title: "Product edit", 
								layout: 'layouts/layout.ejs',
								method: "put",
								action: "/products/" + product._id,
								product: product
							}
				res.render("products/edit", obj);
	    }
	  });
	},

	create: function(req, res) {
		param = { name: req.body.name, description: req.body.description, price: req.body.price };
	  db.get().collection("products").insert(param, function(err, data) {
	    if (err) {
	      handleError(res, err.message, "Failed to create product.");
	    } else {
				res.render("products/show", { title: "Products Show", layout: 'layouts/layout.ejs', product: data.ops[0] });
	    }
	  });
	},

	update: function(req, res) {
		param = { name: req.body.name, description: req.body.description, price: req.body.price };
	  db.get().collection("products").update({"_id": ObjectId(req.params.id)}, {$set: param}, function(err, data) {
	    if (err) {
	      handleError(res, err.message, "Failed to create product.");
	    } else {
	    	db.get().collection("products").findOne({"_id": ObjectId(req.params.id)}, function(err, data) {
	    		console.log(`from data update get recored collection ${data}`);
					res.render("products/show", { title: "Products Show", layout: 'layouts/layout.ejs', product: data });
    	});
	    }
	  });
	},

	destroy: function(req, res) {
	  db.get().collection("products").remove({"_id": ObjectId(req.params.id)}, function(err) {
	    if (err) {
	      handleError(res, err.message, "Failed to create product.");
	    }
	  });

		res.send(true);
	}
};
