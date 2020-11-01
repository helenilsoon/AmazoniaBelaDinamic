
<?php
require_once("funcoes.php");
include"fb.php";
?>

<!--menu-->


<!--fim menu-->

<section class="container-pagDois">
	<article class="box-pagDois">
		<ol>
			<li><a href="?p=page_home.php">inicio</a></li>
			<li><a href="?p=teatro-amazonas">teatro amazonas</a></li>
		</ol>
		<h1>Teatro amazonas</h1>
		<span class="autor">by <a href="helenilson.html">Helenilson oliveira</a> 09 Dez 2018</span>
		<div class="tagsEcompartilhar">

			<div class="tags">
				<a href="<?php $pagina ?>">Teatro amazonas</a>
				<a href="?p=ponto_turistico.">ponto turistico</a>
				<a href="#">Manaus-AM</a>
			</div>
			<div class="compartilhar">


				<div class="fb-like" data-href="http://amazoniabela.esy.es/teatro-amazonas.html" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>

				<a class="twitter-share-button" href="https://twitter.com/intent/tweet"> Tweet</a>

			</div>
		</div>
		<div class="pagDois-boxImg">

			<figure class="galeria-img">
				<img  src="img/Teatro-amazonas/Teatro-amazonas-1.jpg" alt="teatro 1"  style="width:100%">
				<legend> Teatro amazonas 1</legend>
				<span class="credito">creditos: Elias moraes</span>
			</figure>
			<figure class="galeria-img">
				<img   src="img/Ponta-Negra" style="width:150%">
				<legend> Teatro amazonas 2</legend>
				<span class="credito">creditos: Elias moraes</span>
			</figure>
			<figure class="galeria-img">	
				<img  src="img/Teatro-amazonas/Teatro-amazonas.jpeg" style="width:100%">
				<legend> Frente Teatro</legend>
				<span class="credito">creditos: Elias moraes</span>

			</figure>
			<figure class="galeria-img">	
				<img src="img/Teatro-amazonas/teatro_amazonas_2.jpg" style="width:100%">
				<legend> Teatro amazonas 4</legend>
				<span class="credito">creditos: Carla lima</span>
			</figure>
			<figure class="galeria-img">	
				<img  src="img/Teatro-amazonas/teatro-amazonas-3.jpg" style="width:100%">
				<legend> Teatro amazonas 5</legend>
				<span class="credito">creditos: Carla lima</span>
			</figure>
			<figure class="galeria-img">
				<img  src="img/Teatro-amazonas/Teatro_amazonas-7.jpg" style="width:100%">
				<legend> Teatro amazonas 6</legend>
				<span class="credito">creditos: Elias moraes</span>
			</figure>
			<script type="text/javascript" >
				var slideInicio = 1;
				galeria(slideInicio);

				function passar(n){
					galeria(slideInicio += n);
				}
				function galeria(n){
					var i;
					var x = document.getElementsByClassName("galeria-img");
					if( n > x.length){slideInicio = 1}
						if (n < 1) {slideInicio = x.length}
							for(i = 0; i < x.length; i++){
								x[i].style.display = "none";
							}
							x[slideInicio -1].style.display = "block ";

						}
					</script>
					<div onclick="passar(1)"class="proximo"></div>
					<div onclick="passar(-1)" class="anterior"></div>


					
				</script>
			</div>
			<div class="pagDois-conteudo">
				<h2>Teatro Amazonas</h2>
				<p>O Teatro Amazonas é um dos mais importantes teatros do Brasil e o principal cartão postal da cidade de Manaus.[6][7] Localizado no centro da cidade, no Largo de São Sebastião, foi inaugurado em 31 de dezembro de 1896 para atender ao desejo da alta sociedade amazonense da época, que queria que a cidade estivesse à altura dos grandes centros culturais.</p>
				<p>De estilo renascentista entorno de sua estrutura externa com os detalhes únicos na sua cúpula, tornou-se um dos monumentos mais conhecidos do Brasil e, consequentemente, o maior símbolo cultural da cidade de Manaus.[8][9] É a expressão mais significativa da riqueza na cidade durante o Ciclo da Borracha, sendo tombado como Patrimônio Histórico Nacional em 1966.[10]</p>
				<p>Com uma decoração muito nobre, o Teatro Amazonas já foi palco não somente de grandes peças teatrais, mas também de shows internacionais como o da banda The White Stripes.[11] Desde 1997, o Festival Amazonas de Ópera é realizado no teatro.[12][13] Em 2008, o teatro foi eleito uma das sete maravilhas brasileiras em dois concursos promovidos pela Revista Caras em parceria com o banco HSBC e outro pelo escritório de design Goff.[14]</p>

				<h3>Horários de funcionamento:</h3>
				<ul class="horario">

					<li>Segunda: 09:00 ás 17:00 </li>
					<li>Terça: 09:00 ás 17:00</li>
					<li>Quarta: 09:00 ás 17:00</li>
					<li>Quinta: 09:00 ás 17:00</li>
					<li>Sexta: 09:00 ás 17:00</li>
				</ul>
				<h3>Valor entrada: $20</h3>
			</div>
		</article>
		<!-- Aaside-->

		<?php

		require_once "aside.php";

		?>
		<!-- Mapa-->
	</section>
	<section class="container-pagDois-mapa">	
		<div class="pagDois-mapa">
			<iframe class="iframe" src="https://www.google.com/maps/embed?pb=!4v1540841489051!6m8!1m7!1sCAoSLEFGMVFpcFBlcEpXcmFCRzMxckY0YmZzc05pcFE0X1E1bzlmcjZwYXVaOTJz!2m2!1d-3.13027!2d-60.0234897!3f339.3955647448292!4f69.4017804663576!5f0.7820865974627469"  frameborder="0" style="border:0;width:100%; height:500px;" allowfullscreen></iframe>
		</div>	
		<div class="comentarios">
			<div id="disqus_thread"></div>
		</div>
	</section>
	<!--DIQUS-->

	<!--   incio Rodape -->



	<script>window.twttr = (function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
		t = window.twttr || {};
		if (d.getElementById(id)) return t;
		js = d.createElement(s);
		js.id = id;
		js.src = "https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);

		t._e = [];
		t.ready = function(f) {
			t._e.push(f);
		};

		return t;
	}(document, "script", "twitter-wjs"));</script>

	<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

var disqus_config = function () {
this.page.url = "http://amazoniabela.esy.es";  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = "Praia-da-ponta-Negra.html"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
	var d = document, s = d.createElement('script');
	s.src = 'https://amazoniabela-esy-es.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
