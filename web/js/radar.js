Highcharts.chart('container', {
    data: {
        table: 'freq',
        startRow: 1,
        endRow: 17,
        endColumn: 2
    },

    chart: {
        polar: true,
        type: 'column',
        background: 'white'

    },

    title: {
        text: 'Radar por direção de navio'
    },

    pane: {
        size: '95%'
    },

    xAxis: {
        tickmarkPlacement: 'on'
    },

    yAxis: {
        min: 0,
        endOnTick: false,
        showLastLabel: true,
        labels: {
            formatter: function () {
                return this.value + '';
            }
        },
        
    },

    plotOptions: {
        series: {
            stacking: 'normal',
        }
    }
});

