
$(function() {
  $('.translate .en').click(function() {
    $('#alert').css({'top':'0'});
    setTimeout(
    function() 
    {
      $('#alert').css({'top':'-100px'});
    }, 5000);
  });
});
$(function() {
  $('.translate .en').click(function() {
    $('#alert').css({'top':'0'});
    setTimeout(
    function() 
    {
      $('#alert').css({'top':'-100px'});
    }, 5000);
  });
});
$(function() {
  $('.tendi').click(function() {
    $('#alert').css({'top':'-100px'});
  });
});
$(function () {
	$('#expandir').click( function () {
		$('#map-ex').css('display','block');
		$('#fechar-mapa').css('display','block');	
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
		$('#expandir').css('display','none');
	})
});
$(function () {
	$('#fechar-mapa').click( function () {
		$('#map-ex').css('display','none');
		$('#fechar-mapa').css('display','none');	
		$('#expandir').css('display','block');
	})
});
$(function () {
  $('#responsive-menu-button').click(function () {
      $('#menu-principal').toggleClass('mostrar');
      $('#responsive-menu-button i').toggleClass('fa-close');
      $('#responsive-menu-button i').toggleClass('fa-bars');
      $('body').removeClass('com-busca');
  });
});
$(function () {
    $('#buscaicon, #menu-principal a').click(function () {
        $('#menu-principal').removeClass('mostrar');
        $('#responsive-menu-button i').toggleClass('fa-close');
        $('#responsive-menu-button i').toggleClass('fa-bars');
    });
});
$(function () {
	$('#alto-contraste').click(  function(){
	    $('body').toggleClass('inverte');
	});
});
$(function () {
	$('#buscaicon').click(  function(){
	    $('body').toggleClass('com-busca');
	});
});
$('#articulists').bxSlider({
			  minSlides: 7,
			  maxSlides: 7,
			  moveSlides:7,
			  slideWidth: 600,
			  slideMargin: 0,
			  hideControlOnEnd: true
			});
;(function(){
          function id(v){ return document.getElementById(v); }
          function loadbar() {
            var ovrl = id("overlay"),
                prog = id("progress"),
                stat = id("progstat"),
                img = document.images,
                c = 0,
                tot = img.length;
            if(tot == 0) return doneLoading();
            function imgLoaded(){
              c += 1;
              var perc = ((100/tot*c) << 0) +"%";
              prog.style.width = perc;
              stat.innerHTML = "<div class='logorot'></div>"+ perc;
              if(c===tot) return doneLoading();
            }
            function doneLoading(){
              ovrl.style.opacity = 0;
              setTimeout(function(){ 
                ovrl.style.display = "none";
              }, 1200);
            }
            for(var i=0; i<tot; i++) {
              var tImg     = new Image();
              tImg.onload  = imgLoaded;
              tImg.onerror = imgLoaded;
              tImg.src     = img[i].src;
            }    
          }
          document.addEventListener('DOMContentLoaded', loadbar, false);
        }());
 
   $(function() {
  var menuVisible = false;
  $('#menuBtn').click(function() {
    if (menuVisible) {
      $('#myMenu').css({'left':'-200%'});
      menuVisible = false;
      return;
    }
    $('#myMenu').css({'left':'0'});
    $('#Busca').css({'top':'-72px'});
    menuVisible = true;
  });
  $('#myMenu').click(function() {
    $(this).css({'left':'-200%'});
    menuVisible = false;
  });
});
      $(function() {
  $('#BuscaBtn').click(function() {
    $('#Busca').css({'top':'55px'});
    $('#BuscaBtn').css({'display':'none'});
    $('#XX').css({'display':'inline-block'});
    $('#myMenu').css({'left':'-200%'});
  });
});
$(function() {
  $('#XX, .closing').click(function() {
    $('#myMenu').css({'left':'-200%'});
    $('#Busca').css({'top':'-72px'});
    $('#XX').css({'display':'none'});
    $('#BuscaBtn').css({'display':'inline-block'});
    $('#menuBtn').css({'display':'inline-block'});
    menuVisible = false;
  });
});  
$(function() {
  $('#todas-cats').click(function() {
      $(this).toggleClass('ativo');
      $('#menu-ir-para').toggleClass('mostrar');
      $('#menu-ir-para .mostrar').removeClass('mostrar');
    });
}); 
$(function() {
  $('#menu-ir-para li').click(function() {
    $(this).addClass('mostrar');
  });
}); 
$(function() {
  $('#menu-ir-para li li.mostrar').click(function() {
    $(this).removeClass('mostrar');
  });
});  