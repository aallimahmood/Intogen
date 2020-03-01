function getScatterPlot(data,nationality,degree,study_prog,callback)
{
	var gpaList = [];
	var activistList = [];
	var reflectorList = [];
	var theoristList = [];
	var pragmatistList = [];

	for(var i=0; i < data.length; i++)
	{
		var loc_nationality = nationality;
	  	var loc_degree = degree;
	  	var loc_study_prog = study_prog;	

	  	if(loc_nationality == '')
		  loc_nationality = data[i].Nationality;
	  	if(loc_degree == '')
		  loc_degree = data[i].Major;
	    if(loc_study_prog == '')
		  loc_study_prog = data[i].Study_program;

		if((loc_degree != data[i].Major) || (loc_nationality != data[i].Nationality) || (loc_study_prog != data[i].Study_program))
        continue;

    	if(data[i].Subject1 != 'INVALID' )
    	{
    		activistList.push([data[i].Activist,data[i].Gpa1]);
    		theoristList.push([data[i].Theorist,data[i].Gpa1]);
    		reflectorList.push([data[i].Reflector,data[i].Gpa1]);
    		pragmatistList.push([data[i].Pragmatist,data[i].Gpa1]);   			
    	}
    	if(data[i].Subject2 != 'INVALID' )
    	{
    		activistList.push([data[i].Activist,data[i].Gpa2]);	
    		theoristList.push([data[i].Theorist,data[i].Gpa2]);
    		reflectorList.push([data[i].Reflector,data[i].Gpa2]);
    		pragmatistList.push([data[i].Pragmatist,data[i].Gpa2]);
    	}
	}

	const retObj = {
		Activist:activistList,
		Theorist:theoristList,
		Reflector:reflectorList,
		Pragmatist:Pragmatist
	}

	callback(retObj);
/*
	var gpaAvg = 0;
	var activistAvg = 0;
	var reflectorAvg = 0;
	var theoristAvg = 0;
	var pragmatistAvg = 0;
	var count = 0;
	for(var i=0; i<data.length;i++)
	{
		var loc_nationality = nationality;
	  	var loc_degree = degree;
	  	var loc_study_prog = study_prog;	

	  	if(loc_nationality == '')
		  loc_nationality = data[i].Nationality;
	  	if(loc_degree == '')
		  loc_degree = data[i].Major;
	    if(loc_study_prog == '')
		  loc_study_prog = data[i].Study_program;

		if((loc_degree != data[i].Major) || (loc_nationality != data[i].Nationality) || (loc_study_prog != data[i].Study_program))
        continue;
    	if(data[i].Subject1 != 'INVALID' )
    	{
    		gpaList.push(Number(data[i].Gpa1));
    		activistList.push(Number(data[i].Activist));
    		theoristList.push(Number(data[i].Reflector));
    		reflectorList.push(Number(data[i].Theorist));
    		pragmatistList.push(Number(data[i].Pragmatist));

    		gpaAvg += Number(data[i].Gpa1);
    		activistAvg += Number(data[i].Activist);
    		theoristAvg += Number(data[i].Theorist);
    		pragmatistAvg += Number(data[i].Pragmatist);
    		reflectorAvg += Number(data[i].Reflector);
    		count++;
    	}
    	if(data[i].Subject2 != 'INVALID' )
    	{
    		gpaList.push(Number(data[i].Gpa2));
    		activistList.push(data[i].Activist);
    		theoristList.push(data[i].Reflector);
    		reflectorList.push(data[i].Theorist);
    		pragmatistList.push(data[i].Pragmatist);

    		gpaAvg += Number(data[i].Gpa2);
    		activistAvg += Number(data[i].Activist);
    		theoristAvg += Number(data[i].Theorist);
    		pragmatistAvg += Number(data[i].Pragmatist);
    		reflectorAvg += Number(data[i].Reflector);
    		count++;
    	}
	}*/
	/* calculating avgs	*/
	/*gpaAvg = gpaAvg / count;
	activistAvg = activistAvg / count;
	theoristAvg = theoristAvg / count;
	reflectorAvg = reflectorAvg / count;
	pragmatistAvg = pragmatistAvg / count;*/
	
	/* getting subtacted mean from values list*/

	/*var gpaSq = 0;

	var activistMul = 0;
	var reflectorMul = 0;
	var pragmatistMul = 0;
	var theoristMul = 0;

	var activistSq = 0;
	var reflectorSq = 0;
	var pragmatistSq = 0;
	var theoristSq = 0;

	for(var i=0; i<gpaList.length;i++)
	{
		var loc_aSub = (gpaAvg - gpaList[i])
		gpaSq += Math.floor((loc_aSub * loc_aSub)) ;

		var loc_activistSub = activistAvg - activistList[i];
		var loc_theoristSub = theoristAvg - theoristList[i];
		var loc_reflectorSub = reflectorAvg - reflectorList[i];
		var loc_pragmatistSub = pragmatistAvg - pragmatistList[i];

		activistMul   += Math.floor((loc_aSub * loc_activistSub));
		theoristMul   += Math.floor((loc_aSub * loc_theoristSub));
		reflectorMul  += Math.floor((loc_aSub * loc_reflectorSub));
		pragmatistMul += Math.floor((loc_aSub * loc_pragmatistSub));

		var loc_activistSq = loc_activistSub * loc_activistSub;
		var loc_theoristSq = loc_theoristSub * loc_theoristSub;
		var loc_reflectorSq = loc_reflectorSub * loc_reflectorSub;
		var loc_pragmatistSq = loc_pragmatistSub * loc_pragmatistSub

		activistSq += Math.floor(loc_activistSq);
		theoristSq += Math.floor(loc_theoristSq);
		reflectorSq += Math.floor(loc_reflectorSq);
		pragmatistSq += Math.floor(loc_pragmatistSq);
	}
	//console.log(gpaSq);
	//console.log(activistSq);
	//console.log(theoristSq);
	//console.log(reflectorSq);
	//console.log(pragmatistSq);

	var coRelActivist = activistMul / Math.sqrt(gpaSq * activistSq);
	var coRelReflector = reflectorMul / Math.sqrt(gpaSq * reflectorSq);
	var coRelTheorist = theoristMul / Math.sqrt(gpaSq * theoristSq);
	var coRelPragmatist = pragmatistMul / Math.sqrt(gpaSq * pragmatistSq);
	


	console.log(coRelActivist);
	console.log(coRelReflector);
	console.log(coRelTheorist);
	console.log(coRelPragmatist);
	//console.log(theoristList);*/
}

module.exports.getScatterPlot = getScatterPlot;