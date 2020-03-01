var express = require('express');
var router = express.Router();
var path = require('path');
var nationalityModule = require('./Utilities/nationalityUtil');
var readModule = require('./Utilities/readUtil');

var data_str = './routes/results/out.csv';

/* GEt  request to send unique nationalities*/
router.get('/', function(req, res) {
	readModule.readData(data_str,function(data){
		nationalityModule.getUniqueNationalities(data,function(uNationalities){
			res.send(uNationalities);
		})
	})

});
/* GEt post request to send unique nationalities*/
router.post('/', function(req, res) {

	var nationality = req.body.country;
	readModule.readData(data_str,function(data){
		nationalityModule.getNationalityStylesAvg(data,nationality,function(aNationalities){
			res.send(aNationalities);
		})
	})

});

module.exports = router;
