$(function(){
	/*
	|
	| Boton crear proyecciones : evento al hacer click.
	|
	*/
	$('.bg_new_proyeccion').on('click',function(){
		alert('crear proyección');
		$('.zona_inf').fadeOut(0,function(){$('#content_data_sis').fadeIn(0);});
	})
})