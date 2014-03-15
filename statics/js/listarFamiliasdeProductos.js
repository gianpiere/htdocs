/*
|
|	Evento que se ejecuta cuando se selecciona una Familia de Producto.
|
*/
var json_data;
$(function(){
	$('div[familiaslist] div.familia').on('click',function(){ $this = $(this);
		// Familia de Producto on CLICK.
		$elementid = $this.attr('data-id');
		$dataFam = $(document).data('familia_'+$elementid);
		if($dataFam != undefined && jQuery.isArray($dataFam) && ( $dataFam[0] == $elementid)){ // removeData
				$('#content_productos').html($dataFam[1]);
		}else{
			$.ajax({
				type	: 'POST',
				data 	: 'familiaid='+$elementid,
				url		: 'listarProductosdeunaFamilia',
				success : function(data){
					$('#content_productos').html(data);
					$(document).data('familia_'+$elementid,[$elementid,data]);
				},
				error 	: function(){

				}	
			});
		}
	});
});