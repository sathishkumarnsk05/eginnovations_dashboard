Highcharts.chart('profitUnitChart', {
    chart: {
        type: 'area',
        backgroundColor: 'transparent', // Make the background color transparent
        // width: 245,
        height: 150, // Set the chart height to 80 pixels
    },
    legend: {
        enabled: false
    },
    title: {
        text: null // Hide the title
    },
    subtitle: {
        text: null // Hide the subtitle
    },
    xAxis: {
        labels: {
            enabled: false // Hide X-axis labels
        },
        gridLineWidth: 0, // Hide X-axis grid lines
        lineWidth: 0, // Hide X-axis line
        minorGridLineWidth: 0, // Hide minor X-axis grid lines
        tickWidth: 0 // Hide X-axis ticks
    },
    yAxis: {
        labels: {
            enabled: false // Hide Y-axis labels
        },
        title: {
            text: null // Hide Y-axis title
        },
        gridLineWidth: 0, // Hide Y-axis grid lines
        lineWidth: 0, // Hide Y-axis line
        minorGridLineWidth: 0, // Hide minor Y-axis grid lines
        tickWidth: 0 // Hide Y-axis ticks
    },
    tooltip: {
        enabled: false // Enable tooltip for interaction
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, 'RGB(44, 201, 172, 1)'], // Blue color at top
                    [1, 'RGB(44, 201, 172, .1)'],  // Transparent at bottom
                    [2, 'RGB(44, 201, 172, .5)'],  // Transparent at bottom
                    [3, 'RGB(44, 201, 172, .0)']  // Transparent at bottom
                ]
            },
            lineColor: 'hsl(169.06deg 64.9% 48.04%)', // Line color for the area
            stacking: 'normal', // Make sure the area is stacked normally
            marker: {
                enabled: false // Disable markers on the line
            },
            lineWidth: 5, // Set line width for the waveform
            fillOpacity: 0 // Make background color of the area chart fully transparent
        }
    },
    series: [{
        name: 'China', // Name of the series
        data: [10, 25, 26, 20, 30, 25, 50, 45, 55.5, 50, 45, 41, 43, 40],
        color: Highcharts.getOptions().colors[0] // Set the line color
    }]
});
