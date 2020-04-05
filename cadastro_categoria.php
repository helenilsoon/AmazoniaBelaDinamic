<?php

require_once("funcoes.php");
require_once("conecta.php");
session_start();
if(!isset($_SESSION['username'])){
	header("location: ?p=login");
}
$baseSelecionada = mysqli_select_db($conexao,"tb_categoria");
if(isset($_POST['enviar'])){
	$nome = $_POST['nome'];

	if ($nome !== "") {
		$sql = "INSERT INTO tb_categoria (id_categoria,categoria) VALUES (NULL,'$nome')";
		mysqli_query($conexao,$sql);
		echo "cadatrado com sucesso";
	}else{
		$mensagem = "não pode cadastrar vazio";

	}

}


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
	<meta property="og:url"           content="http://amazoniabela.esy.es/teatro-amazonas.html" />
	<meta property="og:type"          content="website" />
	<meta property="og:title"         content="amazoniabela" />
	<meta property="og:description"   content=" Bem vindo a amazonia bela" />
	<meta property="og:image"         content="http://amazoniabela.esy.es/img/Teatro-amazonas/Teatro-amazonas-1.jpg" />
	

</head>
<body>
	<!--          topo       -->
	<?php require_once("topo.php"); ?>
	<div class="btn_gerenciameto">	
		<button><a href="cadastro_categoria.php">Cadastro categoria</a></button>
		<button><a href="cadastro_pontos_turistico.php">cadastra ponto turistico</a></button>
	</div>
	<section class="container-pagDois">
		<article class="box-pagDois">
			<ol>
				<li><a href="index.php">inicio</a></li>
				<li><a href="cadastro_pontos_turistico.php">cadastra ponto turistico</a></li>
			</ol>
			<h1>Cadastrar categorias</h1>
			<div class="boxGaleria">
				<div class="formCadast">

					<form  class="container_formulario" action="?p=cadastro_categoria" method="POST" enctype="multipart/form-data">
						<h1>Cadastrar categorias</h1>
						<div >

							<div class="f_campo">	
								<label for="nome">pontos:</label><br />
								<input type="text" name="nome" class="formCampo"   placeholder="Cadastrar categoria">
								

							</div>

							<div class="boxFormBtn">
								<input class="formBtn" type="submit" name="enviar" value="cadastrar">
								<input class="formBtn" type="reset" name="limpar" value="apagar">
							</div>
							<?php if(isset($mensagem)){
									echo "<p class='form_mensagem'>".$mensagem."</p>"; 
								}?>
						</div>

					</form>
				</div>
			</div>

		</article>

		<?php include "aside.php";	?>


	</section>
	<?php 	require_once("rodape.php");?>


	<?php mysql_close($conexao); ?>


