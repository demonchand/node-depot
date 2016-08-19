module.exports = {
	index: function(req, res) {
		res.send('user ...');
	},

	show: function(req, res) {
		db.products.insert({name: "Rails Intro", description: "Rails depot step by step", price: 12.99})
		// res.render("products/show", {title: "Heloo", layout: 'layout'});
		res.render("products/show", {title: "Heloo", layout: 'layouts/layout.ejs'});
	},

	create: function(req, res) {

	}
};
