<?php
namespace App\Controllers\admin5078c;

class LoadViewsController
{
    private static $content;

    public static function loadViews($path  ,$data =[],$dataObject = [])
    {
        ob_start();
        
        extract($data);
        extract($dataObject);
        require_once PATH.DIRECTORY_SEPARATOR."App/Views/_admin/_adminhead.php";
        require_once PATH.DIRECTORY_SEPARATOR."App/Views/_admin/_adminmenu.php";
        require_once PATH.DIRECTORY_SEPARATOR."App/Views/_admin/{$path}.php";
        require_once PATH.DIRECTORY_SEPARATOR."App/Views/_admin/_adminfooter.php";

        self::$content = ob_get_contents();

        ob_end_clean();

        return self::$content;
    }
}