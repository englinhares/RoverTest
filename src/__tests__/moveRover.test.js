const move = require('../moveRover')
const ROVER = require('../constants')

test('Deve mover robo', async () => {

    const moveInfo = {
        upperR: { x: '5', y: '5' },
        input: [
            { startPosition: { x: 1, y: 2, coordinate: 'N' }, move: 'LMLMLMLMM' },
            { startPosition: { x: 3, y: 3, coordinate: 'E' }, move: 'MMRMMRMRRM' }
        ]
    }
    
    const excpectdResp = [
        { x: 1, y: 3, coordenate: 'N' },
        { x: 5, y: 1, coordenate: 'E' }
    ]

    let i = 0
    for ( const input of moveInfo.input){
        const result = move.roverMove(
            moveInfo.upperR, 
            input.startPosition.x, 
            input.startPosition.y, 
            ROVER.DIRECTION[input.startPosition.coordinate],
            input.move)
        expect(result).toMatchObject(expect.objectContaining(excpectdResp[i]))
        i++
    }

})

test('Deve falhar ao mover robo fora da área', async () => {

    const moveInfo = {
        upperR: { x: '5', y: '5' },
        input: [
            { startPosition: { x: 3, y: 3, coordinate: 'E' }, move: 'MMRMMRMRRMM' }
        ]
    }

    const result = move.roverMove(
        moveInfo.upperR, 
        moveInfo.input[0].startPosition.x, 
        moveInfo.input[0].startPosition.y, 
        ROVER.DIRECTION[moveInfo.input[0].startPosition.coordinate], 
        moveInfo.input[0].move)
    expect(result).toBe('Out of bounds')

})