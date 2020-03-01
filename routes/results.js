var express = require('express');
var router = express.Router();
var path = require('path');
var readModule = require('./Utilities/readUtil');
var findMyTypeModule = require('./Utilities/findType.js');
let courseSuitModule = require('./Utilities/courseSuitability.js');


var data_str = './routes/results/out.csv';

/* GEt  request to send unique nationalities*/
router.get('/', function(req, res) {

	readModule.readData(data_str,function(data){
				findMyTypeModule.findMyType(data,function(val){
			res.send(val)
		})

	})

})
/* GEt  request to send unique nationalities*/
router.post('/', function(req, res) {

	var request = req.body;

	readModule.readData(data_str,function(data){
			courseSuitModule.findCoursesSuitability(data,request.activist,request.theorist,request.reflector,request.pragmatist,function(val){
		res.send(val);
		})
	})

})

module.exports = router;