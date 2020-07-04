Highcharts.chart('container', {
    data: {
        table: 'freq',
        startRow: 1,
        endRow: 17,
        endColumn: 7
    },

    chart: {
        polar: true,
        type: 'column',
        background: 'white'

    },

    title: {
        text: 'Radar'
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
                return this.value + '%';
            }
        },
        reversedStacks: false
    },

    tooltip: {
        valueSuffix: '%'
    },

    plotOptions: {
        series: {
            stacking: 'normal',
            shadow: false,
            groupPadding: 0,
            pointPlacement: 'on'
        }
    }
});