
/* FUnction to get unique courses according to degree to a specific nationality and studyProgram
*
*/
function getUniqueCourses(data,nationality,degree,study_prog,callback)
{
  var output = []; // array to return
  // Getting objects from a degree name
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
	  
	  
     if( (loc_degree != data[i].Major) || (loc_nationality != data[i].Nationality) || (loc_study_prog != data[i].Study_program)) continue;
     if(data[i].Subject1 != 'INVALID')
      output.push(data[i].Subject1);
  	 if(data[i].Subject2!= 'INVALID')
      output.push(data[i].Subject2);
  }

  var outputRet = Array.from(new Set(output)); 
  
  callback(outputRet);
}
/*
* Function to get avg of male females according to styles, for specific nationality and degree in a specific course
* param: nationality
*/
function getCoursesAvgStyles(data,nationality,degree,study_prog,course,callback)
{
  var sumActivistMale = 0;
  var sumReflectorMale = 0;
  var sumTheoristMale = 0;
  var sumPragmatistMale = 0;

  var sumActivistFemale = 0;
  var sumReflectorFemale = 0;
  var sumTheoristFemale = 0;
  var sumPragmatistFemale = 0;
  
  var sumActivistOther = 0;
  var sumReflectorOther = 0;
  var sumTheoristOther = 0;
  var sumPragmatistOther = 0;

  var maleCount = 0;
  var femaleCount = 0;
  var otherCount = 0;

  for (var i =0 ; i < data.length ; i++) 
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
      if((data[i].Subject1 != course) && (data[i].Subject2 != course))
      	continue;
    if(data[i].Gender == 'Male')
    {
      sumActivistMale += Number(data[i].Activist);
      sumReflectorMale += Number(data[i].Reflector);
      sumTheoristMale += Number(data[i].Theorist);
      sumPragmatistMale += Number(data[i].Pragmatist);

      maleCount++;
    }
    else if(data[i].Gender == 'Female')
    {
      sumActivistFemale += Number(data[i].Activist);
      sumReflectorFemale += Number(data[i].Reflector);
      sumTheoristFemale += Number(data[i].Theorist);
      sumPragmatistFemale += Number(data[i].Pragmatist);
      femaleCount++;
    }
	else
	{
	  sumActivistOther += Number(data[i].Activist);
      sumReflectorOther += Number(data[i].Reflector);
      sumTheoristOther += Number(data[i].Theorist);
      sumPragmatistOther += Number(data[i].Pragmatist);
      otherCount++;
	}

  }
  const retObj = 
  {
    type1: {
      caption: 'Activists',
      avgMale: sumActivistMale/maleCount,
      avgFemale:sumActivistFemale/femaleCount,
	  avgOther: sumActivistOther/otherCount
    },
    type2: {
      caption: 'Reflectors',
      avgMale: sumReflectorMale/maleCount,
      avgFemale:sumReflectorFemale/femaleCount,
	  avgOther: sumReflectorOther/otherCount
    },
    type3: {
      caption: 'Theorist',
      avgMale: sumTheoristMale/maleCount,
      avgFemale:sumTheoristFemale/femaleCount,
	  avgOther: sumTheoristOther/otherCount
    },
    type4: {
      caption: 'Pragmatist',
      avgMale: sumPragmatistMale/maleCount,
      avgFemale:sumPragmatistFemale/femaleCount,
	  avgOther: sumPragmatistOther/otherCount
    },
    participantCount:{
      male: maleCount,
      female:femaleCount,
	  other: otherCount
    }
  }
  callback(retObj);
}

module.exports.getUniqueCourses = getUniqueCourses; 
module.exports.getCoursesAvgStyles = getCoursesAvgStyles;