<?php
session_start();

require_once("vendor/autoload.php");

use App\Controllers\HomeController;
use App\Controllers\AdminController;
use App\Controllers\admin5078c\PontoTuristicoController;
use Config\Debug;

error_reporting(E_ALL);
 ini_set('error_reporting', E_ALL);

$request = $_SERVER['REQUEST_URI'];

$method = $_SERVER['REQUEST_METHOD'];




list(, $urlAdmin) = explode("/", $request);

// carregar paginas admnistrativas
if($urlAdmin == ADM_URL) {

    $admin = new AdminController();
    $admin->index();

    list(, $admUrl, $pageRequest)=(explode('/', $request));

    if (isset($admUrl) and isset($pageRequest)) {

        switch($pageRequest) {

            case('cadastrar_usuario'):
                
                $admin->addUser();
               
                break;
        
            case('cadastro_pontos_turistico'):

                if(isset($method) == $_POST){  
                   
                    $ptTuristico = new  PontoTuristicoController();
                    $ptTuristico->addPontosTuristico();
                     
                    $admin->getPontosTuristicos();
                                            
                    }else{
                       
                        $admin->getPontosTuristicos();
                    }

               
                break;
    
            case('cadastrar_categoria'):
                $admin->addCategoria();
                break;
        }
    }  
   
    die;
} else {
    echo "sem acesso";
    echo $urlAdmin;
}



if(isset($_GET['p'])) {
    $group = $_GET['p'];
    list($action) = explode('p=', $group);
    


} else {
    $group = '';
}

echo('$request : '.$request);
echo('<br>');



if ($group == '') {
    switch ($request) {
        case('/'):
            $home = new HomeController();
            $home->index('home');

            break;
        case('/home'):
            $home = new HomeController();
            $home->index('home');

            break;

        case('/login'):

            $login = new LoginController();
            $login->index('login');

            break;
        case('/galeria'):

            $galeria = new GaleriaController();
            $galeria->index('galeria');
            break;

        default:
            $erro404 = new Erro404Controller();
            $erro404->index('Erro404');

            break;
    }
} else {

    




}
