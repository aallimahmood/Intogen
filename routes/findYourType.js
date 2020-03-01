var express = require('express');
var router = express.Router();
var path = require('path');
var readModule = require('./Utilities/readUtil');
var writeModule = require('./Utilities/writeUtil');
var findMyTypeModule = require('./Utilities/findType.js');

var data_str = './routes/results/out.csv';
var master_data_str = './routes/results/masters_study_program_with_courses.csv';
var bachelor_data_str = './routes/results/bachelors_study_program_with_courses.csv';
var country_data_str = './routes/results/countriesList.csv';

/* GEt post request to send unique nationalities*/
router.post('/', function(req, res) {

	var request = req.body;

	if(request.queryType == 'COUNTRY')
	{
		readModule.readCountries(country_data_str,function(val){
			res.send(val);
		})	
	}
	else if(request.queryType == 'STUDY_PROG')
	{
		if(request.For == 'MASTER')
		{
			readModule.readPrograms(master_data_str,function(val){
				res.send(val);
			});
		}
		else
		{
			readModule.readPrograms(bachelor_data_str,function(val){
				res.send(val);
			});
		}
	}
	else if(request.queryType == 'COURSES')
	{
		if(request.For == 'MASTER')
		{
			readModule.readProgramCourses(master_data_str,request.prog,function(val){
				res.send(val);
			});
		}
		else
		{
			readModule.readProgramCourses(bachelor_data_str,request.prog,function(val){
				res.send(val);
			});
		}
	}
	else if(request.queryType == 'FIND_MY_TYPE')
	{
		readModule.readData(data_str,function(data){
			findMyTypeModule.calculateMyType(request.myData,function(val){
			data.push(val);
			writeModule.writeData(data,function(){
				console.log('The CSV file was written successfully')
				res.send("success");
			});
			//console.log(val);
			
		});
			
	});
	}

});

module.exports = router;