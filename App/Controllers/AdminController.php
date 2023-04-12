<?php

namespace App\Controllers;

use App\Controllers\admin5078c\CategoriaController;
use App\Controllers\admin5078c\PontoTuristicoController;
use Config\Debug;


class AdminController
{
    public function index()
    {

        require_once  ADM_PATH. "/dashboard.php";
    }
    public function addUser()
    {
        require_once  ADM_PATH."/cadastrar_usuario.php";
    }
       //echo 'estamos na pagina de admin';
    public function addCategoria()
    {
        $categoria = new CategoriaController();
        $categoria->index();

    }
    public function getPontosTuristicos(){
        $ptTuristico = new PontoTuristicoController();
        $ptTuristico->index();
    }
    
   

}
