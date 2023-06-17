function multipicar(matriz) {
    let coluna3 = []
    let coluna4 = []

  for (let i = 0; i < matriz.length; i++) {
    coluna3.push(matriz[i][2])
    coluna4.push(matriz[i][3])
  }

  let multiplicacao3 = coluna3.reduce((acc, valor) => acc * valor)
  let multiplicacao4 = coluna4.reduce((acc, valor) => acc * valor)

  let resultado = {
    multiplicacao3: multiplicacao3,
    multiplicacao4: multiplicacao4
  }

  return resultado
  }

  module.exports = {
    multipicar : multipicar
  }