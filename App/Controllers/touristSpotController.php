<?php
namespace App\Controllers;

use App\Models\TouristSpot;

class touristSpotController extends PageController
{
    
    public function __construct()
    {
        
         $this->setHead('Bem vindo a Manaus', 'www.amazoniabela.com', 'Conheça a amazônia');
    }

    public function getTouristSpot($touristSpot)
    {
        $data = TouristSpot::selectURl($touristSpot);
        
        foreach($data as $d){}

        return $d;
    }
}
