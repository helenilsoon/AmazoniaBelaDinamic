<?php 
		require_once("funcoes.php");
	session_start();
	
	if(!isset($_SESSION['username'])){
		header("location: login.php");
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
	<meta property="og:title"         content="Teatro Amazonas" />
	<meta property="og:description"   content="O Teatro Amazonas é um dos mais importantes teatros do Brasil e o principal cartão postal da cidade de Manaus.[6][7] Localizado no centro da cidade, no Largo de São Sebastião, foi inaugurado em 31 de dezembro de 1896 para atender ao desejo da alta sociedade amazonense da época, que queria que a cidade estivesse à altura dos grandes centros culturais." />
	<meta property="og:image"         content="http://amazoniabela.esy.es/img/Teatro-amazonas/Teatro-amazonas-1.jpg" />
	

</head>
<body>
	<?php require_once("topo.php"); ?>
	<div class="btn_gerenciameto">	
		<button><a href="cadastro_categoria.php">Cadastro categoria</a></button>
		<button><a href="cadastro_pontos_turistico.php">cadastra ponto turistico</a></button>
	</div>




<?php require_once("rodape.php"); ?>