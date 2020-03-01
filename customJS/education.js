var lastSeen = {};
// function to plot graphs on load
function onLoad()
{
	var degreeBox = document.getElementById('degreeCmbBox');
	var studyProgBox = document.getElementById('studyProgCmbBox');
	var req = {
				query: 'ISE',
				degree:degreeBox.value,
				studyProg:studyProgBox.value
				};
	$.ajax({
        type:'post',
        url:'http://localhost:3030/GetEducationOverview',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	lastSeen = res;
        	//console.log(res);
        	drawBarChart(res,'chart');
        	
        }
    })
    

}
// function to plot graphs on load
function lastSeenFun()
{
            lastSeen.title.text = lastSeen.title.text.replace("Learners' Overview","Last Overview");
        	//console.log(res);
        	drawBarChart(lastSeen,'lastChart');
        	
}
// Degree value changed in selection box
function degreeValChanged(){
	var degreeBox = document.getElementById('degreeCmbBox');
	var studyProgBox = document.getElementById('studyProgCmbBox');
	studyProgBox.innerHTML = '';	
	var req = {
				query: 'Degree',
				degree:degreeBox.value,
				studyProg:studyProgBox.value
				};
	$.ajax({
        type:'post',
        url:'http://localhost:3030/GetUniqueStudyProg',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	var option = document.createElement("option");
  			studyProgBox.add(option);
        	for(var i=0; i<res.length; i++)
			{
				var option = document.createElement("option");
  				option.text = res[i];
  				studyProgBox.add(option);
			}
			onLoad();
			lastSeenFun();
			lastSeen = res;
        	//console.log(res);
        }
    })
	
    

}
function studyProgValChanged(){
	var degreeBox = document.getElementById('degreeCmbBox');
	var studyProgBox = document.getElementById('studyProgCmbBox');
	var req = {
		query: 'StudyProg',
				degree:degreeBox.value,
				studyProg:studyProgBox.value
				};
	$.ajax({
        type:'post',
        url:'http://localhost:3030/GetUniqueStudyProg',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	onLoad();	
        	lastSeenFun();
			lastSeen = res;
        	//console.log(res);
        }
    })

}
// Function to draw bar chart
function drawBarChart(data,container)
{
	Highcharts.chart(container, {
    title: {
        text: data.title.text
    },
    xAxis: {
        categories: data.XAxis.categories
    },
    yAxis:{
        title: {text:'Percentage (%)'},
        max:100
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    labels: {
        items: [{
            html: data.piChart.html,
            style: {
                left: '60px',
                top: '0px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Male',
        data: data.barChartData.maleData
    }, {
        type: 'column',
        name: 'Female',
        data: data.barChartData.femaleData
    }, {
        type: 'column',
        name: 'Other',
        data: data.barChartData.otherData
    }, 
    {
        type: 'pie',
        name: data.piChart.html,
        data: [{
            name: 'Male',
            y: data.piChart.participantCount.male,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'Female',
            y: data.piChart.participantCount.female,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'Other',
            y: data.piChart.participantCount.other,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }],
        center: [90, 25],
        size: 60,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});
}