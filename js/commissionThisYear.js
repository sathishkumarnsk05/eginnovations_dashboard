Highcharts.chart('commissionThisYear', {
    chart: {
        type: 'line',
        height: 80 // Set the chart height to 80 pixels
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
        enabled: true, // Enable the tooltip
        shared: true, // Show all series values in the tooltip
        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            enableMouseTracking: true, // Ensure mouse tracking is enabled for tooltips
            pointStart: 2010, // Starting point for the x-axis data
            marker: {
                enabled: true, // Enable markers
                symbol: 'circle', // Set markers to circle shape
                radius: 5, // Set the size of the circles
                fillColor: '#ffffff', // White background for the marker
                lineWidth: 2 // Border width
            }
        }
    },
    series: [{
        name: 'Line 1',
        data: [
            90, 80, 75, 100, 100, 40, 60, 75
        ],
        color: '#ffc22d', // Line color
        marker: {
            lineColor: '#ffc22d' // Border color matching the line
        }
    }, {
        name: 'Line 2',
        data: [
            10, 5, 90, 10, 15, 5, 80, 75
        ],
        color: '#3159e4', // Line color
        marker: {
            lineColor: '#3159e4' // Border color matching the line
        }
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    enabled: false // Ensure the legend is off even for small screens
                }
            }
        }]
    }
});
