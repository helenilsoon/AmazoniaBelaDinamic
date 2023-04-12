<?php

namespace App\Controllers;

abstract class PageController
{
    private $head =[];
    private $content;

    public function index($page)
    {
        $head = $this->getHead();
        ob_start();

        extract($head);
        require_once  PATH."/App/Views/_head.php";
        require_once  PATH."/App/Views/_menu.php";
        require_once  PATH."/App/Views/".$page."Views.php";
        require_once  PATH."/App/Views/_footer.php";

        $this->content=ob_get_contents();

        ob_end_clean();
        echo $this->content;




    }
    public function setHead(string $title ='', string $url ='', string $description ='')
    {
        $this->head['title']= $title;
        $this->head['url']= $url;
        $this->head['description']= $description;


    }

    public function getHead()
    {
        return $this->head;

    }




}
