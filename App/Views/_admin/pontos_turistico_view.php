
<div class="btn_gerenciameto">	
		<button><a href="cadastro_categoria.php">Cadastro categoria</a></button>
		<button><a href="cadastro_pontos_turistico.php">cadastra ponto turistico</a></button>
	</div>

	<section class="container-pagDois">
		<article class="box-pagDois ">
			<ol>
				<li><a href="/">inicio</a>    </li>
				<li><a href="/cadastro_pontos_turistico">Cadastro ponto turistico</a></li>
			</ol>
			<h1>Cadastro ponto turistico</h1>

			<div class="pagDois-conteudo">				
				<div class="formCadast">

					<form action="/admin78955/cadastro_pontos_turistico" method="POST" enctype="multipart/form-data">
						<h1>Cadastrar pontos turisticos</h1>
						<div class="">
							<div class="f_campo">	
								<label for="titulo">Titulo:</label><br />
								<input type="text" name="titulo" class="formCampo"  value="" placeholder="titulo da	postagem">
							</div>
							<div class="f_campo">	
								<label for="url">url:</label><br />
								<input type="text" name="url" class="formCampo"  value="" placeholder="url">
							</div>
							<div class="f_campo">	
								<label for="categoria">categoria:</label><br />
								<select name="idcategoria">
									<option value=""> Selecione </option><br>";
									<?php
                                                                        
                                            foreach($data as $values){
                                                echo "<option value=" .$values['id_categoria']. ">" .$values['categoria']."</option><br>";
                                                
                                            
                                            }
                                            
								    ?>
								</select>

							</div>

							<label for="descricao">Texto:</label><br />
							<textarea class="textarea" name="texto" ></textarea>

							<div class="f_campo">	
								horario de funcionamento:<br>
								<div class="f_horarios">
									<div>
										<div class="diaSemana">Segunda á Sexta:</div><div><input text="time" name="diasuteis" placeholder="00:00 á 00:00"></div>
										<div class="diaSemana">Finais de semana:</div><div><input text="time" name="finaldesemana" placeholder="00:00 á 00:00"> </div>
										<div class="diaSemana">Feriados: </div><div><input text="time" name="feriados" placeholder="00:00 á 00:00"></div>
										
									</div>
									

									<div>
										<div class="f_campo">	
											valor entrada:	<input type="number" placeholder="R$00,00" name='valorentrada'>

										</div>
									</div>
                                    <div>
										<div class="f_campo">	
                                        latitude:	<input type="text" placeholder="-3.1160913" name='latitude'>

										</div>
                                        <div class="f_campo">	
                                        longitude:	<input type="text" placeholder="-59.9979233" name='longitude'>

										</div>
									</div>

								</div>									
							</div>
							<div class="f_campo">	
								<label for="f_endereco">Endereço:</label><br />
								<input type="text" id="f_endereco" name="f_endereco" class="formCampo"  value="" placeholder="Endereço">
							</div>
							

							
							<label for="descricao">Link do mapa:</label><br />
							<textarea  name="urlmapa" rows="2" cols="50"  ></textarea>


							<div class="formImagem">
								<label>Imagens:</label><br />
								<div class="input_file">
									<input type="file" name="img" class="btn_img" >
									<div id="add_img"> 
									</div>

								</div>
								<div>	
									<input  class="btn_mais" type="button" name="criarCampos" onclick="addCampos()" value="+">	
								</div>
							</div>

							<div class="boxFormBtn">
								<input class="formBtn" type="submit"  value="enviar">
								<input class="formBtn" type="reset" name="limpar">
							</div>
						</div>
					</form>
				</div>
			</div>
		</article>

		

	</section>

