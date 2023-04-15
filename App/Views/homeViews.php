	<header>
		<!--slide -->
		<div class="box-slide">
			<div class="bemvindo">
				<span>Bem vindo </span>
				<p>a</p>
				<h1>MANAUS</h1>
			</div>
			<div class="slide">
				<div class="numbertext">1/4</div>
				<img src="../img/Arara.jpg" style="width:100%" />
				<div class="text">Caption text 1</div>

				<!-- <div class="bemvindo">
		            	<span>Bem vindo</span>
		            	<p>a</p>	
		            	<h1>Manaus</h1>

		            </div>-->
			</div>
			<div class="slide">
				<div class="numbertext">2/4</div>
				<img src="img/Teatro-Amazonas.png" style="width:100%">
				<div class="text">TEATRO AMAZONAS</div>
			</div>
			<div class="slide">
				<div class="numbertext">3/4</div>
				<img src="img/Porto-de-Manaus-vista-aerea.jpg" style="width:100%">
				<div class="text">PORTO DE MANAUS</div>
			</div>
			<div class="slide">
				<div class="numbertext">4/4</div>
				<img src="img/Ponte-rio-negro/Ponte-rio-negro.jpg" style="width: 100%;">
				<div class="text">PONTE RIO NEGRO</div>
			</div>

		</div>
		<div class="caixa-dot" style="text-align:center">
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>

		</div>

	</header>

	<section class="box-section">
		<div class="box-section-one">
			<h2>Pontos turistico</h2>
			<a href="?p=galeria">
				<button>Ver todos</button></a>
		</div>
	</section>

	<!--  Pontos turistico principais -->


	<main>
		<div class="container-box-pontos">
			<div class="box-pontos">

				<?php

				foreach ($ObjectDataToview as $d) {
					echo'	<div class="prin-ponto">
					<a href="/pontos-turistico/' . $d['url'] . '">
						<figure>
							<img src="img/Teatro-amazonas/Teatro-amazonas.jpg">
							<legend>
								<h3>' . $d['titulo'] . '</h3>
								<p> ' . $d['texto'] . '.</p>
							</legend>
						</figure>
					</a>
					</div>';
				}

				?>


			</div>
		</div>
	</main>
	<!--  Serviços-->
	<div class="box-servico">
		<h2>SERVIÇOS</h2>
	</div>
	<section class="servicos">
		<div class="box-pontos">
			<div class="prin-ponto mapa">
				<a href="#">
					<figure>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127493.96751424028!2d-60.037147141952545!3d-3.044648425126764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b485c9ff765a9cc!2sManaus%2C+AM!5e0!3m2!1spt-BR!2sbr!4v1540838269089"
							width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>
						<legend>
							<h3> MAPA DE MANAUS</h3>
							<p> </p>
						</legend>
					</figure>
				</a>
			</div>
			<div class="prin-ponto mapa ">
				<a href="#">
					<figure>
						<iframe
							src="https://www.google.com/maps/embed?pb=!4v1540841489051!6m8!1m7!1sCAoSLEFGMVFpcFBlcEpXcmFCRzMxckY0YmZzc05pcFE0X1E1bzlmcjZwYXVaOTJz!2m2!1d-3.13027!2d-60.0234897!3f339.3955647448292!4f69.4017804663576!5f0.7820865974627469"
							frameborder="0" style="border:0;width:100%; height:400px;" allowfullscreen></iframe>
						<legend>
							<h3> TEATRO EM 360º</h3>
							<p> </p>
						</legend>
					</figure>
				</a>
			</div>
			<div class="prin-ponto">
				<a href="#">
					<figure>
						<img src="img/aeroporto-eduardo-gomes-1.jpg">
						<legend>
							<h3> Aeroporto</h3>
							<p> </p>
						</legend>
					</figure>
				</a>
			</div>


		</div>
	</section>
	<section class="container-amazonas">
		<div class="box-am">
			<div class="box-amazonas">
				<?php
				foreach($ObjectDataToview as $d){
				echo '<div class="prin-ponto amazonas">
						<a href="/pontos-turistico/'.$d['url'].'">
							<figure>
								<img src="img/Ponta-Negra/22-Praia-da-Ponta-Negra.jpg">
								<legend>
									<h3> '.$d['titulo'].' </h3>
									<p> </p>
									</legend>
								</figure>
							</a>
						</div>';
					}
				?>




			</div>
			<div class="box-amazonas2">
				<h2>Amazonas</h2>
				<p><strong>Amazonas</strong> é uma das 27 unidades federativas do Brasil. Está situado na Região Norte,
					sendo o maior estado do país em extensão territorial, com uma área de 1 559 146,876 km²,
					constituindo-se na nona maior subdivisão mundial, sendo maior que as áreas da França, Espanha, Suécia e
					Grécia somadas.[7] Seria o décimo sexto maior país do mundo em área territorial, pouco superior à
					Mongólia
				<p>
				<h4>melhores lugares:</h4>
				<ul>
					<li><a href="#">Praça São Sebastião</a></li>
					<li><a href="#">Praça Heliodoro Balbi </a></li>
					<li><a href="#">Praça Da Polícia</a></li>
				</ul>
				<ul>
					<li><a href="#">Manauara Shopping</a></li>
					<li><a href="#">Fun Park Via Norte</a></li>
					<li><a href="#">shopping ponta negra</a></li>
				</ul>
				<ul>
					<li><a href="#">Parque Cidade da Criança</a></li>
					<li><a href="#">Parque Estadual Sumaúma</a></li>
					<li><a href="#">Mirage Park</a></li>
				</ul>
				<div class="clear"></div>
				<button><a
						href="https://www.google.com/destination/map/topsights?q=melhores+lugares+em+Manaus&site=search&output=search&dest_mid=/m/02bkk3&sa=X&ved=0ahUKEwjS2PncgpffAhXFipAKHbtNDsgQ6tEBCDIoBDAA">Ver
						no mapa</a></button>
			</div>

		</div>
	</section>
	<section class="conheca">
		<h2>Venha conhecer o Amazonas</h2>
	</section>
	<!-- rodape--->