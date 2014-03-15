<!DOCTYPE html>
<html lang="es">
<head>
	<?= $this->load->view($header); ?>
</head>
<body>
	<?= $this->load->view($view); ?>
</body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/all.js#xfbml=1&appId=251816601660806";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<footer>
	<?= $this->load->view($footer); ?>
	<!-- </span>
		<p style="padding-left: 30px;">
			<span style="color: #333399;"> Gianpiere Ramos Bernuy.</span>
		</p>
	<span style="color: #333399;"> -->
</footer>