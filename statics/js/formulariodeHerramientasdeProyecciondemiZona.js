
$(function(){
	$('.close').on('click',function(){
		$('.detalle_mes_container').remove();
	});

	$('#buscar').on('keyup',function(e){ $this = $(this); 
		$('.listadodefamiliasyproductos').fadeIn(0);
		$('.productodefamilia').fadeIn(0);

		if($this.val() == ''){ return 0; }

		console.log('buscar un producto de la lista');

		$text = $this.val();

		$('.listadodefamiliasyproductos').fadeOut(0);

		/****** buscar una familia. *******/
		$('.listadodefamiliasyproductos ol.familianameblock').each(function(i,e){
			if($(e).text().toLowerCase().indexOf($text.toLowerCase()) != -1){
				$(e).parent().fadeIn(0);	
			}
			
		});

		/****** buscar un producto *******/
		$('.listadodefamiliasyproductos li.productodefamilia div span.prodname').each(function(i,e){
			if($(e).text().toLowerCase().indexOf($text.toLowerCase()) != -1){
				// $(e).parent().fadeIn(0);
				console.log($(e).text());
				$contenedor = $(e).parent().parent().parent();
				$contenedor.children('li.productodefamilia').fadeIn(0);
				$contenedor.children('li.productodefamilia').fadeOut(0);

				$contenedor.fadeIn(0);
				$(e).parent().parent().fadeIn(0);

			}
			
		});

	})
})