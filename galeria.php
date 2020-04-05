<?php
include("conecta.php");
$consulta = "SELECT * FROM tb_ponto_turistico";
$result = $conexao->query($consulta) or die("nao conectado" . $conexao->connect_errno);
?>
<!DOCTYPE html>
<html lang="html">

<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-type" value="text/html; charset=UTF-8" />
	<title>Linda Manaus</title>
	<meta name="viewport" content="width=device-width ,initial-scale=1">
	<link rel="icon" href="logo.ico">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/pag-dois.css">
	<meta property="og:url" content="http://amazoniabela.esy.es/teatro-amazonas.html" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Teatro Amazonas" />
	<meta property="og:description" content="O Teatro Amazonas é um dos mais importantes teatros do Brasil e o principal cartão postal da cidade de Manaus.[6][7] Localizado no centro da cidade, no Largo de São Sebastião, foi inaugurado em 31 de dezembro de 1896 para atender ao desejo da alta sociedade amazonense da época, que queria que a cidade estivesse à altura dos grandes centros culturais." />
	<meta property="og:image" content="http://amazoniabela.esy.es/img/Teatro-amazonas/Teatro-amazonas-1.jpg" />


</head>

<body>

	<?php require_once("topo.php"); ?>


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
	<?php

	require_once("rodape.php");


	?>

	<?php mysqli_close($conexao); ?>