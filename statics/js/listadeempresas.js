$(document).on('ready',function(){
	$('.send_empresa').on('click',function(){
		$.ajax({
			type 	: 'POST',
			data 	: 'empresa='+$(this).attr('data-id'),
			url 	: "CorpUser/SistemadeProyecciones",
			success	: function(data){
				if(data = 1){
					window.location = 'CorpUser/Esquemas';
				}
			},
			error 	: function(){

			}
		});
	});
});