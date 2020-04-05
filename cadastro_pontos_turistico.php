<?php

error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);
require_once("conecta.php");
session_start();

if(!isset($_SESSION['username'])){
	header("location: ?p=login");
}

$categoria= " SELECT * FROM tb_categoria";
$lista= mysqli_query($conexao, $categoria);


if(isset($_GET['addCampos'])){
	$img = $_GET['img2'];

		function criarCampos(){
			$sql = "ALTER TABLE 'tb_ponto_turistico' ADD '$img' VARCHAR(100) NOT NULL AFTER 'idcategoria'";

			$exectar = mysqli_query($conexao,$sql);
			if(!$executar){
				echo "erro ao criar campo";
			}
		
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
	<script type="text/javascript">	
		function addCampos(){
			var add = document.createElement('input');
			add.setAttribute('type','file');
			document.getElementById('add_img').appendChild(add);
		}
	</script>

</head>
<body>
	<!--          topo       -->
	<?php require_once("topo.php"); ?>
	<div class="btn_gerenciameto">	
		<button><a href="cadastro_categoria.php">Cadastro categoria</a></button>
		<button><a href="cadastro_pontos_turistico.php">cadastra ponto turistico</a></button>
	</div>

	<section class="container-pagDois">
		<article class="box-pagDois ">
			<ol>
				<li><a href="?p=index">inicio</a>    </li>
				<li><a href="?p=teatro-amazonas">Cadastro ponto turistico</a></li>
			</ol>
			<h1>Cadastro ponto turistico</h1>

			<div class="pagDois-conteudo">				
				<div class="formCadast">

					<form action="upload.php" method="POST" enctype="multipart/form-data">
						<h1>Cadastrar pontos turisticos</h1>
						<div class="">
							<div class="f_campo">	
								<label for="titulo">Titulo:</label><br />
								<input type="text" name="titulo" class="formCampo"  value="" placeholder="titulo da	postagem">
							</div>
							<div class="f_campo">	
								<label for="url">url:</label><br />
								<input type="text" name="url" class="formCampo"  value="" placeholder="url">
							</div>
							<div class="f_campo">	
								<label for="categoria">categoria:</label><br />
								<select name="idcategoria">
									<?php 
									while ($linha = mysqli_fetch_assoc($lista)) {
										?>
										<option value="4"><?php echo $linha['categoria']; ?></option>
									<?php } ?>
								</select>

							</div>

							<label for="descricao">Texto:</label><br />
							<textarea class="textarea" name="textarea" ></textarea>

							<div class="f_campo">	
								horario de funcionamento:<br>
								<div class="f_horarios">
									<div>
										<div class="diaSemana">segunda:</div>
										<div class="diaSemana">terça: </div>
										<div class="diaSemana">quarta:</div>
										<div class="diaSemana">sexta:</div>
										<div class="diaSemana">sexta:</div>
										<div class="diaSemana">sabado</div>
										<div class="diaSemana">domingo</div>
									</div>
									<div>
										<div><input type="time" name=""> as <input type="time" name=""></div>
										<div><input type="time" name=""> as <input type="time" name=""></div>
										<div><input type="time" name=""> as <input type="time" name=""></div>
										<div><input type="time" name=""> as <input type="time" name=""></div>
										<div><input type="time" name=""> as <input type="time" name=""></div>
										<div><input type="time" name=""> as <input type="time" name=""></div>
										<div><input type="time" name=""> as <input type="time" name=""></div>
									</div>

									<div>
										<div class="f_campo">	
											valor entrada:	<input type="number" placeholder="R$00,00">

										</div>
									</div>

								</div>									
							</div>
							<div class="f_campo">	
								<label for="f_endereco">Endereço:</label><br />
								<input type="text" id="f_endereco" name="f_endereco" class="formCampo"  value="" placeholder="Endereço">
							</div>
							

							
							<label for="descricao">Link do mapa:</label><br />
							<textarea class="textarea" name="textarea" ></textarea>


							<div class="formImagem">
								<label>Imagens:</label><br />
								<div class="input_file">
									<input type="file" name="img" class="btn_img" >
									<div id="add_img"> 
									</div>

								</div>
								<div>	
									<input  class="btn_mais" type="button" name="criarCampos" onclick="addCampos()" value="+">	
								</div>
							</div>

							<div class="boxFormBtn">
								<input class="formBtn" type="submit" name="enviar" value="enviar">
								<input class="formBtn" type="reset" name="limpar">
							</div>
						</div>
					</form>
				</div>
			</div>
		</article>

		<?php include "aside.php";	?>

	</section>

	<?php 	require_once("rodape.php");?>




	<?php mysql_close($conexao);
	?>
