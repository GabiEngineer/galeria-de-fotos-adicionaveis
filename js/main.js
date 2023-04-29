$(document).ready(function () {

  $('header button').click(function () {
    $('form').slideDown();
  })

  $('#botao-cancelar').click(function () {
    $('form').slideUp();
  })

  $('form').on('submit', function (e) {
    e.preventDefault();

    const enderecoDaNovaImagem = $('#endereco-imagem').val();
    const novaImagem = $(`<li style="display: none;"></li>`);
    $(`<img src="${enderecoDaNovaImagem}">`).appendTo(novaImagem);
    $(`<div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" title="Abrir Imagem" target="_blank">Abrir Imagem</a>
       </div>`
    ).appendTo(novaImagem);
    $(novaImagem).appendTo('ul');
    $(novaImagem).fadeIn(1000);
    $('#endereco-imagem').val('');
  })

})