# RoverTest

Projeto simula o deslocamento de um Robo em um plano cartesiano.<BR>
Ele funciona a partir da leitura do arquivo ./input.txt <BR>
Neste arquivo a primeira linha indica as coordenadas x,y do canto superior direito.<BR>
O restante das entradas são em duas linhas:<BR>
  A primeira define o ponto de partida (x,y) e a direção do robo, exemplo: 1 2 N<BR>
  A segunda linha é o movimento que o robo deve fazer neste plano e os movimentos são:<BR>
    L move o vetor do robo 90 graus a esquerda.<BR>
    R move o vetor do robo 90 gras a direita.<BR>
    M move o roba uma casa para frente na direção do vetor que ele se encontra.<BR><BR>
    
A saída a coordenada (x,y) destino com o vetor para onde ele está se movendo, exemplo 1 3 N<BR><BR>

# INSTALL

git clone https://github.com/englinhares/RoverTest.git <BR>
yarn install

# RUN

yarn start

# TEST

yarn test
