$(function(){
	$('.crearpro').on('click',function(){
		$('.glas_creaciondenuevaproyeccion').fadeOut(0);
	});


		$('.navegacionlist').append($(document).data('niveles1'));
		// console.log($(document).data('niveles1'));
	

	$('.containt_child_meses ul li').on('click',function(){ $this = $(this);
		$dataid = $this.attr('data-id');
		$mitext = 
		$(document).data('niveles1','<li ruta="detalleproyecciondeunazona" params="'+$dataid+'">'+$mitext+'</li><ol></ol><i></i>');
		

		$.ajax({
			type	: 'POST',
			data 	: 'mes='+$this.attr('data-id')+'&proyeccionid='+$this.parent().attr('data-proyeccionid'),
			url 	: 'herramientasdeproyecciondezona',
			success : function(data){
				$('.zona_inf')
					.append(data)
					.data('params',{mes:$this.attr('data-id'),proyeccionid:$this.parent().attr('data-proyeccionid')});
				;
			},
			error 	: function(){

			}
		})
	});


});
