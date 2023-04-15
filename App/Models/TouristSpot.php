<?php 
namespace App\Models;

use PDO;
use Config\Conexao;

class TouristSpot 
{
    public static function selectURl($url)
    {
        $sql = 'SELECT * FROM tb_ponto_turistico WHERE url = :URL';
        
        $stmt= Conexao::getConexao();

        $stmt= $stmt->prepare($sql);
        $stmt->bindParam(":URL", $url );
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
    public static function selectAll(){
        $sql = 'SELECT * FROM tb_ponto_turistico';
        
        $stmt = Conexao::getConexao();
        $stmt= $stmt->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // printr($result);
         return $result;

        // foreach ($result as $data){

        // }
        
        
    }
}