/* visualizarzonaproyectada.js */

/*
|
| 
|
*/

$(function(){
	/*
	|
	|	entramos al detalle de una proyeccion de zona al hacerle click.
	|
	*/
	$('.menu_zonas_inf li[zona="inf"]').on('click',function(){
		alert(20);
	});

	/*
	|
	|	entramos al detalle de una proyeccion de zona al hacerle click.
	|
	*/
	$('.menu_zonas_inf ol[zona="inf"].new_zonaproyection').on('click',function(){
		console.log('crear nueva proyeccion');
		$('.zona_inf').fadeOut(0,function(){
			$.ajax({
				type	: 'POST',
				data 	: '',
				url 	: 'listadezonasparaproyectar',
				success : function(data){
					$('#content_data_sis').html(data).fadeIn(0);
					$('ul[zonaslistado=""] li[zona=""]').off('click').on('click',function(){
						$this = $(this);
						$dataid = (parseInt(escape($this.attr('data-id'))) || NaN);
						if($dataid>0){

							$('.selected_zone').html($this.html()).fadeIn(0,function(){
								$('ul[zonaslistado=""]').fadeOut(0);
								$('.listadodezonas h2').html('agrega productos a esta zona');
								$('ul[agregarproductos=""]').fadeIn(0);

								$('ul[agregarproductos=""] li[agregar=""]').off('click').on('click',function(){
									if($('ul[agregarproductos=""] li[agregar=""]').data('form_productos_to_list') != undefined){
										alert($('ul[agregarproductos=""] li[agregar=""]').data('form_productos_to_list'));
									}else{
										$('ul[agregarproductos=""] li[agregar=""]').data('form_productos_to_list','hola');
									}
								});
							});
						}
						// alert($dataid);
					});

					$('.volver').off('click').on('click',function(){	
						$('#content_data_sis').fadeOut(0,function(){
							$('.zona_inf').fadeIn(0);
						});
					});
				},
				error 	: function(){

				}
			});

			// $('#content_data_sis').html('<div class="listadodezonas"><h2>Elige una Zona a Proyectar</h2><ul zonaslistado><li data-id="12" zona estrellas="3">zona Lima <span>juancho jefecito de zona</span></li><li zona></li><li zona></li><li zona></li><li zona></li><li zona></li><li zona></li><li zona></li><li zona></li></ul></div>').fadeIn(0);
			/*$('ul[zonaslistado=""] li[zona=""]').off('click').on('click',function(){
				$this = $(this);
				$dataid = (parseInt(escape($this.attr('data-id'))) || NaN);

				alert($dataid);
			});*/
		});
	});

});

