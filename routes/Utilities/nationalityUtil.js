/*
*	This JS file is responsible for reading raw data and give us valid arrays out of raw data which we will use for further parsing
*/


/*
* Function to get unique country names
*/
function getUniqueNationalities(data,callback){
  var flags = []; // it will keep key as index and we set the value to true for 1 occurance.
  var output = []; // array to return

  // processing header object
  for(var i=0; i<data.length;i++)
  {
     if( flags[data[i].Nationality]) continue;
      flags[data[i].Nationality] = true;
      output.push(data[i].Nationality);
  }
  
  callback(output);
}
/*
* Function to get average of all learning styles of male and female separately for a nationality
*/
function getNationalityStylesAvg(data,nationality,callback)
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
      if(nationality != data[i].Nationality)
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
    title: {
      text: 'Learners\' Overview "' + nationality + '"',
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
module.exports.getUniqueNationalities = getUniqueNationalities;
module.exports.getNationalityStylesAvg = getNationalityStylesAvg;