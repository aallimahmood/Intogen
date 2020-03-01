
// function to load nationality combo box
function onLoad()
{	
	var req = {
				queryType:'COUNTRY'
			};

	$.ajax({
        type:'post',
        url:'http://localhost:3030/FindYourType',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	var nationalityBox = document.getElementById('nationalityCmbBox');
        	nationalityBox.innerHTML = '';
        	for(var i=0; i<res.length; i++)
			{
				var option = document.createElement("option");
  				option.text = res[i];
  				nationalityBox.add(option);
			}
        }
    })
}
// Event when bachelor rad btn clicked
function bachelorRadClicked()
{
	var req = {
				queryType:'STUDY_PROG',
				For: 'BACHELOR'
			};

	$.ajax({
        type:'post',
        url:'http://localhost:3030/FindYourType',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	var studyProgBox = document.getElementById('studyProgCmbBox');
        	studyProgBox.innerHTML = '';
        	for(var i=1; i<res.length; i++)
			{
				var option = document.createElement("option");
  				option.text = res[i];
  				studyProgBox.add(option);
			}
			studyProgValChanged();
        }
    })
}
// Event when master rad btn clicked
function masterRadClicked()
{
	var req = {
				queryType:'STUDY_PROG',
				For: 'MASTER'
			};

	$.ajax({
        type:'post',
        url:'http://localhost:3030/FindYourType',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	var studyProgBox = document.getElementById('studyProgCmbBox');
        	studyProgBox.innerHTML = '';
        	for(var i=1; i<res.length; i++)
			{
				var option = document.createElement("option");
  				option.text = res[i];
  				studyProgBox.add(option);
			}
			studyProgValChanged();
        }
    })
}
// Event to change study program, to get courses for that program
function  studyProgValChanged()
{
	var studyProgBox = document.getElementById('studyProgCmbBox');
	var studyProg = studyProgBox.value;
	var queryFor = 'BACHELOR';

	var bachelorRadBtn = document.getElementById('bachelorRadBtn');
	var masterRadBtn = document.getElementById('masterRadBtn');

	if(bachelorRadBtn.checked)
		queryFor = 'BACHELOR';
	if(masterRadBtn.checked)
		queryFor = 'MASTER';

	var req = {
				queryType:'COURSES',
				For: queryFor,
				prog: studyProg
			};

	$.ajax({
        type:'post',
        url:'http://localhost:3030/FindYourType',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	var likedCourseBox = document.getElementById('likedCourseCmbBox');
        	var dislikedCourseBox = document.getElementById('dislikedCourseCmbBox');

        	likedCourseBox.innerHTML = '';
        	dislikedCourseBox.innerHTML = '';

        	for(var i=0; i<res.length; i++)
			{
				var option = document.createElement("option");
  				option.text = res[i];
  				var option2 = document.createElement("option");
  				option2.text = res[i];
  				likedCourseBox.add(option);
  				dislikedCourseBox.add(option2);
			}
        }
    })
}
// skip button clicked
function skipClicked(){
	document.location.href = 'Result.html';

}
// submit button clicked
function submitClicked()
{

	var label = 'labelQuestion';
	var question = 'question';

	var typeToFind={};

	for(var i=1; i<41;i++)
	{
		var labelText = label + i;
		var questionText = question + i;

		var text = document.getElementById(labelText).innerText;
		var value = document.getElementById(questionText).checked?'Agree':'Disagree';

		typeToFind[text] = value;
	}

	var bachelorRadBtn = document.getElementById('bachelorRadBtn');
	var masterRadBtn = document.getElementById('masterRadBtn');
	var degreeVal = 'Master';
	if(bachelorRadBtn.checked)
		degreeVal = 'Bachelors';
	if(masterRadBtn.checked)
		degreeVal = 'Master';
	typeToFind['What are you currently studying?'] = degreeVal;


	var studyProgBox = document.getElementById('studyProgCmbBox');
	var studyProgVal = studyProgBox.value;
	if(studyProgVal == '')
		studyProgVal = 'M.Sc. Computer Engineering (Intelligent Networked Systems)';
	typeToFind['Please choose your study program'] = studyProgVal;

	var likedCourseBox = document.getElementById('likedCourseCmbBox');
	var likedCourseVal = likedCourseBox.value;
	typeToFind['Please choose a course which you liked the most'] = likedCourseVal;

	var likedGpa = document.getElementById('likedGpa');
	var likedGpaVal = likedGpa.value;
	typeToFind['Please select approximate gpa/grade which you have achieved  for the liked course?'] = likedGpaVal;

	var dislikedCourseBox = document.getElementById('dislikedCourseCmbBox');
	var dislikedCourseVal = dislikedCourseBox.value;
	typeToFind['Please choose a course which you disliked the most'] = dislikedCourseVal;

	var dislikedGpa = document.getElementById('dislikedGpa');
	var dislikedGpaVal = dislikedGpa.value;
	typeToFind['Please select approximate gpa/grade which you have achieved  for the disliked course?'] = dislikedGpaVal;

	var femaleRadBtn = document.getElementById('femaleRadBtn');
	var maleRadBtn = document.getElementById('maleRadBtn');
	var otherRadBtn = document.getElementById('otherRadBtn');
	var genderVal = 'Male';
	if(femaleRadBtn.checked)
		genderVal = 'Female';
	if(maleRadBtn.checked)
		genderVal = 'Male';
	if(otherRadBtn.checked)
		genderVal = 'Other';
	typeToFind['Biological Gender'] = genderVal;

	var nationalityBox = document.getElementById('nationalityCmbBox');
	nationalityValue = nationalityBox.value;
	typeToFind['Nationality'] = nationalityValue;

	typeToFind['Please write your valid e-mail address. (Optional)'] = 'testEmail';

	var req = {
				queryType:'FIND_MY_TYPE',
				myData: typeToFind
			};

	$.ajax({
        type:'post',
        url:'http://localhost:3030/FindYourType',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	document.location.href = 'Result.html';
        	//console.log(res);
        }
    });
	

}
