<?php


namespace App\Models;

use Config\Conexao;
use PDO;
use Config\Debug; 

class PontoTuristico
{

    public function  addData(array $data)
    {
        
        $res = $this->checkArrayIsEmpty($data);
        
        if($res){
            echo ("<h3> addDta:{$res}</h3>");
            
       }else{
        
            $titulo     = $data['titulo'];
            $texto      =$data['texto'];
            $img        =isset($data['img'])? $data['img']:'';
            $url        =$data['url'];
            $idCategoria=$data['idcategoria'];
            if( isset ($data['valorentrada']) && !empty($data['valorentrada']) ){
                $valor = $data['valorentrada'];
            }else{
                $valor = 00.00;
            }  

            
            $hrs_feriado=$data['feriados'];
            $hrs_finaldesemana=$data['finaldesemana'];
            $hrs_diautil=$data['diasuteis'];
            $latitude   =$data['latitude'];
            $url_mapa   =$data['urlmapa'];
            $longitude  =$data['longitude'];
            $endereco   =$data['f_endereco'];

            
            try{
                $conn = Conexao::getConexao();
            $sql = "INSERT INTO tb_ponto_turistico (
                titulo,
                texto,
                img,
                url,
                idCategoria,
                valor,
                hrs_feriado,           
                hrs_finaldesemana,
                hrs_diautil,
                latitude,
                url_mapa,
                longitude,
                endereco)VALUES(:titulo,:texto,:img,:url,:idCategoria,:valor,:hrs_feriado,:hrs_finaldesemana,:hrs_diautil,
                :latitude,:url_mapa,:longitude,:endereco) ";
        
        

            $stmt = $conn->prepare($sql);
            
            $stmt->bindValue(':titulo', $titulo);
            $stmt->bindValue(':texto', $texto);
            $stmt->bindValue(':img', $img);
            $stmt->bindValue(':url', $url);
            $stmt->bindValue(':idCategoria', $idCategoria);
            $stmt->bindValue(':valor', $valor);
            $stmt->bindValue(':hrs_feriado', $hrs_feriado);
            $stmt->bindValue(':hrs_finaldesemana', $hrs_finaldesemana);
            $stmt->bindValue(':hrs_diautil', $hrs_diautil);
            $stmt->bindValue(':latitude', $latitude);
            $stmt->bindValue(':url_mapa', $url_mapa);
            $stmt->bindValue(':longitude', $longitude);
            $stmt->bindValue(':endereco', $endereco);

            $stmt->execute();
            
            $resul = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            }catch(PDOException $e){
                echo 'Error'. $e->getMessage();
            }
            
            
        }
    }
    private function checkArrayIsEmpty ($data)
    {
         
        foreach ($data as $key => $value){
            if (empty($value)){
                return '<h4>Preencha o campo: '.$key.'</h4><br>';
                
            }else{
               

                
            }
            
        }
    }
        
}