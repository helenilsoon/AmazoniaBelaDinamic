<div class="container-menu">
	<div class="container_usuario">
	</div>
	<div class="menu">
		<div class="logo">
			<img src="img/logo-amazonia-bela.png" />
		</div>
		<input type="checkbox" id="bt-menu" />
		<label for="bt-menu">&#9776;</label>
		<nav id="menu">

			<ul>
				<li><a href="/home">Inicio</a></li>
				<li><a href="/galeria" class="bt-dow">Galeria</a></li>
				<li>
					<input type="checkbox" id="sub-menu">
					<label for="sub-menu" class="bt-dow">Arquivos</label>
					<ul id="submenu">
						<li><a href="/teatro-amazonas">Teatro Amazonas</a></li>
						<li><a href="/Praia-da-ponta-Negra">Ponta Negra</a></li>
						<li><a href="/Praia-da-Lua">Praia da lua</a></li>
					</ul>
				</li>

				<?php
                if (isset($_SESSION['username'])) {
                    $numero_login = $_SESSION['numlogin'];
                    $usuario = $_SESSION['username'];
                    $escrever = "<li>";
                    $escrever .=   "<input type='checkbox' id='minhaConta'>";
                    $escrever .=   "<label for='minhaConta' class='bt-dow'>" . $usuario . "</label>";
                    $escrever .=   "<ul id='menu_minhaconta'>";
                    $escrever .=      "<li><a href='minha_conta'>minha conta</a></li>";
                    $escrever .=      "<li><a href='/sair'>Sair</a></li>";
                    $escrever .=   "</ul>";
                    $escrever .= "</li>";
                } else {
                    $escrever = "<li><a href='/login'>login</a></li>";
                }


				?>

				

			</ul>
		</nav>
	</div>
</div>