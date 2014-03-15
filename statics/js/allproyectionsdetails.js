$(function(){
	$('.zonaslist .zona').on('click',function(e){
		// code..
	});

	$('#publicar_progen').on('click',function(){
		$GeneralProyeccion = window.location.href.split('/')[window.location.href.split('/').length-1];
		if($('#publicar_progen').text() != 'Hacer Publico'){return 0;} // cancelar otros eventos.
		$.ajax({
			type	: 'POST',
			data 	: 'GeneralProyeccion='+$GeneralProyeccion+'&asigneval=1',
			url		: 'aprobarmigeneralproyection',
			success	: function(data){
				try{
					$data = $.parseJSON(data);
					if($data[0] == 1){
						$('#publicar_progen').text('es publico!');
					}
				}catch(e){}
			},
			error 	: function(){

			}

		});
	});

	$('.productsstadisticproyections button').on('click',function(e){
		$progenid = ($('#publicar_progen').attr('data-id') || undefined);
		$.ajax({
			type	: 'POST',
			data 	: 'progenid='+$progenid,
			url 	: '../vistaporproducto',
			success : function(data){
				$.when($('#body').append('<div id="fancydatosxproducto"></div>')).then(function(){
					$('#fancydatosxproducto').html(data);
				});
			},
			error 	: function(){

			}
		})
	});

})