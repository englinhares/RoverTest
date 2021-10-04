# RoverTest

Projeto simula o deslocamento de um Robo em um plano cartesiano.
Ele funciona a partir da leituro do arquivo ./input.txt
Neste arquivo a primeira linha indica as coordenadas x,y do canto superior direito.
O restante das entradas são em duas linhas:
  A primeira define o ponto de partida (x,y) e a direção do robo, exemplo: 1 2 N
  A segunda linha é o movimento que o robo deve fazer neste plano e os movimentos são:
    L move o vetor do robo 90 graus a esquerda.
    R move o vetor do robo 90 gras a direita.
    M move o roba uma casa para frente na direção do vetor que ele se encontra.
    
A saída a coordenada (x,y) destino com o vetor para onde ele está se movendo, exemplo 1 3 N

# INSTALL

git clone https://github.com/englinhares/RoverTest.git
yarn install

# RUN

yarn start

# TEST

yarn test
