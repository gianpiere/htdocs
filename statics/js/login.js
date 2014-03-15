/*
*| Funciones de inicio de session.
*/

$(function(){
	$("#sessionInit button").removeAttr('disabled'); // borramos el disabled del boton.

	$('#sessionInit').on('submit',function(event){   // evitamos el envio GET e iniciamos el logeo por POST
		event.preventDefault();
		var data = $("#sessionInit").serialize();
		$("#sessionInit button").attr('disabled','false');
		$.ajax({
			type	: 'POST',
			data 	: data,
			url		: 'validateuser',
			success : function(data){
				try{
					data = $.parseJSON(data);
					if(data[0] == 0){
						alert('error en el servidor: '+data[1]);
					}else if(data[0] == 1){
						window.location = 'landingPageUser';
					}
				}catch(e){
					$('html').append(data);
				}
				$("#sessionInit button").removeAttr('disabled');
			},
			error 	: function(){
				alert('surgio un error intentelo nuevamente');
				$("#sessionInit button").removeAttr('disabled');
			}
		});

	});
});