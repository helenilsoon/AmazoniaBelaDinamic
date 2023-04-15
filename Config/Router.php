<?php

namespace Config;

use Config\Debug;
use App\Helpes\routes;
use App\Controllers\Erro404Controller;
use App\Controllers\touristSpotController;

//use App\Controllers\admin5078c\PontoTuristicoController;

class Router
{
	private $request;
	private $method;

	public function __construct()
	{
		$this->method();
		$this->request();
	}

	public function get()
	{
		$uri = rtrim($this->request, '/');
		$groupPage = explode('/', $uri)	;

		$uriAdmPages = isset($groupPage[2]) ? $groupPage[2] : '';
		$isAdminUrl = $uri  == '/' . ADM_URL  || $uri == '/' . ADM_URL . '/' . $uriAdmPages;
		$isTouristSpot = $uri == "/pontos-turistico" || strpos($uri,'/pontos-turistico')!== false  ;
		$strpos =  strpos( $uri ,"/pontos-turistico");
		
		
		if ($isAdminUrl) {
				
			$uri = $this->getPagesAdmin($uri);
			
		} else if ($isTouristSpot){
			
			
			$uri = $this->getPagesTouristSpot($uri);
			
		} else{
			
			$uri = $this->getPages($uri);
		}
	}

	public function post()
	{
	}

	private function getPagesAdmin($uri)
	{
		$routes = routes::routes();

		if (array_key_exists($uri, $routes)) {

			list($controller, $method) = explode('@', $routes[$uri]);

			$namespaceIntace = "App\\Controllers\\admin5078c\\$controller";

			$objInstace = new $namespaceIntace();
			$objInstace->$method();
		} else {
			$erro404 = new Erro404Controller();
			$erro404->index('Erro404');
		}
	}

	private function getPagesTouristSpot($uri)
	{
		
		list(,$uri, $touristSpot) = explode('/', $uri);
		$getTouristSpot = new touristSpotController();
		$dataTouristSpot = $getTouristSpot-> getTouristSpot($touristSpot);

		


		$routes = routes::routes();

		if (array_key_exists($uri, $routes)) {

			list($controller, $method) = explode('@', $routes[$uri]);
			list($method, $page) = explode(':', $method);
			 

			$namespaceIntace = "App\\Controllers\\$controller";

			$objInstace = new $namespaceIntace();
			$objInstace = $objInstace->$method($page,$dataTouristSpot);
		} else {
			$erro404 = new Erro404Controller();
			$erro404->index('Erro404');
		}
	}
	private function getPages($uri)
	{
		$routes = routes::routes();

		if (array_key_exists($uri, $routes)) {

			list($controller, $method) = explode('@', $routes[$uri]);
			list($method, $page) = explode(':', $method);
			

			$namespaceIntace = "App\\Controllers\\$controller";

			$objInstace = new $namespaceIntace();
			$objInstace = $objInstace->$method($page);
		} else {
			$erro404 = new Erro404Controller();
			$erro404->index('Erro404');
		}
	}

	private function method()
	{
		$this->method = $_SERVER['REQUEST_METHOD'];
	}

	private function request()
	{
		$this->request = $_SERVER['REQUEST_URI'];
	}
}
