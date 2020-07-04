Highcharts.theme = {
    colors: ['#089914', '#d88e04', '#bb0303', '#DDDF00', '#24CBE5', '#64E572',   
             '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: '#2C3E6B'
    },
    title: {
        style: {
            color: '#ffffff',
            font: 'Roboto, sans-serif;'
        }
    },

    subtitle: {
        style: {
            color: 'white',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    legend: {
        itemStyle: {
            font: '10pt Roboto, sans-serif',
            color: 'white'
        },
        itemHoverStyle:{
            color: 'blue'
        }   
    }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);