<?php

namespace Config;

class Debug{
    
    public static function printR($data)
    {
        echo'<pre>';
        print_r($data);
        echo'</pre>';
    }

    //classe que ta chamando e os dados
    public static function dump($data)
    {
        echo'<pre>';      
        //echo "ClasseName: ".get_class($thiss);
        var_dump($data);
        echo'</pre>';
    }
}