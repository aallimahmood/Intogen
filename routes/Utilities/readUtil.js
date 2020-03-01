var csv = require('csv-parser');
var fs = require('fs');

/*
* This is export function to be called in main.js parser file
*/
function readData(data_str,callback){

	var data_array = [];
	/*
	* Reading csv file
	*/
	fs.createReadStream(data_str)
  	.pipe(csv())
  	.on('data', (row) => {
  		data_array.push(row); 
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    callback(data_array);
   // console.log(_raw_data_array);
  });
}

/*
* Function to read study programs
*/
function readPrograms(data_str,callback)
{
	var data;
	/*
	* Reading csv file
	*/
	fs.createReadStream(data_str)
  	.pipe(csv())
  	.on('data', (row) => {
  		data = row; 
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    callback(Object.keys(data));
   // console.log(_raw_data_array);
  });
}

/*
* Function to read study programs's courses
*/
function readProgramCourses(data_str,prog,callback)
{
	console.log(prog);
	var data = [];
	/*
	* Reading csv file
	*/
	fs.createReadStream(data_str)
  	.pipe(csv())
  	.on('data', (row) => {
  		data.push(row); 
  })
  .on('end', () => {
    console.log('CSV file successfully processed');

    
    var retVal = [];

    for(var j=0; j<data.length;j++)
    {
    	var keys = Object.keys(data[j]);
    	for(var i=1; i<keys.length; i++)
    	{
    		if(prog != keys[i])
    			continue;
    		if(data[j][keys[i]] == '')
    			continue;
    		retVal.push(data[j][keys[i]]);
    	}
	}
    callback(retVal);
   // console.log(_raw_data_array);
  });
}
/*
* Function to read countries
*/
function readCountries(data_str,callback)
{
	var data = [];
	/*
	* Reading csv file
	*/
	fs.createReadStream(data_str)
  	.pipe(csv())
  	.on('data', (row) => {
  		data.push(row['﻿Countries']); 
  })
  .on('end', () => {
    console.log('CSV file successfully processed');

    callback(data);
   // console.log(_raw_data_array);
  });
}
module.exports.readData = readData;
module.exports.readPrograms = readPrograms;
module.exports.readProgramCourses = readProgramCourses;
module.exports.readCountries = readCountries;