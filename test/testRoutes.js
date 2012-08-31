var routes = require('../routes/routes');

exports.testIndex = function(test) {

	var resMock = {
		render : function (name, json) {
			test.equal('index', name);
			test.equal('Express', json.title);
		}
	};
	routes.index({}, resMock);
    test.expect(2);
    test.done();
};

var schema = {
	"type":"object",
	"$schema": "http://json-schema.org/draft-03/schema",
	"id": "#",
	"required":true,
	"properties":{
		"tata": {
			"type":"string",
			"id": "tata",
			"required":true
		}
	}
};

var json = {
  "tata": "toto"
};

exports.testValidate = function(test) {

	var reqMock = {
		param : function(name) {
			if (name === 'schema') {
				return schema;
			}

			if (name === 'json') {
				return json;
			}			
		}
	};

	var resMock = {
		send : function(data) {
			test.ok(data.isValid);
		}
	}

	routes.validate(reqMock, resMock);
    test.expect(1);
    test.done();

};