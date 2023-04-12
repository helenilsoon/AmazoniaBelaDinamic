<?php

session_start();

require_once 'vendor/autoload.php';

use Config\Debug;
use Config\Router;

$r = new Router();
$r->get();

error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

// list(, $urlAdmin) = explode("/", $request);

// // carregar paginas admnistrativas
// if($urlAdmin == ADM_URL) {

//     $admin = new AdminController();
//     $admin->index();

//     list(, $admUrl, $pageRequest)=(explode('/', $request));

//     if (isset($admUrl) and isset($pageRequest)) {

//         switch($pageRequest) {

//             case('cadastrar_usuario'):

//                 $admin->addUser();

//                 break;

//             case('cadastro_pontos_turistico'):

//                 if(isset($method) == $_POST){

//                     $ptTuristico = new  PontoTuristicoController();
//                     $ptTuristico->addPontosTuristico();

//                     $admin->getPontosTuristicos();

//                     }else{

//                         $admin->getPontosTuristicos();
//                     }

//                 break;

//             case('cadastrar_categoria'):
//                 $admin->addCategoria();
//                 break;
//         }
//     }

//     die;
// } else {
//     echo "sem acesso";
//     echo $urlAdmin;
// }

// if(isset($_GET['p'])) {
//     $group = $_GET['p'];
//     list($action) = explode('p=', $group);

//     Debug::varDump($action);

// } else {
//     $group = '';
// }

// echo('$request : '.$request);
// echo('<br>');

//}
