<!DOCTYPE html>
<html lang="pt-Br">

<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-type" value="text/html; charset=UTF-8" />
	<title><?= isset($data['titulo'])? 'Conheça o'. $data['titulo']:  $title; ?> | Linda Manaus</title>
	<meta name="viewport" content="width=device-width ,initial-scale=1">
	<link rel="icon" href="logo.ico">
	<link rel="stylesheet" type="text/css" href= "<?= PATH_CSS ?>style.css">
	<link rel="stylesheet" type="text/css" href="<?= PATH_CSS ?>pag-dois.css">
	<meta property="og:url" content="<?php echo $url ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="<?php echo $title;?>"/>
	<meta property="og:description" content="<?php echo $description;?>" />
	<meta property="og:image" content="http://amazoniabela.esy.es/img/Teatro-amazonas/Teatro-amazonas-1.jpg" />


</head>

<body>