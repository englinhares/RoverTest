const roverMove = (upperR, x, y, direction, movements) => {

    let coordenate = ''
    for (let i = 0; i < movements.length; i++)
    {
        // Pega próximo movimento
        let move = movements[i];
        // Verifica qual tipo do movimento 
        if (move == 'R') // Mudança de coordenada para a direita
            direction = (direction + 1) % 4;
        else if (move == 'L') //Mudança de coordenada para a esquerda
            direction = (4 + direction - 1) % 4;
        else // Mover
        {
            if (direction == 0){
                coordenate = 'N';
                y++;
            }
            else if (direction == 1){
                coordenate = 'E';
                x++;
            }
            else if (direction == 2){
                coordenate = 'S'
                y--;
            }
            else {
                coordenate = 'W'
                x--;
            }
        }
    }
    if( x > upperR.x || y > upperR.y ){
        return 'Out of bounds'
    }
    return { x, y, coordenate}
}

module.exports = { roverMove }