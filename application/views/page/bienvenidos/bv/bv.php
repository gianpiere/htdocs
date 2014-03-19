<div class="inicialheader">
	<div class="content socialplugins">
		<a href="#"><button class="lnkfacebook"></button></a>
	</div>
</div>
<section id="wrap">
	<div class="rasgadoL"></div>
	<div class="responsive allcontent">
		<section class="msgtop">
			<div class="socialplugins">
				<div class="useraccess">
						<button id="ingresar" type="button"><?= lang('Global.ingreso'); ?></button>
				</div>
			</div>
		</section>
		
		<section class="panel access">
			<div class="left logohome">
				<a href="#Home"><img src="<?=IMG;?>logo/logosuperior.png" width="100%" height="auto" /></a>
			</div>
			<!-- aqui el devocional y el menu -->
			<div class="devocional left">
				<div class="msg_dev">
					<div class="cunha"></div>
					<div class="mensaje">ejemplo</div>
				</div>
				<div class="rutabiblica" align="right"><span>14:01,02</span></div>
			</div>
			<nav class="menuhome">
				<a class="lnkfocus" href="#1">Home</a>
				<a href="#1">Nosotros</a>
				<a href="#1">Actividades</a>
				<a href="#1">Cursos</a>
				<a href="#1">Fotos</a>
				<a href="#1">Contactenos</a>
				<a href="#1">Mas</a>
			</nav>
		</section>
		
		<section class="panel bannerTop">
			<img src="<?=IMG;?>bannerPrincipal/banner.jpg" height="auto" width="auto" />
		</section>


		<section class="optionfocushome colorfocuspanel">
			<!-- Cursos -->

			<!-- Cursos -->
		</section>

		<section class="">
			
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