const fs = require('fs')

const loadInput = async (file) => { 
    let inputInfo = {
        upperR: {},
        input: []
    }
    let num = 0
    let rFile 
    try {
        //Carrega o conteúdo do arquivo no array
        rFile =fs.readFileSync(file).toString().split("\n")
    } catch (err) {
        return err.code
    }
    let startPosition
    for (const line in rFile) {
        if (num == 0){ //Pega canto superior direito
            const upperR = rFile[line].split(' ')
            inputInfo.upperR = { x: upperR[0], y: upperR[1] }
        } 
        else {
            if (rFile[line] != '') {
                const regex = /^[LMR]*$/ //Regex para verificar se é a linha de movimento 
                const move = rFile[line].match(regex)
                if (!move){
                    startPosition = rFile[line]
                } 
                else {
                    inputInfo.input.push({ 
                        startPosition: { 
                            x: Number(startPosition[0]), 
                            y: Number(startPosition[2]), 
                            coordinate: startPosition[4]
                        }, movements: move[0] })
                    startPosition = null
                }
            }
        }
        num++
    }
    return inputInfo
}

module.exports = { loadInput }