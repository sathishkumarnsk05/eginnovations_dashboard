Highcharts.chart('productionThisYear', {
    chart: {
        type: 'column',
        height: 80, // Set the desired height of the chart
        marginTop: -30, // Margin at the top to push the chart down
        marginBottom: 0 // Margin at the bottom
    },
    title: {
        text: null // Remove the title
    },
    subtitle: {
        text: null // Remove the subtitle
    },
    xAxis: {
        visible: false // Hide the x-axis
    },
    yAxis: {
        visible: false // Hide the y-axis
    },
    legend: {
        enabled: false // Remove the legend
    },
    tooltip: {
        enabled: false // Disable the tooltip
    },
    plotOptions: {
        column: {
            pointPadding: 0.4, // Space between bars
            groupPadding: 0.9 // Space between groups of bars
        }
    },
    exporting: {
        enabled: false // Disable the export button
    },
    series: [{
        name: 'Population',
        colors: [
            '#5625da',
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['Tokyo', 30],
            ['Delhi', 50],
            ['Shanghai', 30],
            ['Sao Paulo', 80],
            ['Mexico City', 65],
            ['Dhaka', 10],
            ['Cairo', 20],
            ['Beijing', 50],
            ['Mumbai', 30],
            ['Osaka', 35],
            ['Karachi', 50],
            ['Chongqing', 100],
            ['Istanbul', 25],
            ['Buenos Aires', 5],
        ],
        dataLabels: {
            enabled: false // Disable data labels
        }
    }]
});
