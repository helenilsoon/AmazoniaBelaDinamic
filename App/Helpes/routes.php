<?php

namespace App\Helpes;

class routes
{
	public static function routes()
	{
		$routes = [
			'/' => 'HomeController@index:home',
			'/home' => 'HomeController@index:home',
			'/login' => 'LoginController@index:login',
			'/galeria' => '',
			 '/'.ADM_URL  =>'AdminController@index',
			 '/'.ADM_URL.'/cadastrar_categoria'  =>'CategoriaController@index',
			 '/'.ADM_URL.'/cadastro_pontos_turistico'  =>'PontoTuristicoController@index',
			 '/'.ADM_URL.'/cadastrar_usuario'  =>'AdminController@index',
			 
			 
			];
		return $routes;
	}
}
