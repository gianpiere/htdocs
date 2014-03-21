<div class="inicialheader">
	<div class="content socialplugins">
		<a href="#"><button class="lnkfacebook"></button></a>
		<div class="useraccess">
			<button id="ingresar" type="button"><?= lang('Global.ingreso'); ?></button>
		</div>
	</div>
</div>
<section id="wrap">
	<div class="rasgadoL"></div>
	<div class="responsive allcontent">
		<section class="msgtop">
			
		</section>
		
		<section class="panel access">
			<div class="left logohome">
				<a href="#Home"><img src="<?=IMG;?>logo/logosuperior.png" width="100%" height="auto" /></a>
			</div>
			<!-- aqui el devocional y el menu -->
			<div class="devocional left">
				<div class="msg_dev">
					<div class="cunha"></div>
					<div class="mensaje"><?=(isset($this->devocional) && !empty($this->devocional)) ? $this->devocional['textcontent'] : ''?></div>
				</div>
				<div class="rutabiblica" align="right"><span><?=(isset($this->devocional) && !empty($this->devocional)) ? $this->devocional['rutabiblica'] : ''?></span></div>
			</div>
			<nav class="menuhome">
				<a href="Home"><?= lang('Global.Home'); ?></a>
				<a href="Nosotros"><?= lang('Global.Us'); ?></a>
				<a href="Actividades"><?= lang('Global.Activities'); ?></a>
				<a href="Cursos"><?= lang('Global.Courses'); ?></a>
				<a href="Fotos"><?= lang('Global.Photos'); ?></a>
				<a href="Contactenos"><?= lang('Global.Contact'); ?></a>
				<a href="Mas" class="icn_mas lnkfocus"><?= lang('Global.Mas'); ?></a>
			</nav>
		</section>
		
		<section class="panel bannerTop">
			<img src="<?=IMG;?>bannerPrincipal/banner.jpg" height="auto" width="auto" />
		</section>

		<div class="separacion_1">
			
		</div>

		<section class="sliderpanel panel">
			<div class="controls">
				<div class="Texto" style="color:white;text-align:right;padding:10px;"><h2 style="color:yellow;">titulo</h2>este es un texto de prueba, <br/>solo de prueba y blanblablablal alsadasd sa s </div>
				<button class="sld_action"><a href="#11">entrar</a></button>
				<div class="slideposition">
					<i class="nofocus"></i>
					<i class="onfocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
					<i class="nofocus"></i>
				</div>
			</div>
			<div> <img src="<?=SLIDER;?>slider_1.png" width="100%" height="auto" class="img_responsive"> </div>
		</section>

		<section class="optionfocushome colorfocuspanel">
			<!-- Cursos -->
			aaa
			<!-- Cursos -->
		</section>

	</div>
	<div class="rasgadoR"></div>
	<script type="text/javascript">
		
		function formularioRegistro(){
			console.info('registrarme!');
		}
		
		$(function(){
			$('#ingresar').on('click',formularioRegistro);
		})

	</script>
</section>