<title><?= isset($this->title) ? $this->title: ''; ?></title>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="<?=CSS;?>ResetElements.css">
<link rel="stylesheet" type="text/css" href="<?=CSS;?>Thematica.css">
<link rel="stylesheet" type="text/css" href="<?=CSS;?>icons/icons.css" />
<link rel="stylesheet" type="text/css" href="<?=CSS;?>Controls.css" />
<link rel="stylesheet" type="text/css" href="<?=CSS;?>normalstyle.css" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="alternate" title="GRB RSS" type="application/rss+xml" href="/feed.rss" />

<script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js"></script>

<?php // Cargar Imagenes del Diseño Web antes de mostrar la web.
	if(isset($this->images) && is_array($this->images)):
		foreach ($this->images as $images => $IMAGES) {
			echo '<img src="'.$IMAGES.'" hidden style="display:none;">';
		}
	endif;
?>

<?php // Cargar los estilos de la web.
	if(isset($this->css) && is_array($this->css)):
		foreach ($this->css as $css => $CSS){
			echo '<link rel="stylesheet" type="text/css" href="'.$pathmask.$CSS.'">';
		}
	endif;
?>

<?php // Cargar los estilos de la web.
	if(isset($this->js) && is_array($this->js)):
		foreach ($this->js as $js => $JS){
			echo '<script type="text/javascript" src="'.$pathmask.$JS.'"></script>';
		}
	endif;
?>
