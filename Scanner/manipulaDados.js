

class ManipulaDados{

    montagemDados(scanned) {
        var Freq = []
        var db = []
        var data = []
        scanned.forEach(coletaStep => {
            let N = 0
            coletaStep.slice(4,).forEach(element => {
                let hz_low = coletaStep[0]
                let hz_step = coletaStep[2]
                let frequencia = ((hz_low + N * hz_step) / 1000000).toFixed(3)
                N++

                //Freq.push(frequencia)
                //db.push(element)
                data.push(`[${frequencia},${element}]`)
            });
        });
        
        return `[${data}]`//`"freq":[${Freq}], "db":[${db}] `

    }
}

module.exports = ManipulaDados;
