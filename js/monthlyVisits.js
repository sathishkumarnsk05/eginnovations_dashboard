Highcharts.chart('monthlyVisits', {
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
        colorByPoint: false, // Disable auto color by point to use specific colors
        groupPadding: 0,
        data: [
            { y: 30, color: '#f16856' }, // Red bar
            { y: 50, color: '#24bdb3' }, // Blue bar
            { y: 30, color: '#f16856' }, // Red bar
            { y: 80, color: '#24bdb3' }, // Blue bar
            { y: 65, color: '#f16856' }, // Red bar
            { y: 10, color: '#24bdb3' }, // Blue bar
            { y: 20, color: '#f16856' }, // Red bar
            { y: 50, color: '#24bdb3' }, // Blue bar
            { y: 30, color: '#f16856' }, // Red bar
            { y: 35, color: '#24bdb3' }, // Blue bar
            { y: 50, color: '#f16856' }, // Red bar
            { y: 100, color: '#24bdb3' }, // Blue bar
            { y: 25, color: '#f16856' }, // Red bar
            { y: 5, color: '#24bdb3' }   // Blue bar
        ],
        dataLabels: {
            enabled: false // Disable data labels
        }
    }]
});
