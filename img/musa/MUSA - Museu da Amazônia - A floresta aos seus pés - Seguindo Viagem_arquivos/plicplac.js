(function($){
  $(document).ready(function(){
    $('#menu-itens, #menu-categoria-itens').superfish({
      delay: 0,
      speed: 0,
      speedOut: 0,
      cssArrows: 0
    });
    $('#menu-botao').click(function() {
      $('#menu').toggleClass('menu-aberto');
      if ($('#menu').hasClass('menu-aberto'))
        $('#menu-botao').text('Fechar');
      else
        $('#menu-botao').text('Menu');
    });
    $('#form-dd-fechar').click(function() {
      $('#form-dd').slideUp(400, function() { $('#newsletter-form-dd, #busca-form-dd').hide(); });
    });
    $('#menu-newsletter').click(function() {
      $('#newsletter-form-dd').show();
      $('#form-dd').slideDown();
    });
    $('#menu-busca').click(function() {
      $('#busca-form-dd').show();
      $('#form-dd').slideDown();
    });
    if ($('#destaque-slides').length >= 1) {
      $('#destaque-slides').slick({
        prevArrow: '#destaque-anterior',
        nextArrow: '#destaque-proximo',
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        draggable: true,
        initialSlide: 2,
        responsive: [
                     {
                      breakpoint: 670,
                      settings: {
                        variableWidth: false
                      }
                     }
                    ]
      });
    }
    $('.post-texto').fitVids();
    $('#voltar_topo, #paginacao-topo span').click(function(e) {
      $('html, body').animate({scrollTop: 0}, 2000);
      return false;
    });
    verifica_menu();
    $(window).scroll(function(){
      verifica_menu();
    });
  });

  function verifica_menu() {
  if ($(window).scrollTop() > $('#menu-categoria-ancora').position().top) {
    if (!$('#menu-categoria').hasClass('menu-categoria-fixo')) {
      $('#menu-categoria').addClass('menu-categoria-fixo');
	  }
  } else {
    if ($('#menu-categoria').hasClass('menu-categoria-fixo')) {
      $('#menu-categoria').removeClass('menu-categoria-fixo');
      }
    }
  }
})(jQuery);