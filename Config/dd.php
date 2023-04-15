<?php

//função de debug

function dump($dump)
{
	echo'<pre>';
	//echo "ClasseName: ".get_class($thiss);
	var_dump($dump);
	echo'</pre>';
}

function printr($data)
{
	echo'<pre>';
	print_r($data);
	echo'</pre>';
}
