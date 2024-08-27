Highcharts.chart('emailSender', {
    chart: {
        type: 'pie',
        custom: {},
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label =
                        chart.renderer.label(
                            '<strong>28.8K</strong><br/>'+
                            '<span style="color: #a6a9b7;font-size: 1rem;font-weight: 600">Total Emails Senders</span>' 
                        )
                            .css({
                                color: '#000',
                                textAnchor: 'middle'
                            })
                            .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop -
                    (customLabel.attr('height') / 2);

                customLabel.attr({
                    x,
                    y
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`
                });
            }
        }
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 1,
            colors: [
                '#367afe',
                '#04d1e3',
                '#ffe063',
                '#f7f8fc',
                '#fa3b90'
            ],
            dataLabels: [{
                enabled: true,
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: -15,
                format: '{point.percentage:.0f}%',
                style: {
                    fontSize: '0.9em'
                }
            }],
            showInLegend: true
        }
    },
    series: [{
        name: 'Registrations',
        colorByPoint: true,
        innerSize: '65%',
        data: [{
            name: 'TWITTER',
            y: 23.9
        }, {
            name: 'PINTEREST',
            y: 12.6
        }, {
            name: 'OTHERS',
            y: 37.0
        }, {
            name: 'FACEBOOK',
            y: 26.4
        }, {
            name: 'GOOGLE',
            y: 26.4
        }]
    }]
});

