

class ManipulaDados{

    montagemDados(scanned) {
        var dados = []
        scanned.forEach(coletaStep => {
            let N = 0
            coletaStep.slice(4,).forEach(element => {
                let hz_low = coletaStep[0]
                let hz_step = coletaStep[2]
                if (element == "nan") {
                    element = -90.000
                    print(element)
                }
                let frequencia = ((hz_low + N * hz_step) / 1000000).toFixed(3)
                N++

                //console.log(frequencia, element)
                //dados.push({frequencia:element,})
                dados[`${frequencia}`]= element
                //dados.push(JSON.parse(frequencia,element))
            });
        });
        
        return dados

        //console.log(Object.keys(dados))
    }
}

module.exports = ManipulaDados;
