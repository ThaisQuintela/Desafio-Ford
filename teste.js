const Regioes = ['Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste'];

const RotasRegionaisMapeadas = [['Norte', 'Nordeste'], ['Sudeste', 'Sul'], ['Sudeste', 'Centro-Oeste']];

const RegioesDestino = ['Sudeste', 'Norte', 'Centro-Oeste'];

let NovasRotasMapeadas = RotasRegionaisMapeadas;

const RegioesPercorridas = [];
let RegiaoAtual = '';

for(index = 0; index < 6; index++) {
  if (index === 0) {
    RegioesPercorridas.push(NovasRotasMapeadas[index][0]);
    RegioesPercorridas.push(NovasRotasMapeadas[index][1]);
    RegiaoAtual = NovasRotasMapeadas[index][1];
  } else {
    
    const ProximaRota = NovasRotasMapeadas.find((rota) => rota[0] === RegiaoAtual);
    if (ProximaRota === undefined) {
      if (RegioesDestino !== RegiaoAtual) {
        const ProximaRegiao = RegioesDestino.shift()
        NovasRotasMapeadas.push([RegiaoAtual, ProximaRegiao]);
      }
    } else {
      RegioesPercorridas.push(ProximaRota[1]);
      RegiaoAtual = ProximaRota[1];
    }
  }
}
let RegioesComPartida = [];
const VerificaPartidas = NovasRotasMapeadas.map((rota) => RegioesComPartida.push(rota[0]));

// Não consegui terminar, mas verificaria qual região não tem partida e adicionaria uma rota com partida nessa região para uma das regiões de destino.

console.log('Verificando: ' + RegioesComPartida);

console.log('Rotas Mapeadas:');
console.log(NovasRotasMapeadas);

console.log('Regiões Percorridas: ' + RegioesPercorridas);