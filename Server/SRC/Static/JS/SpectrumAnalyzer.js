var urlApi = `${document.location.origin}/${document.location.pathname}`//${document.location.pathname}`
let freq_inicial = 88;
let freq_final = 108;
let freq_step = 10;
let freq_gain = 20;

async function init(dataScan) {
    Highcharts.chart('container', {
        chart: {
            
            type: 'area',
            zoomType: 'x',
            panning: true,
            panKey: 'shift',
            scrollablePlotArea: {
                minWidth: 800
            }
        },

        caption: {
            text: 'Spectrum Analyzer Criar Space Systems'
        },

        title: {
            text: 'Spectrum Analyzer'
        },

        accessibility: {
            description: 'Spectrum Analyzer Criar Space Systems',
            landmarkVerbosity: 'one'
        },

        lang: {
            accessibility: {
                screenReaderSection: {
                    annotations: {
                        descriptionNoPoints: '{annotationText}, at distance {annotation.options.point.x}MHz, elevation {annotation.options.point.y} dB.'
                    }
                }
            }
        },

        credits: {
            enabled: false
        },



        xAxis: {
            labels: {
                format: '{value} MHz'
            },
            minRange: 1,
            title: {
                text: 'Frequency'
            },
            accessibility: {
                rangeDescription: `Range: ${freq_inicial} to ${freq_final}.`
            }
        },

        yAxis: {
            startOnTick: true,
            endOnTick: false,
            maxPadding: 0.35,
            title: {
                text: null
            },
            labels: {
                format: '{value} dB'
            },
            accessibility: {
                description: 'Decibels'
            }
        },

        tooltip: {
            headerFormat: 'Frequency: {point.x:.2f} MHz<br>',
            pointFormat: '{point.y} dB',
            shared: true
        },

        legend: {
            enabled: false
        },

        series: [{
            data: dataScan,
            lineColor: Highcharts.getOptions().colors[1],
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.5,
            name: 'dB',
            marker: {
                enabled: false
            },
            threshold: null
        }]

    })
};

changeparametros = function () {
    let freqinit = document.getElementById("freqinit").value;
    let freqend = document.getElementById("freqend").value;
    let freqstep = document.getElementById("freqstep").value;
    let fgain = document.getElementById("gain").value;
    freq_inicial = freqinit
    freq_final = freqend
    freq_step = freqstep
    gain = fgain

    let freqinitret = document.getElementById("freqinitret");
    let freqendret = document.getElementById("freqendret");
    let freqstepret = document.getElementById("freqstepret");
    let gainret = document.getElementById("gainret");
    freqinitret.innerHTML = `${freq_inicial}`
    freqendret.innerHTML = `${freq_final}`
    freqstepret.innerHTML = `${freq_step}`
    gainret.innerHTML = `${gain}`
}

async function updatejson() {

  
    await $.getJSON(`${urlApi}parameters/${freq_inicial}/${freq_final}/${freq_step}/${freq_gain}`, function (dataScan) {
        init(dataScan);
    });
    setTimeout(updatejson, 1000)
    
};

updatejson();