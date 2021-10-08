const Scanner = require('./scanner');
const ManupulaDados = require('./manipulaDados');

const freq_inicial = 1.7
const freq_final = 10.0
const freq_step = 3
const freq_gain = 100
rf = new Scanner(freq_inicial, freq_final, freq_step, freq_gain);
dadosFreq_dB = new ManupulaDados()
rf.scan()

let scanned = rf.readFileScan()["scan"]
//console.log(dadosFreq_dB.montagemDados(scanned))


//hz_low + N * hz_step