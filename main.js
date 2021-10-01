const Scanner = require('./scanner');
const freq_inicial = 10.0
const freq_final = 18.0
const freq_step = 100
rf = new Scanner(freq_inicial, freq_final, freq_step);


rf.scan()