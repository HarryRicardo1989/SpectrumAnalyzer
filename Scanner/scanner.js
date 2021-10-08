const { execSync } = require("child_process");

class Scanner {
    constructor(freq_init, freq_end, freq_step, freq_gain) {
        this.freq_init = freq_init
        this.freq_end = freq_end
        this.freq_step = freq_step
        this.freq_gain = freq_gain
    };

    scan() {

        console.log(this.freq_init);
        console.log(this.freq_end);
        console.log(this.freq_step);
        console.log(this.freq_gain);
        execSync(`echo {\\\"scan\\\":[\`rtl_power -f ${this.freq_init}e6:${this.freq_end}e6:${this.freq_step}e3 -g ${this.freq_gain} -i 1 -1 -d 0 | awk '{print"["substr($0,index($0,$3))"],"}' | xargs | sed 's/.$//' | sed 's/nan/-200/g' \`]} > /opt/SpectrumAnalyzer/Scanner/scan.json`);
        execSync(`sed  -i 's/ /,/g' /opt/SpectrumAnalyzer/Scanner/scan.json ; sed  -i 's/,,-/,-/g' /opt/SpectrumAnalyzer/Scanner/scan.json ; sed  -i 's/,,/,/g' /opt/SpectrumAnalyzer/Scanner/scan.json`);
        return ;

    };
    readFileScan() {
        
        let jsonData = require('/opt/SpectrumAnalyzer/Scanner/scan.json');
        return jsonData;
    }
    writeFileScan(data) {

        let fs = require('fs');
        fs.writeFile('/opt/SpectrumAnalyzer/scanned.json', data, function (err) {
            if (err) return console.log(err);
            console.log('data is saved on /opt/SpectrumAnalyzer/scanned.json')
        })
        return "OK";
    }

}




module.exports = Scanner;