$(function(){
	$('.controls i.close').on('click',function(){
		$('#fancydatosxproducto').fadeOut('slow',function(){$(this).remove();});
	});

	/*$('.productodtglp').on('click',function(){ $this = $(this);
		$('.productodtglp').removeAttr('style');
		$('.productodtglp .listamesess').fadeOut("fast",function(){
			$this.css('width','462px');
			$this.children('.listamesess')
				.fadeIn("slow")
			;
		});
	});*/

	$('.listamesess li .detalle button').on('click',function(){ $this = $(this);
		$productoid = $this.attr('data-id');
		$mes 		= $this.attr('data-mes'); 
		$.ajax({
			type	: 'POST',
			data 	: 'mes='+$mes+'&productoid='+$productoid,
			url 	: '../subdetallexmesdeundtproducto',
			success : function(data){
				$('.wraperproductslist').prepend(data);
			},
			error 	: function(){

			}
		});
	});

	/*$('.seach input').on('keyup',function(){

	});*/
	$('.seach input').bind('entersearch',function(e,$text){
		buscar($text);
	});

	$('input').on('keyup',function(e){ $this = $(this); $text = $this.val();
		if(e.which == 13){
			$('.seach input').trigger( "entersearch",$text);
		}
	});

	function buscar($texto){ $tabla = $('.contentproducts');
		$('.familiadelista').fadeOut(0);
		$('.productodtglp').fadeOut(0);
		$('.contentproducts').prepend('<span id="cargandoooo" style="padding:10px;display:inline-block;color:white;">buscando..</span>');

		$familias = $('.listaprd ol.familiadelista');
		$familias.fadeOut('fast');

		

		function activenext($this){
			$mithis = $this;
			// console.log([$mithis.target,$mithis.localName],$mithis);
			if($mithis.hasClass("productodtglp")){
				console.log($mithis); 
				$mithis.fadeIn('fast');
				activenext($mithis.next());
			}else{
				return 0;
			}
		}

		$productos = $('.listaprd li.productodtglp');
		$productos.fadeOut('fast');
		$productos.each(function(i,e){ $this = $(e);
			if($this.text().toLowerCase() == $texto){
				$familias.fadeOut(0);
				$productos.fadeOut('fast',function(){
					$this.fadeIn('fast');
					$($this.prev('ol')).fadeIn('fast');
				});
				return 0;
			}else if($this.text().toLowerCase().indexOf($texto) != -1){
					$this.fadeIn('fast');
					$($this.prev('ol')).fadeIn('fast');
			}

		})

		$familias.each(function(i,e){ $this = $(e);
			if($this.text().toLowerCase() == $texto.toLowerCase()){
				$this.fadeIn('fast');
				$newthis = $this.next();
				activenext($newthis);
				return 0;
			}
		});

		$('#cargandoooo').fadeOut('slow').delay(500).remove();
	}

})