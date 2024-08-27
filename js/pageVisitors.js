Highcharts.chart('pageVisitors', {
    chart: {
        type: 'area',
        margin: 0, // Set all margins to 0
        spacing: [0, 0, 0, 0], // Remove all spacing
        backgroundColor: 'transparent', // Make the background color transparent
        height: 300
    },
    legend: {
        enabled: false // Hide the legend
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
        tickWidth: 0, // Hide X-axis ticks
        minPadding: 0, // Remove left padding
        maxPadding: 0 // Remove right padding
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
        useHTML: true, // Enable HTML formatting for the tooltip
        formatter: function () {
            return `
                <div style="border-radius: 20px; min-width: 60px; background-color: #ab65fe; padding: 10px; box-shadow: 0 0 10px #c077fe; text-align: center;">
                    <div style="font-size: 14px; color: #fff;"><strong>${this.y}</strong></div>
                </div>
            `;
        },
        backgroundColor: 'none', // Use transparent background for tooltip
        borderWidth: 0, // No border for the tooltip
        shadow: false, // Disable default shadow
        style: {
            color: '#333',
            fontSize: '14px',
        }
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
                    [0, '#efdfff'], // Blue color at top
                ]
            },
            lineColor: '#c077fe', // Line color for the area
            stacking: 'normal', // Make sure the area is stacked normally
            marker: {
                enabled: false // Disable markers on the line
            },
            lineWidth: 5, // Set line width for the waveform
            fillOpacity: 0 // Make background color of the area chart fully transparent
        }
    },
    series: [{
        name: 'India', // Name of the series
        data: [110, 100, 80, 95, 100, 115, 120, 130, 135, 130, 125, 110, 90, 80, 75, 74, 73, 60, 55, 50],
        color: Highcharts.getOptions().colors[0] // Set the line color
    }]
});
