<?php



if(!isset($_SESSION['username'])) {
    header("location: ?p=login");
}
?>



	<div class="btn_gerenciameto">	
		<button><a href="cadastro_categoria.php">Cadastro categoria</a></button>
		<button><a href="cadastro_pontos_turistico.php">cadastra ponto turistico</a></button>
	</div>
	<section class="container-pagDois">
		<article class="box-pagDois">
			<ol>
				<li><a href="index.php">inicio</a></li>
				<li><a href="cadastro_pontos_turistico.php">cadastra ponto turistico</a></li>
			</ol>
			<h1>Cadastrar categorias</h1>
			<div class="boxGaleria">
				<div class="formCadast">

					<form  class="container_formulario" action="?p=cadastro_categoria" method="POST" enctype="multipart/form-data">
						<h1>Cadastrar categorias</h1>
						<div >

							<div class="f_campo">	
								<label for="nome">pontos:</label><br />
								<input type="text" name="nome" class="formCampo"   placeholder="Cadastrar categoria">
								

							</div>

							<div class="boxFormBtn">
								<input class="formBtn" type="submit" name="enviar" value="cadastrar">
								<input class="formBtn" type="reset" name="limpar" value="apagar">
							</div>
							<?php if(isset($mensagem)) {
							    echo "<p class='form_mensagem'>".$mensagem."</p>";
							}?>
						</div>

					</form>
				</div>
			</div>

		</article>

		


	</section>
	