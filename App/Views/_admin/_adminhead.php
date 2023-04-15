<?php
if (isset($_GET['addCampos'])) {
	$img = $_GET['img2'];

	function criarCampos()
	{
		$sql = "ALTER TABLE 'tb_ponto_turistico' ADD '$img' VARCHAR(100) NOT NULL AFTER 'idcategoria'";

		$exectar = mysqli_query($conexao, $sql);
		if (!$executar) {
			echo 'erro ao criar campo';
		}
	}
}

?>
<!DOCTYPE html>
<html lang="html">

<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-type" value="text/html; charset=UTF-8" />
	<title><?php  echo $title; ?> | Linda Manaus</title>
	<meta name="viewport" content="width=device-width ,initial-scale=1">
	<link rel="icon" href="logo.ico">
	<link rel="stylesheet" type="text/css" href="../../../Src/css/style.css">
	<link rel="stylesheet" type="text/css" href="../../../Src/css/pag-dois.css">
	<meta property="og:url" content="<?php echo $url ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="<?php echo $title; ?>" />
	<meta property="og:description"
		content="<?php echo $description; ?>" />
	<meta property="og:image" content="http://amazoniabela.esy.es/img/Teatro-amazonas/Teatro-amazonas-1.jpg" />

	<script type="text/javascript">
		function addCampos() {
			var add = document.createElement('input');
			add.setAttribute('type', 'file');
			document.getElementById('add_img').appendChild(add);
		}
	</script>

</head>

<body>