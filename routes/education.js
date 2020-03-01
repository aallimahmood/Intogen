var express = require('express');
var router = express.Router();
var path = require('path');
var readModule = require('./Utilities/readUtil');
var studyProgModule = require('./Utilities/studyProgUtil');

var data_str = './routes/results/out.csv';


/* GEt post request to send unique nationalities*/
router.post('/', function(req, res) {

	var query = req.body.query;
	var degree = req.body.degree;
	var studyProg = req.body.studyProg;
	if(degree == 'None')
		degree = '';
	if(studyProg == 'None')
		studyProg = '';
	console.log(degree);
	readModule.readData(data_str,function(data){
		if(query == 'ISE')
			studyProgModule.getStudyProgAvgStyles(data,'',degree,studyProg,function(val){
				res.send(val);
			})
		else if(query == 'Degree')
		studyProgModule.getUniqueStudyProg(data,'',degree,function(val){
			res.send(val);
		})
		else if(query == 'StudyProg')
		studyProgModule.getStudyProgAvgStyles(data,'',degree,studyProg,function(val){
			res.send(val);
		})	
	})

});

module.exports = router;