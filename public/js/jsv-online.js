var options = {
	theme : 'default',
	lineNumbers : true,
	matchBrackets : true
};

var schemaEditor = CodeMirror.fromTextArea($('#schema')[0], options);
var jsonEditor = CodeMirror.fromTextArea($('#json')[0], options);

schemaEditor.focus();
//schemaEditor.setSelection({ line : 0, ch : 0}, {line : 0, ch : 23});

$('button[data-action=validate]').bind('click', function () {
  $.get("validate", 
  		{ 
  			schema : schemaEditor.getValue(" "),
  			json : jsonEditor.getValue(" ")
  		},
			function(data){
				console.log(data);
			}, "json");
});

