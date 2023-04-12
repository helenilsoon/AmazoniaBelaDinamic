<?php

namespace Config;

class Conexao
{
    public static $instance;

    private function __construct()
    {
    }
    public static function getConexao()
    {
        try {
            if(!isset(self::$instance)) {
                self::$instance = new \PDO(
                    'mysql:host=database;dbname=dbAmazoniabela',
                    'root',
                    '82111971',
                    array(\PDO::MYSQL_ATTR_INIT_COMMAND =>"SET NAMES UTF8")
                );

                self::$instance->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
                self::$instance->setAttribute(\PDO::ATTR_ORACLE_NULLS, \PDO::NULL_EMPTY_STRING);


            }
            return self::$instance;
        } catch(PDOException $erro) {
            echo $erro;
        }

    }
}
