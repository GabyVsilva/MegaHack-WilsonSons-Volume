Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Nível de combustível por navio'
    },
    xAxis: {
        categories: ['Embarcação', 'Rebocador']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Nível de combustível'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Alto',
        data: [5, 3]
    }, {
        name: 'Médio',
        data: [2, 2]
    }, {
        name: 'Critico',
        data: [3, 4]
    }]
});