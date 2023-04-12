

	<section class="container-pagDois">
		<article class="box-pagDois form_conteiner">
			<ol>
				<li><a href="index.php">inicio</a></li>
				<li><a href="login">login</a></li>
			</ol>
			<h1>Logar </h1>

			<div class="pagDois-conteudo">
				<div class="formCadast form_conteiner">

					<form class="container_formulario" action="?p=login" method="POST" enctype="multipart/form-data">

						<h1>Login</h1>
						<div class="">
							<div class="f_campo">
								<label for="f_username">Usuario: </label>
								<input type="text" name="f_username" id="f_username" class="formCampo" value="" placeholder="Username" required="required">
							</div>

							<div class="f_campo">
								<label for="f_senha">Senha: </label>
								<input type="password" name="f_senha" id="f_senha" class="formCampo" value="" placeholder="senha" required="required">
							</div>

							<div>
								<p>Não tem conta?<a href="cadastrar_usuario.php"> cadastrar-se</a></p>
							</div>

							<div class="boxFormBtn">
								<input class="formBtn" type="submit" name="f_logar" value="Entrar">
							</div>
						</div>
						<?php if (isset($mensagem)) {
						    echo "<p class='form_mensagem'>" . $mensagem . "</p>";
						} ?>

					</form>

				</div>
			</div>
			</div>



		</article>



	</section>


	<!--   incio Rodape -->
	