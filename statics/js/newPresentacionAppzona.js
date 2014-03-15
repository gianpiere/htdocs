$(function(){

	$('#cantidad').on('keyup',function(e){ $this = $(this);
		$cantidad = parseInt($this.val());
		$precioap = parseFloat($('.dat_o.aproxprice').text());

		$('.dat_o.aproxcosto').text(String($cantidad * $precioap));

	});


	$('#btn_aceptar').on('click',function(e){ $this = $(this);
		$dataid = $this.attr('data-id');
		$inpcan = parseInt($('#cantidad').val());

		$params = $('.zona_inf').data('params');
		if($params == undefined){return 0;};

		$.ajax({
			type	: 'POST',
			data 	: 'presentacionId='+$dataid+'&cantidad='+$inpcan+'&mes='+$params.mes+'&proyeccionxzonaid='+$params.proyeccionid,
			url 	: 'agregarmiproductopresentacionconcantidadN',
			success	: function(data){
				try{
					$data = $.parseJSON(data);
					if($data[0][0] == '00'){
						alert($data[0][1]);
					}
				}catch(e){
					alert('ERROR');
				}
			},
			error 	: function(){

			}
		})
	});


	$('.result_search.dat_o li.presentacion').on('click',function(){ $this = $(this);
		$presentacion = $this.text();
		$presentacion_id = $this.attr('dtp-id');

		$('#btn_aceptar').attr('data-id',$presentacion_id);
		$('.nombre_delproducto_detalle span.dat_o').text($presentacion);

		$('span.dat_o.aproxprice').text('0');
	});

	$('#btn_cancelar').on('click',function(){
		$('.zona_inf').html($('.zona_inf').data('history_one'));
	});
});



