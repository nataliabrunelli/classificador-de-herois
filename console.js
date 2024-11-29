let heroi = prompt("Insira a lista de heróis e XP (entre 0 e 10000) da seguinte forma: nome: XP, ").split(", ")
// p prompt serve para mandar mensagem e pegar input do usuário APENAS NO NAVEGADOR
// o split separa cada conjunto de herói + xp na vírgula
let listaHerois = []

heroi.forEach((heroi) => {
  let [nome, xp] = heroi.split(":")
  xp = parseInt(xp)

  // O IF é o mais recomendado para avaliar intervalos, o SWITCH-CASE, valores exatos

  if(xp < 1000) {
    listaHerois.push(`O herói de nome ${nome} está no nível Ferro`)

  } else if(xp < 2000) {
    listaHerois.push(`O herói de nome ${nome} está no nível Bronze`)

  } else if (xp < 4000) {
    listaHerois.push(`O herói de nome ${nome} está no nível Prata`)

  } else if (xp < 6000) {
    listaHerois.push(`O herói de nome ${nome} está no nível Ouro`)

  } else {
    listaHerois.push(`O herói de nome ${nome} está no nível Imortal`)
    
  }  
})

console.log(listaHerois.join(", "))