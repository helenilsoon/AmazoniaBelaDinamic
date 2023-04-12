<?php
 namespace App\Controllers\admin5078c;

 use App\Controllers\admin5078c\CategoriaController;
 use App\Models\PontoTuristico;
 use Config\Debug;

class PontoTuristicoController
{

    public function index()
    {
        $data =[
            'title'=>'Cadastro de pontos turistico',
            'url'=>'Cadastro de pontos turistico',
            'description'=>'Cadastro de pontos turistico',
            
        ];
        $categoria = new CategoriaController();
        $categoria = $categoria->getCategoria();
        
        
        $view = LoadViewsController::loadViews('pontos_turistico_view',$data,$categoria);
        echo $view;

    }
    public function addPontosTuristico(){
           
        if(isset ($_POST)){
             

             $add = new PontoTuristico();
             $add->addData($_POST);

        }
    }
    public function editPontoTuristico()
    {
        require_once  ADM_PATH."/editar_ponto_turistico.php";
    }

}