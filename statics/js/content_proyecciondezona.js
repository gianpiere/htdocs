$(function(){
	/*content_proyecciondezona.js*/ 
	$('.peticion_pendienteaprobacion button').on('click',function(e){ $this = $(this);
		$padre = $this.parent();
		$padre.fadeOut(0,function(){

			// petcion AJAX del cambio
			$.ajax({
				type	: 'POST',
				data 	: 'proyecciondezonaid='+$this.parent().parent().parent().attr('data-id'),
				url 	: 'http://10.10.1.8:8087/aprobarproyecciondezona',
				success	: function(data){
					$padre = $this.parent().parent().parent();
					$padre.html(data);
				},
				error 	: function(){

				}
			})

			/*$('.zona_aprobacionfech .aprobado').fadeIn(0,function(){
				$('.zona_aprobacionfech .aprobado .btn_cancelap').on('click',function(e){ $this = $(this);
					$padre = $this.parent().parent().parent();
					$padre.fadeOut(0,function(){
						$this.off('click');
						$('.peticion_pendienteaprobacion').show(0);
						
					});
				})
			});*/
			// petcion AJAX del cambio
		});
	});

	$('.btn_cancelap').on('click',function(e){
		alert('Emitir Cancelacion');
	})

	$('.detalles_messelected').on('click',function(e){ $this = $(this);
		$hidden_details = $this.next();
		$hidden_details.toggle(0);
		/*$('.detalles').fadeOut(0,function(){
			alert(0);
		})*/
	});

	
	$('.content_meses_cash li.mes').on('click',function(e){ $this = $(this)
		$.ajax({
			type 	: 'POST',
			data 	: 'mes='+parseInt(escape($this.attr('data-mes')))+'&proyeccionid='+parseInt(escape($this.attr('data-proyecc'))),
			url 	: '../../detalle_mes_clicked',
			success : function(data){
				$('#body').prepend(data);
			},
			error 	: function(){

			}
		})
	})


	/****** Proyecciones Trimestrales ******/

	$('.cancelarproyecciontrimestral').on('click',function(e){
		$('.OpcionesTrimestrales').fadeOut("slow",function(){
			
		});
	});

	$('.openPanelnuevaproyecciontrimestral').on('click',function(e){
		$('.OpcionesTrimestrales').fadeIn("slow",function(){
			
		});
	});

	$('button.activatetrimestre').on('click',function(){ $this = $(this); 
		$trimestrebloqid = $this.attr('data-id');
		$controltextostatus = $($this.prev().children('span.statustrimestre').get(0));

		$proy_id = $('div.head').attr('data-id');

		$.ajax({
			type	: 'POST',
			data 	: 'trimestreid='+$trimestrebloqid+'proyid='+$proy_id,
			url 	: 'http://10.10.1.8:8087/aperturartrimestre',
			success : function(data){
				try{
					$data = $.parseJSON(data);
					if($data[0] == '00'){
						alert($data[0]);
					}else if($data[0] == 'OK'){
						$controltextostatus.text('activado').css('color','green');
					}
				}catch(e){

				}
			},
			error 	: function(){

			}
		})
	});



});