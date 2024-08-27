document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('monthlyTrends').getContext('2d');

    const data = {
        labels: ['Televisions', 'Laptops', 'Mobiles', 'Tablets', 'Wearables'], // 5 categories
        datasets: [{
            label: 'Product Sales',
            data: [30, 20, 25, 20, 10], // Corresponding values for each category
            backgroundColor: [
                'rgba(54, 162, 235, 0.9)',  // Light blue
                'rgba(75, 192, 192, 0.9)',  // Light green
                'rgba(255, 206, 86, 0.9)',  // Light yellow
                'rgba(153, 102, 255, 0.9)', // Light purple
                'rgba(255, 159, 64, 0.9)'   // Light orange
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',  // Blue
                'rgba(75, 192, 192, 1)',  // Green
                'rgba(255, 206, 86, 1)',  // Yellow
                'rgba(153, 102, 255, 1)', // Purple
                'rgba(255, 159, 64, 1)'   // Orange
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'polarArea',
        data: data,
        options: {
            scales: {
                r: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    };

    const myPolarAreaChart = new Chart(ctx, config);
});

