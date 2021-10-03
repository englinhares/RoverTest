const move = require('./moveRover')
const load = require('./loadInput')
const ROVER = require('./constants')

const start = async () => {
    const resFile = await load.loadInput('./input.txt')
    if (resFile){
        for(const input of resFile.input){
            console.log(move.roverMove(
                resFile.upperR,
                input.startPosition.x,
                input.startPosition.y,
                ROVER.DIRECTION[input.startPosition.coordinate],
                input.movements
            ))
        }
    }
}

start()



