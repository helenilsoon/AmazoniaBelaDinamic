<?php

namespace Config;

use Config\Debug;
use App\Helpes\routes;
use App\Controllers\Erro404Controller;

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
					
		$groupPage = explode('/', $this->request);
		
		if($this->request == '/'.ADM_URL || $this->request == '/'.ADM_URL.'/'.$groupPage[2]){
			
			$uri = $this->getPagesAdmin($this->request);
			
		}else{
			
			$uri = $this->getPages($this->request);	
		}
		
		
		
	}
	

	public function post()
	{
	}

	private function getPagesAdmin($uri)
	{
		$routes = routes::routes();
		
		
		if (array_key_exists($uri, $routes)) {

			list($controller,$method) = explode('@', $routes[$uri]);

			//list($method, $page) = explode(':', $method);
			
			$namespaceIntace = "App\\Controllers\\admin5078c\\$controller";
			
			$objInstace = new $namespaceIntace();
			$objInstace->$method();

		} else {
			$erro404 = new Erro404Controller();
			$erro404->index('Erro404');
		}

	}

	private function getPages($uri)
	{
		$routes = routes::routes();

		if (array_key_exists($uri, $routes)) {

			list($controller,$method) = explode('@', $routes[$uri]);
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
