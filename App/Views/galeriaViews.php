


	<section class="container-pagDois">
		<article class="box-pagDois">
			<ol>
				<li><a href="index.php">voltar</a></li>
				<li><a href="galeria.php">Galeria</a></li>
			</ol>
			<h1>Galeria</h1>
			<div class="boxGaleria">
				<?php
                while ($row = $result->fetch_array()) {
                    ?>
					<div class="prin-ponto">
						<a href="local.php?p=<?= $row['url'] ?>&cod=<?= $row['cod'] ?> ">
							<figure>
								<img src="upload/<?php echo $row['img']; ?>" alt="teatro 1" style="width: 150%">
								<legend>
									<h3><?php echo $row['titulo'];
                    echo $row['cod'] ?></h3>
								</legend>
						</a>
						</figure>
					</div>


				<?php } ?>


			</div>
			<div class="pagDois-conteudo">



			</div>
		</article>
		<!-- Aaside-->

		<?php

        require_once("aside.php");

				?>
		<!-- Mapa-->
	</section>


	<!--DIQUS-->

	<!--   incio Rodape -->
	</div>
	