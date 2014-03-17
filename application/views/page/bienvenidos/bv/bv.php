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
				ejemplo
			</div>
			<nav class="menuhome">

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