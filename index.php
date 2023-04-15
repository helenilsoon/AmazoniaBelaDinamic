<?php

session_start();

require_once 'vendor/autoload.php';

use Config\Debug;
use Config\Router;

$r = new Router();
$r->get();

error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);


