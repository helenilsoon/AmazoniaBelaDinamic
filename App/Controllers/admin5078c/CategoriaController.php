<?php

namespace App\Controllers\admin5078c;

use App\Models\Categorias;
use App\Controllers\admin5078c\LoadViewsController;

class CategoriaController
{
    private $content;

    public function index()
    { 
        $data =[
            'title'=>'Cadastro de Categoria',
            'url'=>'',
            'description'=>'Cadastro de categorias',
            
        ];

        $view = LoadViewsController::loadViews('categorias_view',[],$data);
        echo $view;
       

    }
	public function getCategoria()
	{
		$categorias = new Categorias();
		$resp = $categorias->getCategorias();
        return $resp;
		
        
	}

}
