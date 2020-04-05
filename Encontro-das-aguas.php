<!--fim menu-->

<section class="container-pagDois">
	<article class="box-pagDois">
		<ol>
			<li><a href="?p=page_home.php">inicio</a></li>
			<li><a href="?p=Encontro-das-aguas.php">Encontro das aguas</a></li> <!-- Editar aqui--> 
		</ol>
		<h1>Encontro das aguas</h1><!-- Editar aqui-->
		<span class="autor">by <a href="helenilson.html">Helenilson oliveira</a> 09 Dez 2018</span>

		<!--botão social-->
		<div class="tagsEcompartilhar">
			<div class="tags">
				<a href="?p=Palacete-Provincial.php">Palacete Provincial</a><!-- Editar aqui-->
				<a href="?p=ponto_turistico.php">ponto turistico</a>
				<a href="#">Manaus-AM</a>
			</div>
			<div class="compartilhar">					
				<div class="fb-like" data-href="http://amazoniabela.esy.es/teatro-amazonas.html" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
				<a class="twitter-share-button" href="https://twitter.com/intent/tweet"> Tweet</a>
			</div>
		</div>
		<div class="pagDois-boxImg">

			<figure class="galeria-img">
				<img  src="img/encontro-aguas/document-rio-sobre-o-encontro-das-guas.jpg" alt="teatro 1"  style="width:100%"><!-- Editar aqui-->
				<legend> Teatro amazonas 1</legend>
				<span class="credito">creditos: Elias moraes</span>
			</figure>
			<figure class="galeria-img">
				<img   src="img/encontro-aguas/encontro-aguas.jpg" style="width:100%"><!-- Editar aqui-->
				<legend> Teatro amazonas 2</legend>
				<span class="credito">creditos: Elias moraes</span>
			</figure>
			<figure class="galeria-img">	
				<img  src="img/encontro-aguas/encontro-das-aguas-amazonas-zarpo.jpg" style="width:100%"><!-- Editar aqui-->
				<legend> Frente Teatro</legend>
				<span class="credito">creditos: Elias moraes</span>

			</figure>
			<figure class="galeria-img">	
				<img src="img/encontro-aguas/encontro-das-aguas-do-rio-negro-e-o-rio-amazonas-ou-rio-solimoes-perto-de-manaus-amazonas-brasil-na-america-do-sul-m3wcdf.jpg" style="width:100%"><!-- Editar aqui-->
				<legend> Teatro amazonas 4</legend>
				<span class="credito">creditos: Carla lima</span>
			</figure>
			<figure class="galeria-img">	
				<img  src="img/encontro-aguas/encontro-das-aguas-Manaus.jpg" style="width:100%"><!-- Editar aqui-->
				<legend> Teatro amazonas 5</legend>
				<span class="credito">creditos: Carla lima</span>
			</figure>
			<figure class="galeria-img">
				<img  src="img/encontro-aguas/EncontroDasAguasRioNegroESolimoes.jpg" style="width:100%"><!-- Editar aqui-->
				<legend> Teatro amazonas 6</legend>
				<span class="credito">creditos: Elias moraes</span>
			</figure>
			<div onclick="passar(1)"class="proximo"></div>
			<div onclick="passar(-1)" class="anterior"></div>

			<script type="text/javascript">
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
				</div>
				<div class="pagDois-conteudo">
					<h2>CIGS</h2><!-- Editar aqui-->
					<p>O Centro de Instrução de Guerra na Selva (C I G S), com a designação histórica Centro Coronel Jorge Teixeira, é uma organização militar do Exército Brasileiro sediada na cidade de Manaus destinada a qualificar militares líderes de pequenas frações, como guerreiros da selva, combatentes aptos a cumprir missões de natureza militar nas áreas mais inóspitas da Floresta Amazônica brasileira bem como em ambientes da mesma natureza. Sua designação histórica é uma homenagem ao precursor do Centro, que se tornaria seu primeiro comandante, mais conhecido como "Teixeirão".[1]</p>
					<p>São ministrados Cursos de Operações na Selva, em sete categorias diferentes, além de estágios destinados a militares e também para instituições civis. Seu símbolo é a onça-pintada.</p>
					<p>Para o melhor desenvolvimento dos trabalhos, o CIGS está estruturado em Divisão de Ensino, Divisão de Doutrina Pesquisa, Divisão de Alunos, e Divisão Administrativa</p>

					<h3>Horários de funcionamento:</h3><!-- Editar aqui-->
					<ul class="horario">

						<li>Segunda-feira: fechado para manutenção</li>
						<li>Terça: 09:00 ás 17:00</li>
						<li>Quarta: 09:00 ás 17:00</li>
						<li>Quinta: 09:00 ás 17:00</li>						
						<li>Sexta: 09:00 ás 17:00</li>
						<li>Sábado: 09:00 ás 18:00</li>
						<li>Sexta: 09:00 ás 18:00</li>
					</ul>
					<h3>Valor entrada: R$ 5,00 (cinco reais) </h3><!-- Editar aqui-->
					<p>- Meia entrada: Estudantes portando documento de identidade estudantil (não serão aceitos documentos de cursos não regulares)</p>
					<p>Isentos da taxa:</p>
					<ul>
						<li>Crianças até 12 anos (acompanhadas por adulto)</li>
						<li>Idosos (60 anos ou mais)</li>
						<li>Pessoas portadoras de deficiência</li>
						<li>Militares das Forças Armadas e seus dependentes (obrigatória a apresentação de identificação militar)</li>
					</ul>
				</div>
			</article>
			<!-- Aaside-->

			<?php


			require_once("aside.php");



			?>			</section>
			<section class="container-pagDois-mapa">	
				<div class="pagDois-mapa">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9753949115147!2d-60.04723863589374!3d-3.1011962977417307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1037aaaaaaab%3A0x1f4033eda7b2fefb!2sCentro+de+Instru%C3%A7%C3%A3o+de+Guerra+Na+Selva!5e0!3m2!1spt-BR!2sbr!4v1544605111510" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
				</div>	
				<div class="comentarios">
					<div id="disqus_thread"></div>
				</div>
			</section>
			<!--DIQUS-->

			<!--   incio Rodape -->
			
			<!--     botão facebook-->
			
			<?php 
				include "diqus.php";
			 ?>
