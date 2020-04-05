<?php

function carregaPagina()
{
	(isset($_GET['p'])) ? $pagina = $_GET['p'] : $pagina = "home";

	if (file_exists($pagina . '.php')) {
		require_once($pagina . '.php');
	} else {
		if (isset($_GET['cod'])) {
			$cod = $_GET['cod'];
			require_once("local.php");
		} else {
			require_once('home.php');
		}
	}
}

function carregaPontoTuristico()
{
	(isset($_GET['p'])) ? $pagina = $_GET['p'] : $pagina = "index";
	if (file_exists($pagina . '.php')) :
		require_once($pagina . '.php');
	else :
		require_once('ponto_turistico.php');
	endif;
}
