
var csv = require('csv-parser');
var fs = require('fs');
var master_data_str = './routes/results/masters_study_program_with_courses.csv'; // master_data_str to read the csv file for master program validity
var bachelor_data_str = './routes/results/bachelors_study_program_with_courses.csv'; // master_data_str to read the csv file for master program validity
/*
* This JS file will be responsible for all the parsing now.
* It will convert the raw data which we have readed in main into our useable arrays
*/
const activist_question_indeices   = [2,4,10,13,18,21,24,30,37,39]; // these are the indices in raw_data where respective questions are located
const reflector_question_indeices  = [5,9,14,16,17,20,25,29,33,34]; // these are the indices in raw_data where respective questions are located
const theorist_question_indeices   = [1,6,8,11,15,22,27,32,35,40];  // these are the indices in raw_data where respective questions are located
const pragmatist_question_indeices = [3,7,12,19,23,26,28,31,36,38]; // these are the indices in raw_data where respective questions are located 
const study_info_indices 		   = [41,42,43,44,45,46,47,48,49];  // [Major,StudyProgram,Subject1,GPA1,Subject2,GPA2,Gender,Nationality,E-mail]

/* Function to find personalized type of a participant*/
function calculateMyType(input,callback)
{
	/* Adding a timestamp to the start of the object, to re-use the logic */
	input = Object.assign({Timestamp:'INVALID'},input);

	input = checkValidity(input);	
	
	var activistScore = scoreActivist(input);
	var reflectorScore = scoreReflector(input);
	var pragmatistScore = scorePragmatist(input);
	var theoristScore = scoreTheorist(input);
	
	var strucObj = getStructuredData(input,activistScore,reflectorScore,theoristScore,pragmatistScore);

	//console.log(strucObj);
	callback(strucObj);

//	else
//	{
	//	bachelorProgValidityModule.readValidBachelorCoursesS(bachelor_data_str,val,function(val){	
	//		strucObj = val;		
	//	});
	//}

}
/* Function to find personalized type of a participant*/
function findMyType(data,callback)
{
	//console.log(data[data.length-1]);
	
	var lastData = data[data.length-1];
	const retObj = {
    title: {
      text: 'Your learning style preferences',
  			}, 
    barChartData:{
      data:[Number(lastData.Activist),Number(lastData.Theorist),Number(lastData.Reflector),Number(lastData.Pragmatist)],
      },
    XAxis:{
        categories: ['Activist','Theorist','Reflector','Pragmatist']
    	}
    }
    callback(retObj);

}
  
/*
* Function to check validity of liked and disliked course
*/
function checkValidity(input)
{
	if(input['Please choose a course which you liked the most'] == '')
	{
		input['Please choose a course which you liked the most'] = 'INVALID';
		input['Please select approximate gpa/grade which you have achieved  for the liked course?'] = 'INVALID';
	}
	if(input['Please choose a course which you disliked the most'] == '')
	{
		input['Please choose a course which you disliked the most'] = 'INVALID';
		input['Please select approximate gpa/grade which you have achieved  for the disliked course?'] = 'INVALID';
	}
	
	return input;
}
/*
* 	Function to get structured data
*	param: raw_data_obj
* 	param2: activist_score
* 	param3: reflector_score
* 	param4: theorist_score
* 	param5: pragmatist_score
*/
function getStructuredData(raw_data_obj,activist_score,reflector_score,theorist_score,pragmatist_score)
{
	var study_info_length = study_info_indices.length;
	var obj_keys = Object.keys(raw_data_obj);
	var loc_output = [];

	loc_output.push(activist_score);	
	loc_output.push(reflector_score);
	loc_output.push(theorist_score);
	loc_output.push(pragmatist_score);

	for(var i=0; i<study_info_length; i++)
	{
		loc_output.push(raw_data_obj[obj_keys[study_info_indices[i]]]);
	}	
	
	
	/* Assigning values to our file like structure */

	const row = 
	{
			Activist : loc_output[0],
			Reflector : loc_output[1],
			Theorist : loc_output[2],
			Pragmatist : loc_output[3],
			Major : loc_output[4],
			Study_program : loc_output[5],
			Subject1 : loc_output[6],
			Gpa1 : loc_output[7],
			Subject2 : loc_output[8],
			Gpa2 : loc_output[9],
			Gender : loc_output[10],
			Nationality : loc_output[11],
			E_mail : loc_output[12]
	}

	return row;
}
/*
*	Function to score Activist type
*	param:  raw_data_obj
* 	return: activist scores for all students
*/
function scoreActivist(raw_data_obj)
{
//	console.log('Length of activist questions index = ' + activist_question_indeices.length);
	var obj_keys = Object.keys(raw_data_obj);
	var length = activist_question_indeices.length;

	var single_student_score = 0;
	for(var i=0; i<length; i++)
	{
		if(raw_data_obj[obj_keys[activist_question_indeices[i]]] == 'Agree')
		{
			single_student_score++;
		}
	}
	single_student_score*=10;
	//console.log('Activist = ' + single_student_score);

	return single_student_score;
}
/*
*	Function to score Reflector type
*	param:  raw_data_obj
* 	return: reflector scores for all students
*/
function scoreReflector(raw_data_obj)
{
//	console.log('Length of reflector questions index = ' + reflector_question_indeices.length);
	var obj_keys = Object.keys(raw_data_obj);
	var length = reflector_question_indeices.length;

	var single_student_score = 0;
	for(var i=0; i<length; i++)
	{
		if(raw_data_obj[obj_keys[reflector_question_indeices[i]]] == 'Agree')
		{
			single_student_score++;
		}
	}
	single_student_score*=10;
	//console.log('Reflector = ' + single_student_score);

	return single_student_score;
}
/*
*	Function to score Theorist type
*	param:  raw_data_obj
* 	return: theorist scores for all students
*/
function scoreTheorist(raw_data_obj)
{
//	console.log('Length of reflector questions index = ' + reflector_question_indeices.length);
	var obj_keys = Object.keys(raw_data_obj);
	var length = theorist_question_indeices.length;

	var single_student_score = 0;
	for(var i=0; i<length; i++)
	{
		if(raw_data_obj[obj_keys[theorist_question_indeices[i]]] == 'Agree')
		{
			single_student_score++;
		}
	}
	single_student_score*=10;
	//console.log('Theorist = ' + single_student_score);

	return single_student_score;
}
/*
*	Function to score Pragmatist type
*	param:  raw_data_obj
* 	return: pragmatist scores for all students
*/
function scorePragmatist(raw_data_obj)
{
//	console.log('Length of reflector questions index = ' + reflector_question_indeices.length);
	var obj_keys = Object.keys(raw_data_obj);
	var length = pragmatist_question_indeices.length;

	var single_student_score = 0;
	for(var i=0; i<length; i++)
	{
		if(raw_data_obj[obj_keys[pragmatist_question_indeices[i]]] == 'Agree')
		{
			single_student_score++;
		}
	}
	single_student_score*=10;
	//console.log('Pragmatist = ' + single_student_score);

	return single_student_score;
}

module.exports.calculateMyType = calculateMyType;
module.exports.findMyType = findMyType;