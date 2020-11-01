<?php
require_once "conecta.php";
$titulo = $_POST['titulo'];
$id_categoria = $_POST['idcategoria'];
$texto = $_POST['textarea'];
$url = $_POST['url'];

$msg = false;

if (isset($_FILES['img']['name'])) {
    $extensao = strtolower(substr($_FILES["img"]["name"], -4));
    $novo_nome = strtolower($_POST['url']) . md5(time()) . $extensao;
    $diretorio = "upload/";

    move_uploaded_file($_FILES["img"]["tmp_name"], $diretorio . $novo_nome);

    $sql_code = "INSERT INTO tb_ponto_turistico (cod,titulo,texto,img,url,idcategoria) VALUES (NULL,'$titulo','$texto','$novo_nome','$url','$id_categoria')";
    $enviar = mysqli_query($conexao, $sql_code);

    if (!$enviar) {
        die("erro ao enviar");
    }

    mysqli_close($conexao);

}

?>
<?php
if ($msg != false) {
    echo "<p>$msg<p/>";
}

echo ("$titulo<br />");
echo ("$texto<br />");
echo ("$novo_nome<br />");
echo ("$sql_code<br />");
echo ("$url<br />");
