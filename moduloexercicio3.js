function mediar(matriz) {
    let linha = 0
    let coluna = 0

    for (let i = 0; i < matriz[0].length; i++) {
      linha += matriz[0][i]
    }

    for (let i = 0; i < matriz.length; i++) {
      coluna += matriz[i][0]
    }
  
    let medialinha = linha / matriz[0].length
    let mediacoluna = coluna / matriz.length
    let media =  (medialinha + mediacoluna) / 2
  
    return media
  }
  
  module.exports = {
    media : mediar
  }
  