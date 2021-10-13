var urlApi = `${document.location.origin}/${document.location.pathname}`//${document.location.pathname}`

let freq_inicial = 88;
let freq_final = 108;
let freq_step = 10;
let freq_gain = 20;
var dataScan = [];

// Create the chart
// Create the chart
Highcharts.chart('container', {


    rangeSelector: {
        selected: 1
    },

    title: {
        text: 'AAPL Stock Price'
    },

    series: [{
        name: 'AAPL',
        data: dataScan,
        tooltip: {
            valueDecimals: 2
        }
    }]
});




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
        globalThis.dataScan = dataScan;
    });
    setTimeout(updatejson, 1000)

};

updatejson();