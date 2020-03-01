let nationalityModule = require('./nationalityUtil');
let degreeModule = require('./degreeUtil');
let coursesModule = require('./coursesUtil');
let studyProgModule = require('./studyProgUtil');
let findMyTypeModule = require('./findType.js');
let courseSuitModule = require('./courseSuitability.js');
let scatterPlotModule = require('./scatterPlotLib.js');

var data_str = '../results/out.csv'; // data_str to read the csv file
var testObj = { 'I have strong beliefs about what is right and wrong, good and bad.': 'Agree',
'I often act without considering the possible consequences.': 'Disagree',
'I have a reputation for saying what I think, simply and directly.': 'Disagree',
'I often find that actions based on feelings are as sound as those based on careful thought and analysis.': 'Disagree',
'I like the sort of work where I have time for thorough preparation and implementation.': 'Disagree',
'I regularly question people about their basic assumptions.': 'Agree',
'When I hear about a new idea or approach, I immediately start working out how to apply it in practice.': 'Disagree',
'I get on best with logical, analytical people and less well with spontaneous, ‘irrational’ people.': 'Disagree',
'I take care over how I interpret data and avoid jumping to conclusions.': 'Disagree',
'I am attracted more to novel, unusual ideas than to practical ones.': 'Disagree',
'I like to relate my actions to a general principle, standard or belief.': 'Disagree',
'In discussions, I like to get straight to the point.': 'Agree',
'I enjoy fun-loving spontaneous people.': 'Agree',
'I pay careful attention to detail before coming to a conclusion.': 'Agree',
'I find it difficult to produce ideas on impulse.': 'Disagree',
'In discussions, I enjoy watching the plotting and scheming of the other participants.': 'Disagree',
'I prefer to have as many sources of information as possible – the more information to think over the better.': 'Agree',
'I prefer to respond to events in a spontaneous, flexible way rather than plan things out in advance.': 'Disagree',
'I tend to be attracted to techniques such as flow charts, contingency plans etc.': 'Agree',
'I often get irritated by people who want to rush things.': 'Agree',
'It is more important to enjoy the present moment than to think about he past or future.': 'Agree',
'I tend to be a perfectionist.': 'Agree',
'In meetings, I put forward practical, realistic ideas.': 'Disagree',
'More often than not, rules are there to be broken.': 'Agree',
'I prefer to stand back from a situation and consider all the perspectives.': 'Disagree',
'I think written reports should be short and to the point.': 'Disagree',
'I believe that rational, logical thinking should win the day.': 'Disagree',
'In discussions, I get impatient with irrelevant issues and digressions.': 'Disagree',
'If I have a report to write, I tend to produce lots of drafts before settling on the final version.': 'Agree',
'I enjoy being the one that talks a lot.': 'Agree',
'In discussions, I often find I am a realist, keeping people to the point and avoiding wild speculations.': 'Disagree',
'In discussions with people I often find I am the most dispassionate and objective.': 'Disagree',
'In discussions I’m more likely to adopt a ‘low profile’ than to take the lead and do most of the talking.': 'Disagree',
'On balance, I do the listening rather than the talking.': 'Disagree',
'I tend to be tough on people who find it difficult to adopt a logical approach.': 'Disagree',
'Most times I believe the end justifies the means.': 'Disagree',
'I find the formality of having specific objectives and plans stifling.': 'Disagree',
'I do whatever is practical to get the job done.': 'Disagree',
'I quickly get bored with methodical, detailed work.': 'Disagree',
'I like meetings to be run on methodical lines, sticking to laid down agenda.': 'Disagree',
'What are you currently studying?': 'Master',
'Please choose your study program': 'M.Sc. Computer Engineering (Intelligent Networked Systems)',
'Please choose a course which you liked the most': 'Analysis of Structures',
'Please select approximate gpa/grade which you have achieved  for the liked course?': '3.0',
'Please choose a course which you disliked the most': 'Computer/Robot Vision',
'Please select approximate gpa/grade which you have achieved  for the disliked course?': '3.0',
'Biological Gender': 'Male',
Nationality: 'India',
'Please write your valid e-mail address. (Optional)': 'testData' }

const testObj2 = { 
  Activist: 100,
  Reflector: 40,
  Theorist: 70,
  Pragmatist: 20,
  Major: 'Master',
  Study_program: 'M.Sc. Computer Engineering (Intelligent Networked Systems)',
  Subject1: 'Analysis of Structures',
  Gpa1: '3.0',
  Subject2: 'Computer/Robot Vision',
  Gpa2: '3.0',
  Gender: 'Male',
  Nationality: 'India',
  E_mail: 'testData' }


/*
* Reading data 
*/
nationalityModule.readData(data_str,function(data){

	/* Test Function for scatter plot */
	scatterPlotModule.getScatterPlot(data,'','Master','',function(){

	})

	/* Test function to get types of runtime participant */
	findMyTypeModule.calculateMyType(testObj,function(val){
			data.push(testObj2);
			//console.log(val);
		});
	/* Test function to get last inserted object*/
	findMyTypeModule.findMyType(data,function(val){
			//console.log(val);
	})

	courseSuitModule.findCoursesSuitability(data,'true','true','true','true',function(val){
		//console.log(val);
	})

	/* test to get unique study programs  */
	studyProgModule.getUniqueStudyProg(data,'Pakistan','Bachelors',function(val){
		//console.log(val);
	})
	/* test avg of styles on a specific country,degree and study program  */
	studyProgModule.getStudyProgAvgStyles(data,'','','M.Sc. Power Engineering',function(val){
		console.log(val);
	})
	/* test avg of styles on specific country and degree in a specific course */
	coursesModule.getCoursesAvgStyles(data,'','Master','M.Sc. Computer Engineering (Intelligent Networked Systems)','Formale Spezifikation von Software-Systemen',function(val){
		//console.log(val);
	})
	/* test unique courses according to a degree*/
	coursesModule.getUniqueCourses(data,'Pakistan','','M.Sc. Computer Engineering (Intelligent Networked Systems)',function(val){
		//console.log(val);
	})
	/*test function to call to get averages of styles of a specific degree */
	degreeModule.getDegreeAvgStyles(data,'Pakistan','Bachelors',function(val){
		//console.log(val);
	})
	/*test function to call to get averages of styles for selected nationality*/
	nationalityModule.getNationalityStylesAvg(data,'Pakistan',function(val){
		//console.log(val);
	});
	/*test function for getting unique nationalities*/
	nationalityModule.getUniqueNationalities(data,function(nationalities){
		//console.log(nationalities);
	});

})