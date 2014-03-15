/*
|	Funciones del Gerente General.
| 	GerenteGeneral.js
*/
$(function(){
	/*
	|	Crear una nueva Proyeccion.
	*/
	$('button[cerozonas=""]').on('click',function(){
		$.ajax({
			type	: 'POST',
			data 	: '',
			url		: 'newProyection',
			success : function(data){
				$('.zona_inf').fadeOut(0);
				$('#content_data_sis').html(data);
			},
			error	: function(){
				console.log('error');
			}
		})
	});

	/*
	|	en caso de darle click a volver, sin haber creado una proyeccion mostramos la ventana original.
	*/

	$('button[volver=""]').on('click',function(){
		$('#content_data_sis').html('').fadeOut(0);
		$('.zona_inf').show(0);

	});
});