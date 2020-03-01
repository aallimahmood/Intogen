// function to plot graphs on load
function onLoad()
{
	$.get('http://localhost:3030/Results',function(data,status){
		drawBarChart(data,'chart');
		
	});

	getSuitibleCourses();

	
}
// function to query for course suitibility
function getSuitibleCourses()
{
	var activistChkBox = document.getElementById('activistChkBox');
	var theoristChkBox = document.getElementById('theoristChkBox');
	var reflectorChkBox = document.getElementById('reflectorChkBox');
	var pragmatistChkBox = document.getElementById('pragmatistChkBox');


	var req = {
				activist:activistChkBox.checked?'true':'false',
				theorist:theoristChkBox.checked?'true':'false',
				reflector:reflectorChkBox.checked?'true':'false',
				pragmatist:pragmatistChkBox.checked?'true':'false'
			};
			console.log(req);
	$.ajax({
        type:'post',
        url:'http://localhost:3030/Results',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	console.log(res);
        	drawBarChart(res,'suggestionChart')	;
        	drawPiChart(res,'suggestionCountChart');
        }
    })	
}
//function to draw bar charts
function drawBarChart(obj,container)
{
	var chart = Highcharts.chart(container, {
    title: {
        text: obj.title.text
    },
    subtitle:{
        text: obj.title.subtitle
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
    },
    xAxis: {
        categories: obj.XAxis.categories
    },
    yAxis:{
        title: {text:'Percentage (%)'},
        max:100
    },
    series: [{
        type: 'column',
        colorByPoint: true,
        data:  obj.barChartData.data,
        showInLegend: false
    }]

});
}

//function to draw pie chart for suggested courses count
function drawPiChart(obj,container)
{

var chart = Highcharts.chart(container, {
    title: {
        text: 'Courses weightage'
    },
    subtitle:{
        text: obj.title.subtitle
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    xAxis: {
        categories: obj.XAxis.categories
    },
    yAxis:{
        title: {text:'Weightage'},
    },
    series: [{
        type: 'column',
        colorByPoint: true,
        data:  obj.pieChartData.data,
        showInLegend: false
    }]

});

	/*Highcharts.chart(container, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'bar',
        polar:true
    },
    xAxis: {
        categories: obj.XAxis.categories
    },
    yAxis:{
        title: {text:'Weightage'},
    },
    title: {
        text: 'Courses weightage'
    },
    subtitle:{
        text: obj.title.subtitle
    },
    tooltip: {
       // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y} '
            }
        },
        series: {
            label: {
                connectorAllowed: false
            },
        }
    },
    series: [{
        name: 'Participant count',
        colorByPoint: true,
        data: obj.pieChartData.data
    }]
});*/
}