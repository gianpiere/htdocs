$(function(){
	/******* editar un producto y ver sus detalles *******/
	$('ul.presentacionesdelproducto li.presentacion_p').on('click',function(){
		// alert('Editar Producto 345345');
		$this = $(this); 
		$ctpId = $this.attr('data-id');
		$fname = $this.attr('data-familyname');
		$pname = $this.attr('data-productname');
		$prsnt = $this.attr('data-presentacion');
		$price = $this.attr('data-precio');
		$cntds = $this.attr('data-cantidades');
		// alert('datos:'+$ctpId);
		$('.content_editandnew_presentaciondeproductoinList').fadeIn(0,function(){
			$Params = {
				elementoId			: $ctpId,
				nombredelproducto 	: $pname,
				presentacionname 	: $prsnt,
				cantidadxdefecto	: $cntds,
				precioaprox 		: $price,
				costoaprox 			: ($cntds * $price),
				btns 				: {cancel:'Cancelar',ok:'Cambiar'},
				searcfamilyText 	: '',
				familyText 			: $fname,
				ProductText 		: $pname,
				PresentacionesHtml 	: '<li data-id="1" class="presentacion">'+$prsnt+'</li>',
				lockedinputsearch 	: true
			};

			$('.content_editandnew_presentaciondeproductoinList').html($.AppendEditorNuevoProductoPresentacion($Params));

			$('#btn_cancelar').off('click').on('click',function(e){
				/*** Por Instinto ***/
				$('.content_editandnew_presentaciondeproductoinList').fadeOut(0,function(){$(this).html('');});
			});
		});

		/***** Control de auto CALC : promediar cantidad (num) * precio *****/
		$('#cantidad').on('keyup',function(e){ $this = $(this);
			$cant = (parseInt($this.val()) || 0);
			$aprx = parseFloat($('.aproxprice').text() || 0);
			$('.aproxcosto').text(String(parseInt($cant) * parseFloat($aprx)));
		});


		/**** Btn: Actualizar dato ****/
		$('#btn_aceptar').on('click',function(){ $this = $(this);
			$newval = $('#cantidad');
			if ($newval.val() == $newval.attr('placeholder')){
				alert('No ha Realizando ningun Cambio, el campo cantidad sigue siendo el mismo');
				$('.content_editandnew_presentaciondeproductoinList').fadeOut(0,function(){
					$('.content_editandnew_presentaciondeproductoinList').html('');	
				});
				return 0;
			}else if(parseInt($newval.val()) > 0 ){
				$.ajax({
					type	: 'POST',
					data 	: 'proyeccioncntElementId='+$this.attr('data-id')+'&newCantidad='+$newval.val(),
					url 	: 'Zna_cambiarmicntproyeccionElement',
					success : function(data){
						// alert('se realizo el cambio correctamente!');
						try{
							$data = $.parseJSON(data);
							if($data[0][0] == '00'){
								alert($data[0][1]);
							}
						}catch(e){ alert('se realizo el cambio correctamente!'); }

						$('.content_editandnew_presentaciondeproductoinList').fadeOut(0,function(){
							$('.content_editandnew_presentaciondeproductoinList').html('');
						});
					},
					error 	: function(){
						alert('surgio un problema intentelo nuevamente');
					}
				});
			}
			
		});


		/**** Btn: Eliminar Elemento ****/
	})


	/******* Agregar una nueva presentacion de un producto *******/
	$('ul li button.addPresentacion').on('click',function(e){
		$.ajax({
			type	: 'POST',
			data 	: '',
			url 	: 'nuevoProductoListaparaEscoger',
			success : function(data){
				$('#fullcontent_createnewpp').remove();

				$.when($('.detalle_mes_container').prepend('<span id="fullcontent_createnewpp"></span>'))
				 .then($('.detalle_mes_container #fullcontent_createnewpp').html(data))
				
			},
			error 	: function(){

			}
		});
	});

	$.AppendEditorNuevoProductoPresentacion = function($Params){ 
		$defauls = {
			elementoId 			: 0,
			nombredelproducto 	: '',
			presentacionname 	: '',
			cantidadxdefecto	: 0,
			precioaprox 		: 0,
			costoaprox 			: 0,
			btns 				: {cancel:'Cancelar',ok:'Aceptar',eliminar:true},
			searcfamilyText 	: '',
			familyText 			: '',
			ProductText 		: '',
			PresentacionesHtml 	: '',
			lockedinputsearch 	: false

		}; $Parameters = $.extend(($defauls,$Params||{}));

		$html = '';
		$html +='<div class="content_formulario_newpresentacion">';
		$html +='	<div class="form_center">';
		$html +='		<div class="section_search">';
		$html +='			<div class="inpbuscar"><i class="icn lupa"></i><input type="text" name="search" id="search" class="search" placeholder="Ingrese: Familia,Producto,codigo" '+($Parameters.lockedinputsearch ? 'readonly="readonly"' : '')+' /></div>';
		$html +='		</div>';
		$html +='		<div class="content_producto_controls">';
		$html +='			<div class="detalle">';
		$html +='				<div class="titulo_delproducto_detalle"><span class="dat_o">'+$Parameters.nombredelproducto+'</span></div>';
		$html +='				<div class="nombre_delproducto_detalle">Presentacion : <span class="dat_o">'+$Parameters.presentacionname+'</span></div>';
		$html +='				<div class="cantidad_content_producto">';
		$html +='					<strong>Cantidad: <input type="text" name="cantidad" id="cantidad" class="cantidad number" placeholder="'+$Parameters.cantidadxdefecto+'" value="'+ $Parameters.cantidadxdefecto +'" required /></strong>';
		$html +='				</div>';
		$html +='				<div class="precio_aprox">';
		$html +='					<p>precio aproximado del producto : <span>$ </span><span><span class="dat_o aproxprice">'+$Parameters.precioaprox+'</span></span></p>';
		$html +='				</div>';
		$html +='				<div class="costo_aprox">';
		$html +='					<p>Costo Aproximado: <span>$ </span><strong><span class="dat_o aproxcosto">'+$Parameters.costoaprox+'</span></strong></p>';
		$html +='				</div>';
		$html +='				<div class="btn_aceptar">';
		$html +='					<button id="btn_aceptar" data-id="'+$Parameters.elementoId+'">'+$Parameters.btns.ok+'</button>';
		$html +='					<button id="btn_cancelar">'+$Parameters.btns.cancel+'</button>';
		$html +='					<button id="btn_deletePr" data-id="'+$Parameters.elementoId+'" style="display:'+($Parameters.btns.eliminar ? 'block' : 'none')+';">'+$Parameters.btns.eliminar+'</button>';
		$html +='				</div>';
		$html +='			</div>';
		$html +='			<div class="lista">';
		$html +='				<ul class="result_search dat_o">';
		$html +='					<ol class="family">'+$Parameters.familyText+'</ol>';
		$html +='					<ol class="name">'+$Parameters.ProductText+'</ol>';

		$html +=					$Parameters.PresentacionesHtml;

		// $html +='					<li data-id="1" class="presentacion">1/2 Lt</li>';
		// $html +='					<li data-id="2" class="presentacion">1 Lt</li>';
		// $html +='					<li data-id="3" class="presentacion">2 Lt</li>';
		// $html +='					<li data-id="4" class="presentacion">1 Kg L</li>';
		// $html +='					<li data-id="5" class="presentacion">2 Kg L</li>';
		// $html +='					<li data-id="6" class="presentacion">3 Kg L</li>';
		// $html +='					<li data-id="7" class="presentacion">5 Lt</li>';
		// $html +='					<li data-id="8" class="presentacion">5 Kg</li>';


		$html +='				</ul>';
		$html +='			</div>';
		$html +='		</div>';
		$html +='	</div>';
		$html +='</div>';

		return $html;
	}

})