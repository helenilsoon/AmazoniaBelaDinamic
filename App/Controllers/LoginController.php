<?php

namespace App\Controllers;

class LoginController extends PageController
{
    public function __construct()
    {
        //seta titulo da pagina
        //url e descrição
        $this->setHead('Login', 'www.amazoniabela.com', 'efetuar login para ter acesso');


    }

}
