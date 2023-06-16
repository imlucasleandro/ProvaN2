function somadiagonal(matriz) {
  let somar = 0;
  for(let i = 0; i < matriz.length; i++) {
    somar += matriz[i][i];
  }
  return somar;
}

module.exports = {
  adicaoexp: somadiagonal
}