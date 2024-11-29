// Adiciona um evento ao botão para capturar a entrada e calcular os níveis dos heróis
document.getElementById('calcularButton').addEventListener('click', function() {

  // Pega o valor inserido no campo de texto
  let input = document.getElementById('heroisInput').value;
  
  // Separa a entrada em heróis e XP
  let heroi = input.split(", ");
  
  // Lista para armazenar as mensagens de classificação dos heróis
  let listaHerois = [];

  heroi.forEach((heroi) => {
      // Separa o nome e o XP usando o ":"
      let [nome, xp] = heroi.split(":");
      
      xp = parseInt(xp);  // Converte o XP para número inteiro

      // Avalia o nível do herói com base no XP
      if (xp < 1000) {
          listaHerois.push(`O herói de nome ${nome} está no nível Ferro`);

      } else if (xp < 2000) {
          listaHerois.push(`O herói de nome ${nome} está no nível Bronze`);

      } else if (xp < 3000) {
          listaHerois.push(`O herói de nome ${nome} está no nível Prata`);

      } else if (xp < 4000) {
          listaHerois.push(`O herói de nome ${nome} está no nível Ouro`);

      } else {
          listaHerois.push(`O herói de nome ${nome} está no nível Imortal`);
      }
  });

  // Exibe o resultado dentro da div com id 'resultado'
  document.getElementById('resultado').innerHTML = listaHerois.join("<br>");
});