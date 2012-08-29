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

	var schema = req.param('schema');
	var json = req.param('json');

	var env = JSV.createEnvironment();
	var report = env.validate(json, schema);
	
	var valid = false;
	var msg;

	if (report.errors.length === 0) {
		//JSON is valid against the schema
		valid = true;
	} else {
		valid = false;
		msg = report.errors.message;
	}


	res.send({
		schema: schema,
		json: json,
		isValid: valid,
		message: report.errors
	});

	// jsv.validate (source, schema);
	// sucess -> res.render('validation', { result : 'success' });
	// error -> res.render('validation', { result : 'error', message : errorMsg });
};