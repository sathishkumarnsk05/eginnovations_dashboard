Highcharts.chart('analogyChart1', {
    chart: {
        type: 'line',
        // width: 100,
        height: 30, // Small height for the chart
        spacing: [0, 0, 0, 0], // Remove extra spacing around the chart
        margin: [0, 0, 0, 0], // Adjust margins to make the chart smaller
    },
    title: {
        text: null // No title
    },
    xAxis: {
        visible: false // Hide x-axis
    },
    yAxis: {
        visible: false // Hide y-axis
    },
    legend: {
        enabled: false // Hide legend
    },
    tooltip: {
        enabled: false // Disable tooltips
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false // No markers for data points
            },
            lineWidth: 2 // Set a thin line width
        }
    },
    series: [{
        data: [1, 3, 1, 2, 1, 5, 4,10,1,2], // Example data
        color: '#4bc74e'
    }]
});
Highcharts.chart('analogyChart2', {
    chart: {
        type: 'line',
        // width: 100,
        height: 30, // Small height for the chart
        spacing: [0, 0, 0, 0], // Remove extra spacing around the chart
        margin: [0, 0, 0, 0], // Adjust margins to make the chart smaller
    },
    title: {
        text: null // No title
    },
    xAxis: {
        visible: false // Hide x-axis
    },
    yAxis: {
        visible: false // Hide y-axis
    },
    legend: {
        enabled: false // Hide legend
    },
    tooltip: {
        enabled: false // Disable tooltips
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false // No markers for data points
            },
            lineWidth: 2 // Set a thin line width
        }
    },
    series: [{
        data: [1, 3, 1, 2, 1, 5, 4,10,1,2], // Example data
        color: '#d35331'
    }]
});