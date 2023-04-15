<?php

namespace App\Controllers;

abstract class PageController
{
    private $head =[];
    private $content;
    private $dataObject=[];

    public function index($page,$data = [], $objectData = [])
    {
        
        $ObjectDataToview=$this->getData();

        $head = $this->getHead();
        ob_start();
        
        extract($head);
        extract($data);
        extract($objectData);
        extract($ObjectDataToview);
        
        require_once  PATH."/App/Views/_head.php";
        require_once  PATH."/App/Views/_menu.php";
        require_once  PATH."/App/Views/".$page."Views.php";
        require_once  PATH."/App/Views/_footer.php";

        $this->content=ob_get_contents();

        ob_end_clean();
        echo $this->content;




    }
    public function setData($data){
        
       $this->dataObject = $data;
    }
    public function getData(){
       
        return $this->dataObject;
     }
    public function addDataObjectToview(){}
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
