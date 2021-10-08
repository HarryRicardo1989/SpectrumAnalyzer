const Scanner = require('./scanner');
const ManupulaDados = require('./manipulaDados');

class MAKESCAN {
    InitScan(freq_inicial, freq_final, freq_step, freq_gain) {
        let rf = new Scanner(freq_inicial, freq_final, freq_step, freq_gain);
        let dadosFreq_dB = new ManupulaDados();
        rf.scan();
        let readscan = rf.readFileScan()["scan"];
        let adaptdata = dadosFreq_dB.montagemDados(readscan);
        rf.writeFileScan(adaptdata);
        return `{ "Scan": \{${adaptdata} \ } }`
    }
}

module.exports = MAKESCAN;
