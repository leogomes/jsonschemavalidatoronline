var options = {
	theme : 'default',
	lineNumbers : true,
	matchBrackets : true
};

var schemaEditor = CodeMirror.fromTextArea($('#schema')[0], options);
var jsonEditor = CodeMirror.fromTextArea($('#json')[0], options);

schemaEditor.focus();
//schemaEditor.setSelection({ line : 0, ch : 0}, {line : 0, ch : 23});

var processResult = function( data ){
	if (data.isValid) {
		$('#resultMessage').html("<div class='alert alert-success span6'>" +
			"<button type='button' class='close' data-dismiss='alert'>×</button>" +
	  		"<strong>Good job!</strong> Your JSON is valid.</div>");
		//.html("&lt;div class=&quot;alert alert-success span6&quot;&gt;<br/>	  		&lt;button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;alert&quot;&gt;&#x00d7;&lt;/button&gt;<br/>	  		&lt;strong&gt;Good job!&lt;/strong&gt; Your JSON is valid.<br/>		 &lt;/div&gt;");

	} else {
		$('#resultMessage').html("<div class=\"alert alert-error span6\">" +
	  		"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>" +
	  		"<strong>Warning!</strong> Better check your JSON.</div>");
	}

};

$('button[data-action=validate]').bind('click', function () {
  $.get("validate", 
  		{ 
  			schema : schemaEditor.getValue(" "),
  			json : jsonEditor.getValue(" ")
  		},
			function(data){
				processResult(data);
			}, "json");
});

