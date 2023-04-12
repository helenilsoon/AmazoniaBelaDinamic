<?php

namespace Config;

class Debug{
    
    public static function printR($data)
    {
        echo'<pre>';
        print_r($data);
        echo'</pre>';
    }
    public static function varDump($data)
    {
        echo'<pre>';
        var_dump($data);
        echo'</pre>';
    }
}