<?php
	include("topo.php");
	require_once("aside.php");



?>

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
				<img  src="<?php echo $row['img']?>" alt="teatro 1"  style="width:100%">
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
				

				
			</div>
		</article>
		<!-- Aaside-->

		<?php

		include "aside.php";

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
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">commpowered by Disqus.</a></noscript>
<?php
	include("rodape.php");
?>