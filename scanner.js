const { execSync } = require("child_process");

class Scanner {
    constructor(freq_init, freq_end, freq_step) {
        this.freq_init = freq_init
        this.freq_end = freq_end
        this.freq_step = freq_step
    };

    scan() {

        console.log(this.freq_init);
        console.log(this.freq_end);
        console.log(this.freq_step);
        execSync(`echo {\\\"scan\\\":[\`rtl_power -f ${this.freq_init}e6:${this.freq_end}e6:${this.freq_step}e3 -g 30 -i 1 -1 -d 0 | awk '{print"["substr($0, index($0,$3))"],"}' | xargs | sed 's/.$//' \`]} > scan.json`);
        
        return ;

    };
    readFileScan() {
        
    }

}




module.exports = Scanner;