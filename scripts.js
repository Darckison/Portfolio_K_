/* 
   Java script não é Java

   variáveis---

   é um pedacinho de memória do computador, para guardar algumas coisas--- 
   
   Função--- é um pedaço , que só é execuatado quando é chamado

   Algorítimo e Lógica de Programação
          [ ] Descobrir quando o usuário clicou no botão
          [ ] Quando ele tocar no botão os copos trocar de cor ou tamanho
          [ ]  trocar cor do botão 
          [ ] Quando eleclicar na imagemtrocar imagem
]


*/

function trocarCor(cor) {
  const resposta = confirm("Gostaria de comprar essa arte ou encomendar?");
  if (resposta) {
    // Altere o número abaixo para o seu WhatsApp no formato internacional, sem o +
    window.open("https://wa.me/5595991736049?text=Olá! Tenho interesse nessa arte.", "_blank");
  }

  const triangulos = document.querySelectorAll('.triangulo');
  triangulos.forEach((tri) => {
    tri.style.borderBottomColor = cor;
  });
}
