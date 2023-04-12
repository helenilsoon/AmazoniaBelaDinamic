<?php

// require_once("conecta.php");
// session_start();

// if(!isset($_SESSION['username'])){
// 	header("location: ?p=login");
// }

$categoria= " SELECT * FROM tb_categoria";
//$lista= mysqli_query($conexao, $categoria);


if(isset($_GET['addCampos'])) {
    $img = $_GET['img2'];

    function criarCampos()
    {
        $sql = "ALTER TABLE 'tb_ponto_turistico' ADD '$img' VARCHAR(100) NOT NULL AFTER 'idcategoria'";

        $exectar = mysqli_query($conexao, $sql);
        if(!$executar) {
            echo "erro ao criar campo";
        }

    }
}

?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-type" value="text/html; charset=UTF-8" />
	<title>Linda Manaus</title>
	<meta name="viewport" content="width=device-width ,initial-scale=1">
	<link rel="icon" href="logo.ico"> 
	<link rel="stylesheet" type="text/css" href="../Src/css/style.css">
	<link rel="stylesheet" type="text/css" href="../Src/css/pag-dois.css">
	<meta property="og:url"           content="" />
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

<div class="container-menu">
	<div class="container_usuario">
	</div>
	<div class="menu">
		<div class="logo">
			<img src="../img/logo-amazonia-bela.png" />
		</div>
		<input type="checkbox" id="bt-menu" />
		<label for="bt-menu">&#9776;</label>
		<nav id="menu">

			<ul>
				<li> <a href="/admin78955" class="bt-dow">inicio</a></li>
				<li> <a href="/admin78955/cadastrar_usuario" class="bt-dow">user</a></li>            
                <li><a href="/admin78955/cadastrar_categoria" class="bt-dow">categoria</a></li>
                <li><a href="/admin78955/cadastro_pontos_turistico" class="bt-dow">pt turistico</a></li
				
                <li>
					<input type="checkbox" id="sub-menu">
					<label for="sub-menu" class="bt-dow">perfil</label>
					<ul id="submenu">
						<li><a href="#">configuração</a></li>
						
						<li><a href="#">sair</a></li>
					</ul>
				</li>

				<?php
                if (isset($_SESSION['username'])) {
                    $numero_login = $_SESSION['numlogin'];
                    $usuario = $_SESSION['username'];
                    $escrever = "<li>";
                    $escrever .=   "<input type='checkbox' id='minhaConta'>";
                    $escrever .=   "<label for='minhaConta' class='bt-dow'>" . $usuario . "</label>";
                    $escrever .=   "<ul id='menu_minhaconta'>";
                    $escrever .=      "<li><a href='minha_conta'>minha conta</a></li>";
                    $escrever .=      "<li><a href='/sair'>Sair</a></li>";
                    $escrever .=   "</ul>";
                    $escrever .= "</li>";
                } else {
                    $escrever = "<li><a href='/login'>login</a></li>";
                }


?>

				

			</ul>
		</nav>
	</div>
</div>
   

   
