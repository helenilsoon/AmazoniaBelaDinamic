<?php

require_once("funcoes.php");


carregaPagina();
require_once("conecta.php");
if (isset($_GET['cod'])) {
    $cod = $_GET['cod'];
    $consulta = "SELECT * FROM tb_ponto_turistico where cod = $cod";
    $result = $conexao->query($consulta) or die("nao conectado" . $conexao->connect_errno);
    if ($r = mysqli_fetch_assoc($result)) {
        $cod = $r['cod'];
        $titulo = $r['titulo'];
        $url = $r['url'];
        $texto = $r['texto'];
        $img = $r['img'];
        $img1 = $r['img1'];
        $img2 = $r['img2'];
        $img3 = $r['img3'];
        $img4 = $r['img4'];
        $img5 = $r['img5'];
    }
} else {
    echo "Erro na pagina contate helenilson@gmail.com";
}



?>
<!DOCTYPE html>
<html lang="html">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-type" value="text/html; charset=UTF-8" />
    <title><?= $titulo ?> | Amazonia Bela</title>
    <meta name="viewport" content="width=device-width ,initial-scale=1">
    <link rel="icon" href="logo.ico">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/pag-dois.css">
    <meta property="og:url" content="http://amazoniabela.ml/<?= $titulo ?>.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?= $titulo ?>" />
    <meta property="og:description" content="<?= $titulo ?>" />
    <meta property="og:image" content="http://amazoniabela.ml/upload/<?= $img ?>" />


</head>

<body>


    <!--menu-->
    <?php require_once("topo.php"); ?>

    <!--fim menu-->

    <section class="container-pagDois">
        <article class="box-pagDois">
            <ol>
                <li><a href="?p=page_home.php">inicio</a></li>
                <li><a href="?p=galeria.php">Galeria</a></li>
                <li><a href="?p=teatro-amazonas"><?= $titulo ?></a></li>
            </ol>
            <h1><?= $titulo ?></h1>
            <span class="autor">by <a href="helenilson.html">Helenilson oliveira</a> 09 Dez 2018</span>
            <div class="tagsEcompartilhar">

                <div class="tags">
                    <a href="?p=<?= $url ?>"><?= $titulo ?></a>
                    <a href="?p=ponto_turistico.">ponto turistico</a>
                    <a href="#">Manaus-AM</a>
                </div>
                <div class="compartilhar">


                    <div class="fb-like" data-href="http://amazoniabela.ml/<?= $url ?>.html" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>

                    <a class="twitter-share-button" href="https://twitter.com/intent/tweet"> Tweet</a>

                </div>
            </div>
            <div class="pagDois-boxImg">

                <figure class="galeria-img">
                    <img src="upload/<?= $img ?>" alt="teatro 1" style="width:100%">
                    <legend> <?= $titulo ?></legend>
                    <span class="credito">creditos: Elias moraes</span>
                </figure>
                <figure class="galeria-img">
                    <img src="upload/<?= $img1 ?>" style="width:150%">
                    <legend> Teatro amazonas 2</legend>
                    <span class="credito">creditos: Elias moraes</span>
                </figure>
                <figure class="galeria-img">
                    <img src="upload/<?= $img2 ?>" style="width:100%">
                    <legend> Frente Teatro</legend>
                    <span class="credito">creditos: Elias moraes</span>

                </figure>
                <figure class="galeria-img">
                    <img src="upload/<?= $img3 ?>" style="width:100%">
                    <legend> Teatro amazonas 4</legend>
                    <span class="credito">creditos: Carla lima</span>
                </figure>
                <figure class="galeria-img">
                    <img src="upload/<?= $img4 ?>" style="width:100%">
                    <legend> Teatro amazonas 5</legend>
                    <span class="credito">creditos: Carla lima</span>
                </figure>
                <figure class="galeria-img">
                    <img src="upload/<?= $img5 ?>" style="width:100%">
                    <legend> Teatro amazonas 6</legend>
                    <span class="credito">creditos: Elias moraes</span>
                </figure>
                <script type="text/javascript">
                    var slideInicio = 1;
                    galeria(slideInicio);

                    function passar(n) {
                        galeria(slideInicio += n);
                    }

                    function galeria(n) {
                        var i;
                        var x = document.getElementsByClassName("galeria-img");
                        if (n > x.length) {
                            slideInicio = 1
                        }
                        if (n < 1) {
                            slideInicio = x.length
                        }
                        for (i = 0; i < x.length; i++) {
                            x[i].style.display = "none";
                        }
                        x[slideInicio - 1].style.display = "block ";

                    }
                </script>
                <div onclick="passar(1)" class="proximo"></div>
                <div onclick="passar(-1)" class="anterior"></div>



                </script>
            </div>
            <div class="pagDois-conteudo">
                <h2><?= $titulo ?></h2>
                <p><?= $texto ?></p>


                <h3>Horários de funcionamento:</h3>
                <ul class="horario">

                    <li>Segunda: 09:00 ás 17:00 </li>
                    <li>Terça: 09:00 ás 17:00</li>
                    <li>Quarta: 09:00 ás 17:00</li>
                    <li>Quinta: 09:00 ás 17:00</li>
                    <li>Sexta: 09:00 ás 17:00</li>
                </ul>
                <h3>Valor entrada: $20</h3>
            </div>
        </article>
        <!-- Aaside-->

        <?php

        include "aside.php";

        ?>
        <!-- Mapa-->
    </section>
    <section class="container-pagDois-mapa">
        <div class="pagDois-mapa">
            <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!4v1540841489051!6m8!1m7!1sCAoSLEFGMVFpcFBlcEpXcmFCRzMxckY0YmZzc05pcFE0X1E1bzlmcjZwYXVaOTJz!2m2!1d-3.13027!2d-60.0234897!3f339.3955647448292!4f69.4017804663576!5f0.7820865974627469" frameborder="0" style="border:0;width:100%; height:500px;" allowfullscreen></iframe>
        </div>
        <div class="comentarios">
            <div id="disqus_thread"></div>
        </div>
    </section>
    <!--DIQUS-->

    <!--   incio Rodape -->
    <?php

    require_once("rodape.php");


    ?>

    <?php mysqli_close($conexao); ?>



    <script>
        window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
                t._e.push(f);
            };

            return t;
        }(document, "script", "twitter-wjs"));
    </script>

    <script>
        /**
         *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
         *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

        var disqus_config = function() {
            this.page.url = "http://amazoniabela.esy.es"; // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = "Praia-da-ponta-Negra.html"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };

        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document,
                s = d.createElement('script');
            s.src = 'https://amazoniabela-esy-es.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>