var productView = appRoot + '/app/views/products'

module.exports = {
	index: function(req, res) {
		res.send('user ...');
	},

	show: function(req, res) {
		res.render(productView + "/show", {title: "Heloo"});
	}
};
