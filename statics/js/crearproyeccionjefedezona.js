/*crearproyeccionjefedezona.js*/

$(function(){
	$('button[cerozonas=""]').on('click',function(e){
		// clicked.
		console.log('clicked 56723 - 2');
		$('.form_creacion_proyecciondezona').fadeIn(0);
	});

	$('#form_aceptarCreaciondeProyeccionGeneral').on('submit',function(e){ $this = $(this);
		e.preventDefault();
		$.ajax({
			type 	: 'POST',
			data 	: ''+$this.serialize(),
			url 	: 'crearnuevaproyecciondeunazona',
			success : function(data){
				console.log(data);
				$('#form_creacion_proyecciondezona').fadeOut(0);
			},
			error 	: function(){
				$('#form_creacion_proyecciondezona').fadeOut(0);
			}
 		})
		$('#form_creacion_proyecciondezona').fadeOut(0);
	});

	$('.proyeccionesdezonaactiva .proyeccion').on('click',function(e){ $this = $(this);
		/*$cntdr = $('.menudeubicaciones nav ul.navegacionlist');
		var ts = Math.round((new Date()).getTime() / 1000);
		$newid = '<li id="'+ts+'" >Proyecciones</li>';
		$cntdr.append($newid);
		$('#'+ts).data('contenido',$('.zona_inf').html());
		$('#'+ts).on('click',function(){
			$('.zona_inf').html($('#'+ts).data('contenido'));
		});*/


		
		$dataid = $this.attr('data-id');
		$mitext = $this; $mitext = $mitext.html().substr(0,$mitext.html().indexOf('<'));

		$(document).data('niveles1','<li ruta="detalleproyecciondeunazona" params="'+$dataid+'">'+$mitext+'</li><ol></ol><i></i>');
		
		$.ajax({
			type 	:'POST',
			data 	: 'proyecciondezonaid='+$dataid,
			url 	: 'detalleproyecciondeunazona',
			success : function(data){
				$('.zona_inf').html(data);
			},
			error 	: function(){

			}
		});
	});

	$('.menucreacionproyeccionzona button').on('click',function(){
		$('.form_creacion_proyecciondezona input').val('');
		$('.form_creacion_proyecciondezona').fadeIn(0);
	});

	$('#form_create_new_proyecciongeneral').on('submit',function(e){
		e.preventDefault();
		$.ajax({
			type 	: 'POST',
			data 	: 'titulo='+$('#descripcion').val()+'&montosugerido='+$('#cash').val(),
			url 	: 'nuevaproyeccionparamizona',
			success : function(data){
				$('.form_creacion_proyecciondezona').fadeOut(0,function(e){
					$('.zona_inf').html(data);
				});

			},
			error 	: function(){
				
			}
		})


	});
		

});