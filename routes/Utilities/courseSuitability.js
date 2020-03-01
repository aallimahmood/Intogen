/*
* function to find suitability
*/
function findCoursesSuitability(data,onActivist,onTheorist,onReflector,onPragmatist,callback)
{
	const mySuitabilty = data[data.length-1];
	var retVal = mySuitabilityFun(data,mySuitabilty,onActivist,onTheorist,onReflector,onPragmatist);

	callback(retVal);
}

function mySuitabilityFun(data,mySuitibility,onActivist,onTheorist,onReflector,onPragmatist)
{

	var courseListSum = [];
	var courseListCounter = [];
	var subject1Count = 0;
	var subject2Count = 0;

	var suitabilityparamCount = 4;

	if(onActivist == 'false')
		suitabilityparamCount--;
	if(onTheorist == 'false')
		suitabilityparamCount--;
	if(onReflector == 'false')
		suitabilityparamCount--;
	if(onPragmatist == 'false')
		suitabilityparamCount--;

	for(var i=0; i < data.length-1; i++)
	{
		if((data[i].Major != mySuitibility.Major) || (data[i].Study_program != mySuitibility.Study_program))
			continue;

		var similarity = 0;
		if(data[i].Subject1 != 'INVALID')
		{
			if(!courseListSum[data[i].Subject1])
				courseListSum[data[i].Subject1] = similarity;
			if(!courseListCounter[data[i].Subject1])
				courseListCounter[data[i].Subject1] = similarity;

		}
		if(data[i].Subject2 != 'INVALID')
		{
			if(!courseListSum[data[i].Subject2])
				courseListSum[data[i].Subject2] = similarity;
			if(!courseListCounter[data[i].Subject2])
				courseListCounter[data[i].Subject2] = similarity;
		}


		var simAct = 0;
		var simTheo = 0;
		var simRefl = 0;
		var simPrag = 0;

		if(onActivist == 'true')
			simAct = 100 - Math.abs(data[i].Activist - mySuitibility.Activist);
		if(onTheorist == 'true')
			simTheo = 100 - Math.abs(data[i].Theorist- mySuitibility.Theorist);
		if(onReflector == 'true')
			simRefl = 100 - Math.abs(data[i].Reflector - mySuitibility.Reflector);
		if(onPragmatist == 'true')
			simPrag = 100 - Math.abs(data[i].Pragmatist - mySuitibility.Pragmatist);


		similarity = simAct + simRefl + simTheo + simPrag;

		if(data[i].Subject1 != 'INVALID')
		{
			courseListSum[data[i].Subject1] += similarity;
			courseListCounter[data[i].Subject1] ++;
		}
		if(data[i].Subject2 != 'INVALID')
		{
			courseListSum[data[i].Subject2] += similarity;
			courseListCounter[data[i].Subject2] ++;
		}
	}

	/* Finding last average */
	var keys= Object.keys(courseListSum);
	var finalList = [];
	var sortable = [];
	for(var i = 0; i < keys.length; i++)
	{
		finalList[keys[i]] = (courseListSum[keys[i]] / courseListCounter[keys[i]]) / suitabilityparamCount;
		sortable.push([keys[i],finalList[keys[i]],courseListCounter[keys[i]]]);
	}
	/* applying sort here*/
	sortable.sort(function(a, b) {
    return b[1] - a[1] ;
	});

	
	var courses = [];
	var avgs = [];
	var courseParticipantCount = [];

	sortable.forEach(function(item){
		courses.push(item[0]);

		avgs.push(item[1]);

		var loc ={
			name:item[0],
			y:item[2]
		}
		courseParticipantCount.push(loc);
	})

	/* Object to return*//*
	var finalObj = {
		SuitableCourses: courses,
		SuitableCoursesAvg: avgs,
		SuitableCoursesPCount: courseParticipantCount
	}*/
	const retObj = {
    title: {
      text: 'Courses you might like to study',
      subtitle: mySuitibility.Study_program
  			}, 
    barChartData:{
      data:avgs,
      },
    pieChartData:{
    	data:courseParticipantCount
    },
    XAxis:{
        categories: courses
    	}
    }

	return retObj;
}

module.exports.findCoursesSuitability = findCoursesSuitability;