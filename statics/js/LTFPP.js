$(function(){
	$('.msg_cerrarconfirm .center_content_cc button[cancel=""]').on('click',function(){
		$('.msg_cerrarconfirm').fadeOut(0,function(){
			// no action
		});
	});

	$('.msg_cerrarconfirm .center_content_cc button[ok=""]').on('click',function(){
		$('#fullcontent_createnewpp').remove();
	});

	$('i.icn.close').on('click',function(){
		$('.msg_cerrarconfirm').fadeIn(0);
	});



	/*
	|
	|	Manipulacion del Producto Seleccionado.
	|
	*/
	$('dl[producto!=""]').on('click',function(e){ $this = $(this);
		$producto_id = $this.attr('data-id');
		
		$.ajax({
			type	: 'POST',
			data 	: 'productoid='+$producto_id,
			url 	: 'nuevaPresentacionparamiproyecciondezona',
			success : function(data){
				try{
					$data = $.parseJSON(data);
					if($data[0] == '00'){
						alert('Ya Existe Este Producto en la Proyeccion para este mes,\n Elija otro Producto o Edite el Producto Actual')
					}
				}catch(e){}
				$('.zona_inf').data('history_one',$('.zona_inf').html());
				$('.zona_inf').html('<span id="presentacionesdelproducto" style="z-index:2;">'+data+'</span>');
			},
			error 	: function(){
				
			}
		});
	});


});