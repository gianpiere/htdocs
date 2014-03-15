// allproyections.js
$(function(){
	$('#lista .proyeccion').on('click',function(e){ $this = $(this);
		$dataid = $this.attr('data-id'); if($dataid == undefined || $dataid == '') return 0
	});

	$('.filameses ul li').on('click',function(e){ $this = $(this);
		$dataid = $this.attr('data-id');

		$.ajax({
			type 	: 'POST',
			data 	: '',
			url 	: 'detalle',
			success : function(data){

			},
			error 	: function(){

			}
		})
	});


	/*
	|
	|	
	| 
	*/

	$('.ProyeccionesGenerales #content .headerfx button').on('click',function(e){
		
	});
});