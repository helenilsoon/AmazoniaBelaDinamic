<?php

namespace App\Models;

use Config\Conexao;

class Categorias
{
    public function getCategorias()
    {

        $conn = Conexao::getConexao();
        $sql = 'SELECT * FROM tb_categoria';
        $stmt= $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);

        return $result;

    }
}
