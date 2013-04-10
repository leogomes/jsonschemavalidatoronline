var JSV = require('JSV').JSV;

/*
 * GET home page.
 */
exports.index = function(req, res) {
	res.render('index', {
		title: 'Express'
	});
};



/*
 * GET validate page
 */
exports.validate = function(req, res) {

	var schema = JSON.parse(req.param('schema'));
	var json = JSON.parse(req.param('json'));

	var env = JSV.createEnvironment();
	var report = env.validate(json, schema);
	
	var valid = false;

	valid = (report.errors.length === 0);


	res.send({
		schema: schema,
		json: json,
		isValid: valid,
		errors: report.errors
	});

};