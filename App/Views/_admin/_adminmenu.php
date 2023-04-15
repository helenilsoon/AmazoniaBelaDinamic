<div class="container-menu">
	<div class="container_usuario">
	</div>
	<div class="menu">
		<div class="logo">
			<img src="../img/logo-amazonia-bela.png" />
		</div>
		<input type="checkbox" id="bt-menu" />
		<label for="bt-menu">&#9776;</label>
		<nav id="menu">

			<ul>
				<li> <a href="/admin78955" class="bt-dow">inicio</a></li>
				<li> <a href="/admin78955/cadastrar_usuario" class="bt-dow">user</a></li>
				<li><a href="/admin78955/cadastrar_categoria" class="bt-dow">categoria</a></li>
				<li><a href="/admin78955/cadastro_pontos_turistico" class="bt-dow">pt turistico</a></li>
				<li>
					<input type="checkbox" id="sub-menu">
					<label for="sub-menu" class="bt-dow">perfil</label>
					<ul id="submenu">
						<li><a href="#">configuração</a></li>

						<li><a href="#">sair</a></li>
					</ul>
				</li>

				<?php
				if (isset($_SESSION['username'])) {
					$numero_login = $_SESSION['numlogin'];
					$usuario = $_SESSION['username'];
					$escrever = '<li>';
					$escrever .= "<input type='checkbox' id='minhaConta'>";
					$escrever .= "<label for='minhaConta' class='bt-dow'>" . $usuario . '</label>';
					$escrever .= "<ul id='menu_minhaconta'>";
					$escrever .= "<li><a href='minha_conta'>minha conta</a></li>";
					$escrever .= "<li><a href='/sair'>Sair</a></li>";
					$escrever .= '</ul>';
					$escrever .= '</li>';
				} else {
					$escrever = "<li><a href='/login'>login</a></li>";
				}

				?>



			</ul>
		</nav>
	</div>
</div>