<?php

namespace App\Controllers;

use App\Controllers\PageController;

class Erro404Controller extends PageController
{
    public function __construct()
    {
        //seta titulo da pagina
        //url e descrição
        $this->setHead('Sorry :( Essa página não existe', 'www.amazoniabela.com', 'Conheça a amazônia');


    }







}
