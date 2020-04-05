<?php require_once("conecta.php");

session_start();

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

	<section class="container-pagDois">
		<article class="box-pagDois form_conteiner">
			<ol>
				<li><a href="index.php">voltar</a></li>
				<li><a href="cadastrar_usuario.php">Cadastrar usuario</a></li>
			</ol>
			<h1>Cadastre-se :)</h1>

			
			<div class="pagDois-conteudo">

				<div class="formCadast">
					
					<?php 
					if(isset($_POST['f_cadastrar'])){
						$nome = $_POST['f_nome'];
						$username = $_POST['f_username'];
						$email = $_POST['f_email'];
						$senha = $_POST['f_senha'];

						$sql_cadastrar = "INSERT INTO tb_usuario (id_usuario,nome,username,email,senha) VALUES(NULL,'$nome','$username','$email','$senha')";
						mysqli_query($conexao,$sql_cadastrar);
						$res = mysqli_affected_rows($conexao);


						if ($res==0){
							echo "Erro ao cadastrar usuario";
						}else{
							echo "Cadastrado com sucesso";
							$chave1 ="abcdefghijklmnopqrstuvxwyz";
							$chave2 ="ABCDEFGHIJKLMNOPQRSTUVXWYZ";
							$chave3 ="0123456789";
							$key =str_shuffle($chave1.$chave2.$chave3);
							$tam = strlen($key);
							$num ="";
							$qtde=rand(20,50);
							for($i=0;$i<$qtde;$i++ ){
								$pos=rand(0,$tam);
								$num.=substr($key,$pos,1);

								$_SESSION['numlogin']=$num;
								$_SESSION['username']=$username;
								$_SESSION['acesso'] =$ret['acesso'];
								header("location:gerenciamento.php?num=$num");
							}
						}


					}

					?>
					<br />
					<form  class="container_formulario" action="?p=cadastrar_usuario" method="POST" name="f_login" enctype="multipart/form-data">
						<h1>CADASTRE-SE</h1>
						<div class="">
							<div class="f_campo">		
								<label for="f_nome">Nome: </label>
								<input type="text" id="f_nome" name="f_nome" class="formCampo"  value="" placeholder="Nome completo" required="required">
							</div>

							<div class="f_campo">	
								<label for="f_username">Nome de usuario:</label>
								<input type="text" id="f_username" name="f_username" class="formCampo"  value="" placeholder="username" required="required">
							</div>
							<div class="f_campo">	
								<label for="f_email">E-mail</label>
								<input type="email" id="f_email" name="f_email" class="formCampo"  value="" placeholder="usuario@mail.com" required="required">
							</div>
							<div class="f_campo">	
								<label for="f_senha">Senha:</label>
								<input type="password" id="f_senha" name="f_senha" class="formCampo"  value="" placeholder="********" required="required">
							</div>
							<div ><p>ja tem conta? <a href="login.php">fazer login</a></p></div>


							<div class="boxFormBtn">
								<input class="formBtn" type="submit" name="f_cadastrar" value="Cadastrar"> 
							</div>
						</div>
					</form>

				</div>

			</div>

		</div>
	</article>



</section>


<!--   incio Rodape -->
</div>
<?php 	require_once("rodape.php");?>

<?php mysql_close($conexao); ?>

