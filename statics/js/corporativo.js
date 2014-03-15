$(function(){

	/*
	| 
	|	supervisar el hash de la url para actualizar. 
	|
	*/
	var $hash_url = window.location.hash;
	if($hash_url !== ''){window.location.hash.split('?')[1] == 'silvestre' ? $.when($('#emp_selected').val(1)).then(function(){$('li[silvestre=""] img').css('display','inline')}) : $.when($('#emp_selected').val(2)).then(function(){$('li[neoagrum=""] img').css('display','inline')}); window.location.hash=''; $('.menu_esquemas').fadeIn(0);}

	/*
	| 
	|	Acciones a los botones del menu superior 
	|
	*/

	$('li[cnt="sqm"]').on('click',function(){ $this = $(this);
		$('#content_data_sis').fadeOut(0);

		$dataid = ($this.attr('data-id') 	|| false);
		$action = ($this.attr('action') 	|| false);
		$dataex = ($this.attr('data-exist')	|| false);

		$('li[cnt="sqm"]').removeAttr('onselected');
		$this.attr('onselected','');
		$('#zna_selected').val($this.attr('data-id'));

		if(jQuery.inArray($action,['zonasproyectadas','pendientes','proyecciontotal']) != -1){
			if($dataex == 'si'){
				$('.zona_inf').show(0).html('<p cerozonas>Cargando..</p>');
				try{
					$.ajax({
						type 	: 'POST',
						data 	: 'empresa='+(escape(parseInt($('#emp_selected').val())) || false ),
						url 	: $action,
						success : function(data){
							$('.zona_inf').html(data).show(0);
						},
						error	: function(){
							console.log('error');
						}
					})
				}catch(e){ }
			}else{
				if($dataid == 1){
					$('.zona_inf')
						.html('<p cerozonas>No existe ninguna zona proyectada</p><button cerozonas tabindex>Proyectar una zona</button><p simularzona>o<button simularzona tabindex>simular una proyeccion de zona</button></p>')
						.fadeIn(0)
					;
					$('button[cerozonas=""]').on('click',function(){
						alert(1);
					});
				}else if($dataid == 2){
					$('.zona_inf')
						.html('<p cerozonas>No existe ningun pendiente</p><p cerozonas><button cerozonas tabindex>Asignar un Pendiente</button>')
						.fadeIn(0)
					;
					$('button[cerozonas=""]').on('click',function(){
						alert(2);
					});
				}else if($dataid == 3){
					$('.zona_inf')
						.html('<p cerozonas>No existe ninguna proyeccion creada</p><button cerozonas tabindex>Crea una proyeccion</button><p simularzona>o<button simularzona tabindex>simular una proyeccion</button></p>')
						.fadeIn(0)
					;
					$('button[cerozonas=""]').on('click',function(){
						alert(3);
					});
				}else{
					window.location.reload();
				}
			}
		}

	});


	/*
	|
	|	Refrescar la pagina con la clase .refresh_clicked
	|
	*/

	$('.refresh_clicked').on('click',function(e){
		e.preventDefault();
		window.location.hash = 'refresh?'+($('#emp_selected').val() == 1 ? 'silvestre' : 'neoagrum');
		window.location.reload();
	});


	/*
	|
	|	Seleccionar una empresa.
	|
	*/
	$('div[seleccionarempresa=""] li').on('click',function(){
		$this = $(this);
		$('div[seleccionarempresa=""] li img').fadeOut(200);
		$($this).children('img').fadeIn(200);

		$('li[onselected=""]').removeAttr('onselected');
		$('.menu_esquemas').fadeIn(200);

		$('#emp_selected').val($this.attr('data-id'));
		$('#zna_selected').val('');
		$('.zona_inf').fadeOut(0);
	});

	/*
	|
	|
	|
	*/

})
