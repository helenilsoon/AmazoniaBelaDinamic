<?php

namespace App\Controllers;

use App\Models\TouristSpot;

class HomeController extends PageController
{
	public function __construct()
	{
		
		
		$this->setHead('Bem vindo a Manaus', 'www.amazoniabela.com', 'Conheça a amazônia');
		$this->addDataObjectToview();
			
		
	}
	

	public function it(){

		$this->setData(TouristSpot::selectAll());
	}
}
