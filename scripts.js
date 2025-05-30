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
  const triangulos = document.querySelectorAll('.triangulo');

  triangulos.forEach((tri) => {
    tri.style.borderBottomColor = cor;
  });
}
