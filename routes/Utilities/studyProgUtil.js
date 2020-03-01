/* 
*	FUnction to get unique courses according to degree and studyProgram
*/
function getUniqueStudyProg(data,nationality,degree,callback)
{
  var output = []; // array to return
  // Getting objects from a degree name
  for(var i=0; i<data.length;i++)
  {
	  var loc_nationality = nationality;
	  var loc_degree = degree;
	  
	  if(loc_nationality == '')
		  loc_nationality = data[i].Nationality;
	  if(loc_degree == '')
		  loc_degree = data[i].Major;
	  
     if( (loc_nationality != data[i].Nationality) || (loc_degree != data[i].Major)) continue;
      output.push(data[i].Study_program);
  }

  var outputRet = Array.from(new Set(output)); 
  
  callback(outputRet);
}
/*
* Function to get avg of male females according to styles, for specific nationality and degree in a specific study program
* param: nationality
*/
function getStudyProgAvgStyles(data,nationality,degree,study_prog,callback)
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
	  
      if((loc_nationality != data[i].Nationality) || (loc_degree != data[i].Major) || (loc_study_prog != data[i].Study_program))
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
  var titleStr = "Learners' Overview ISE";

  if(nationality != '')
    titleStr = titleStr + ' (' + nationality + ')';
  if(degree != '')
    titleStr = titleStr + ' (' + degree + ')';
  if(study_prog != '')
    titleStr = titleStr + ' ('+ study_prog +')';


  const retObj = 
  {
    title: {
      text: titleStr
  },
    piChart:{
    html:'Total Participants',
    participantCount:{
        male: maleCount,
        female:femaleCount,
        other: otherCount
      }   
  },
    barChartData:{
      maleData:[sumActivistMale/maleCount,sumTheoristMale/maleCount,sumReflectorMale/maleCount,sumPragmatistMale/maleCount],
      femaleData:[sumActivistFemale/femaleCount,sumTheoristFemale/femaleCount,sumReflectorFemale/femaleCount,sumPragmatistFemale/femaleCount],
      otherData:[sumActivistOther/otherCount,sumTheoristOther/otherCount,sumReflectorOther/otherCount,sumPragmatistOther/otherCount]
      },
    XAxis:{
        categories: ['Activist','Theorist','Reflector','Pragmatist']
    }
    
  }
  callback(retObj);
}
module.exports.getUniqueStudyProg = getUniqueStudyProg;
module.exports.getStudyProgAvgStyles = getStudyProgAvgStyles;