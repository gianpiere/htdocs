/***  ***/
$('button.verdetalletrimestre').on('click',function(e){
	alert(123);
});

/*** asignacion de proyeccion ***/
$('.onasigne').on('click',function(e){ $this = $(this);
	$padre = $this.parent(); $trimestreid = $padre.attr('data-id');
	$.ajax({
		type	: 'POST',
		data 	: '',
		url 	: 'verdetalledecontrolpdmip',
		success	: function(data){
			$.when($('#detalles_vercpdemip').remove()).then(function(){
				$('.opcionesdeproyeccionestrimestrales').prepend('<span id="detalles_vercpdemip">'+data+'</span>');
			});
		},
		error 	: function(){
			
		}
	})
	alert($trimestreid);
});

