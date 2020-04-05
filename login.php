<?php require_once("conecta.php");

session_start();
require_once("funcoes.php");
carregaPagina();
if (isset($_SESSION['username'])) {
	header("location: gerenciamento.php");
}

if (isset($_POST['f_logar'])) {
	$username = $_POST['f_username'];
	$senha = $_POST['f_senha'];
	$sql_logar = "SELECT * FROM tb_usuario WHERE username = '$username' AND senha='$senha' ";
	$res = mysqli_query($conexao, $sql_logar);

	$ret = mysqli_fetch_array($res);

	if ($ret == 0) {
		$mensagem = "login ou senha incorretos";
	} else {
		$chave1 = "abcdefghijklmnopqrstuvxwyz";
		$chave2 = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
		$chave3 = "0123456789";
		$key = str_shuffle($chave1 . $chave2 . $chave3);
		$tam = strlen($key);
		$num = "";
		$qtde = rand(20, 50);
		for ($i = 0; $i < $qtde; $i++) {
			$pos = rand(0, $tam);
			$num .= substr($key, $pos, 1);

			$_SESSION['numlogin'] = $num;
			$_SESSION['username'] = $username;
			$_SESSION['acesso'] = $ret['acesso'];
			header("location:gerenciamento.php?num=$num");
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
	<meta property="og:url" content="http://amazoniabela.esy.es/teatro-amazonas.html" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="amazoniabela" />
	<meta property="og:description" content=" Bem vindo a amazonia bela" />
	<meta property="og:image" content="http://amazoniabela.esy.es/img/Teatro-amazonas/Teatro-amazonas-1.jpg" />
	<script type="text/javascript" src="js/jquery-3.4.1.js"></script>

</head>

<body>
	<!--          topo       -->
	<?php require_once("topo.php"); ?>

	<section class="container-pagDois">
		<article class="box-pagDois form_conteiner">
			<ol>
				<li><a href="index.php">inicio</a></li>
				<li><a href="login">login</a></li>
			</ol>
			<h1>Logar </h1>

			<div class="pagDois-conteudo">
				<div class="formCadast form_conteiner">

					<form class="container_formulario" action="?p=login" method="POST" enctype="multipart/form-data">

						<h1>Login</h1>
						<div class="">
							<div class="f_campo">
								<label for="f_username">Usuario: </label>
								<input type="text" name="f_username" id="f_username" class="formCampo" value="" placeholder="Username" required="required">
							</div>

							<div class="f_campo">
								<label for="f_senha">Senha: </label>
								<input type="password" name="f_senha" id="f_senha" class="formCampo" value="" placeholder="senha" required="required">
							</div>

							<div>
								<p>Não tem conta?<a href="cadastrar_usuario.php"> cadastrar-se</a></p>
							</div>

							<div class="boxFormBtn">
								<input class="formBtn" type="submit" name="f_logar" value="Entrar">
							</div>
						</div>
						<?php if (isset($mensagem)) {
							echo "<p class='form_mensagem'>" . $mensagem . "</p>";
						} ?>

					</form>

				</div>
			</div>
			</div>



		</article>



	</section>


	<!--   incio Rodape -->
	</div>
	<?php require_once("rodape.php"); ?>

	<?php mysqli_close($conexao); ?>