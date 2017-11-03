//Basic required imports
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//Creating instance of express for ap and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//GET call to return json formats natural and unix date
app.get('/dateValues/:dateVal', function(req, res, next){
var dateVal = req.params.dateVal;	
//Options for formatting date in natural date view
var dateFormattingOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};
if(isNaN(dateVal)){
	var naturalDate = new Date(dateVal);
	naturalDate = naturalDate.toLocaleDateString("en-US", dateFormattingOptions);
	var unixDate = new Date(dateVal).getTime()/1000;
}
else{
	var unixDate = dateVal;
	var naturalDate = new Date(dateVal * 1000);
	naturalDate = naturalDate.toLocaleDateString("en-US", dateFormattingOptions);
}

res.json({unix: unixDate, natural: naturalDate}) ;

});


app.listen(3000, function(){
	console.log('working');
});