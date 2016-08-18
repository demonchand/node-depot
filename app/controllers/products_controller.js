module.exports = {
	index: function(req, res) {
		res.send('user ...');
	},

	show: function(req, res) {
		res.render("products/show", {title: "Heloo"});
	}
};
