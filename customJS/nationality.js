
var lastCountry = '';
// function to send get unique nationalities
function getUniqueNationalities()
{
	$.get('http://localhost:3030/GetUniqueNationalities',function(data,status){
		var countryBox = document.getElementById('countryCmbBox');

		for(var i=0; i<data.length; i++)
		{
			var option = document.createElement("option");
  			option.text = data[i];
  			countryBox.add(option);
		}
		getNationalityAverages();
	});


}

//function to get nationality averages by country
function getNationalityAverages()
{
	var countryBox = document.getElementById('countryCmbBox');
	var req = {
		country:countryBox.value	};

	$.ajax({
        type:'post',
        url:'http://localhost:3030/GetUniqueNationalities',        
        contentType:'application/json',
        data:JSON.stringify(req),
          
        success:function(res)
        {
        	drawBarChart(res,'chart');
        	console.log(res);
        }
    })
    if(lastCountry != '')
    {
    	req = {
			country:lastCountry	};
	 		
	 	$.ajax({
        	type:'post',
        	url:'http://localhost:3030/GetUniqueNationalities',        
        	contentType:'application/json',
        	data:JSON.stringify(req),
          
        	success:function(res)
        	{
        		res.title.text = 'Last Overview "' + req.country + '"';
        		drawBarChart(res,'lastChart');
        		console.log(res);
        	}
    	})
	}
	lastCountry = countryBox.value;
}

// Function to draw bar chart
function drawBarChart(data,container)
{
	Highcharts.chart(container, {
    title: {
        text: data.title.text
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    xAxis: {
        categories: data.XAxis.categories
    },
    yAxis:{
        title: {text:'Percentage (%)'},
        max:100
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