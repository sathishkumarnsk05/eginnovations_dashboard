Highcharts.chart('performanceChart', {
    chart: {
        type: 'area',
        backgroundColor: 'transparent' // Transparent background for the chart area
    },
    title: {
        text: '' // No title needed
    },
    subtitle: {
        text: '' // No subtitle
    },
    xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
            style: {
                color: '#8C8C8C', // Light gray color for x-axis labels
                fontSize: '12px'
            }
        },
        lineColor: '#E0E0E0' // Light gray line for x-axis
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            style: {
                color: '#8C8C8C', // Light gray color for y-axis labels
                fontSize: '12px'
            },
            formatter: function() {
                return this.value / 1000 + 'k'; // Format labels as 'k' for thousands
            }
        },
        gridLineColor: '#E0E0E0', // Light gray grid lines
        gridLineDashStyle: 'Dash'
    },
    tooltip: {
        useHTML: true,
        formatter: function () {
            return `
                <div style="padding: 10px; font-size: 14px; color: #333;">
                    <p><strong style="color: #333;">Revenue:</strong> <span style="color: #FF5722;">$ ${this.y.toFixed(2)}</span></p>
                    <p><strong style="color: #333;">Tasks Completed:</strong> <span style="color: #4CAF50;">28</span></p>
                    <p><strong style="color: #333;">Market Average:</strong> <span style="color: #673AB7;">$ 1,124.00</span></p>
                    <p><strong style="color: #333;">Tasks Created:</strong> <span style="color: #2196F3;">22</span></p>
                </div>
            `;
        },
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#ccc',
        borderRadius: 8,
        shadow: true
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
                    [0, 'rgba(33, 150, 243, 0.4)'], // Blue color at top
                    [1, 'rgba(33, 150, 243, 0)']  // Transparent at bottom
                ]
            },
            lineColor: '#3f51b5', // Line color for the area
            lineWidth: 3, // Width of the line
            marker: {
                enabled: true,
                fillColor: '#ffffff',
                lineWidth: 2,
                lineColor: '#3f51b5',
                radius: 4
            },
            states: {
                hover: {
                    lineWidth: 4 // Thicker line on hover
                }
            }
        }
    },
    series: [{
        name: 'Performance',
        showInLegend: false, // No legend needed
        data: [
            1524.00, 1800.00, 1300.00, 1700.00, 2000.00, 2100.00, 1800.00, 1600.00, 1750.00, 1900.00, 2000.00, 2200.00
        ]
    }]
});
