<?php 
	require_once("conecta.php");

		$consulta ="SELECT * FROM tb_ponto_turistico ";
		$lista = mysqli_query($conexao,$consulta);

		if(!$lista) {
        die("Falha na consulta ao banco");   
        }


 ?>


<aside>


	
	<h3>Locais</h3>
		<div class="Pesquisa">
			<form method="GET" action="a"></form>
			<input type="search" name="Pesquisa">
			<input type="image" src="img/search_icon.png">
		</div>
		<hr>
	<input type="checkbox" id="locais" name="locais">
	<label for="locais">Mais Locais</label>
	<ul id="locaisMenu">
		
		<li><a href="?p=Centro-Cultural-dos-Povos-da-Amazônia">Centro Cultural dos Povos da Amazônia</a></li>
		
		<li><a href="?p=Igreja-da-Matriz-Arquidiocese-de-Manaus">Igreja da Matriz - Arquidiocese de Manaus</a></li>
		<li><a href="?p=Instituto-Nacional-de-Pesquisas-da-Amazonia">Instituto Nacional de Pesquisas da Amazônia</a></li>
		<li><a href="?p=Lago-Janauari">Lago Janauari</a></li>
		<li><a href="?p=Largo-de-Sao-Sebastiao">Largo De São Sebastião</a></li>		
		<li><a href="?p=Mercado-Municipal-Adolpho-Lisboa">Mercado Municipal Adolpho Lisboa</a></li>					
		<li><a href="?p=Musa-Museu-da-Amazonia">Musa Museu da Amazônia</a></li>
		<li><a href="?p=Manauara-Shopping">Manauara Shopping</a></li>
		<li><a href="?p=Museu-do-Seringal">Museu Do Seringal</a></li>
		<li><a href="?p=Museu-do-indio">Museu do Índio</a></li>					
		
		<li><a href="?p=Museu-da-Casa-Eduardo-Ribeiro">Museu da Casa Eduardo Ribeiro</a></li>
		<li><a href="?p=Mirage-Park">Mirage Park</a></li>
		<li><a href="?p=Reserva-Florestal-Adolpho-Ducke">Reserva Florestal Adolpho Ducke</a></li>
		<li><a href="?p=teatro-amazonas">Teatro Amazonas</a></li>
		<li><a href="?p=Teatro-Chamine">Teatro Chaminé</a></li>
		<li><a href="?p=Porto-de-Manaus">Porto de Manaus</a></li>
		<li><a href="?p=Praia-da-ponta-Negra">Praia da ponta Negra</a></li>
		<li><a href="?p=Ponte-Jornalismo-helippe-Daou">Ponte Jornalismo Phelippe Daou</a></li>
		<li><a href="?p=Parque-Municipal-do-Mindu">Parque Municipal do Mindu</a></li>
		
		<li><a href="?p=Praia-da-Lua">Praia da Lua</a></li>					
		<li><a href="?p=ParqueCidade-da-Crianca">Parque Cidade da Criança</a></li>
		<li><a href="?p=Parque-Estadual-Sumauma">Parque Estadual Sumaúma</a></li>
		<li><a href="?p=Palacete-Provincial">Palacete Provincial</a></li>
		<li><a href="?p=Palácio-da-Justica">Palácio da Justiça</a></li>
		<li><a href="?p=Zoologico-Do-Cigs">Zoológico Do Cigs</a></li>
		<li><a href="?p=Parque-Senador-Jefferson-Peres">Parque Senador Jefferson Péres</a></li>				
		<li><a href="?p=Praca-Sao-Sebastiao">Praça São Sebastião</a></li>
		<li><a href="?p=Praca-Heliodoro-Balbi">Praça Heliodoro Balbi</a></li>
		<li><a href="?p=Praca-Da-Policia">Praça Da Polícia</a></li>
		<li><a href="?p=Praca-da-Saudade">Praça da Saudade</a></li>
		<li><a href="?p=Praca-da-Matriz">Praça da Matriz</a></li>
		<li><a href="?p=Porto-da-Ceasa">Porto da Ceasa</a></li>
		<li><a href="?p=">Zoológico do Hotel Tropical</a></li>
		<h3>Locais ja cadastrado</h3>

			<ul>
				<?php while ($li_pontos = mysqli_fetch_assoc($lista)) {?>
					<li><a href="ponto-turistico.php?p=<?php echo $li_pontos['url']; ?>"><?php echo $li_pontos['titulo']; ?></a></li>	
			<?php } 

				print_r($li_pontos);
			?>
			</ul>	

		
	</ul>	
</aside>