$(function(){
		/*
		| selected focus meses.
		*/
		/*$('.mesname').on('click',function(){ $this = $(this);
			$this.hasClass('focusedmes') ? $this.removeClass('focusedmes') : $this.addClass('focusedmes');
		});*/


		$.latabla = function(anoget,callback){
			/*
			| listar los meses 
			*/

			var f = new Date();
			var anoactual = f.getFullYear();
			if(!parseInt(anoget)>2000){ return false; }
			var ano = (parseInt(anoget) || anoactual);
			var mimes = f.getMonth();
			var dia = f.getDate();
			var eshoy; // es hoy ? eshoy : null
			var mes;
			var meses = new Array ("ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC");
			var names = new Array("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
			// var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
			var diasMes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

			var consolidado = '';
			for(mes=0;mes<=11;mes++){
				var diaMaximo = diasMes[mes];
				
				// en caso de ser un febrero especial.
				if (mes == 1 && (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0))){
		   			diaMaximo = 29;
				}

				consolidado+= '<div name="'+names[mes]+'" class="month_mes"><button class="mesname">'+meses[mes]+'</button><ul class="days_dias '+(mes % 2 == 0 ? 'flw' : 'fls')+'">';
				
				for (i=1; i<=diaMaximo; i++){
	   				if(mimes == mes && i == dia){ eshoy = "eshoy"; }else{ eshoy = ""; }
	   				if(i<=9){ consolidado +='<li class="'+eshoy+'">0' + i + '</li>\n'; }else{ consolidado +='<li class="'+eshoy+'">' + i + '</li>\n'; }
				}

				consolidado+= '</ul></div>\n';

				$('.fechas_proyecciones_encurso').html(consolidado);
				


			};
				// reestableciendo eventos.
				$('.mesname').on('click',function(){ $this = $(this);
					
					$dias 		= $($this.next()).children('li');
					$diasfocus 	= $($this.next()).children('.focusday');

					if($this.hasClass('focusedmes') ){
						$this.removeClass('focusedmes');
						$($dias).removeClass('focusday');
					}else{
						$this.addClass('focusedmes');
						$($dias).addClass('focusday');
					}

					$('.days_dias li').removeClass('focusday');

					if($('.mesname.focusedmes').length == 2){
						var rango = {iniciar:false,ultimo:false};
						$('.mesname').each(function(i,e){
							$(e).hasClass('focusedmes') ? rango.iniciar = !rango.iniciar : false; // inicio el seleccionado desde este elemento.
							if(rango.iniciar){ rango.ultimo = true;// empiezo a seleccionar.
								// $(e).trigger('click');
								$dias 		= $($(e).next()).children('li');
								$diasfocus 	= $($(e).next()).children('.focusday');

								$(e).addClass('focusedmes');
								$($dias).addClass('focusday');

								console.log('enabled');
							}else if(rango.ultimo){ rango.ultimo = false;
								$dias 		= $($(e).next()).children('li');
								$diasfocus 	= $($(e).next()).children('.focusday');

								$(e).addClass('focusedmes');
								$($dias).addClass('focusday');

								console.log('enabled');
							}
						});
						console.log($('.mesname.focusedmes').length);
					}else if($('.mesname.focusedmes').length > 2){
						$this = $(this);
						$('.mesname').removeClass('focusedmes');
						$this.addClass('focusedmes');
						console.log($('.mesname.focusedmes').length);
					}


				});

				$('.allmesname').on('click',function(){ 
					if($('.focusedmes').length<12){
						$('.mesname').each(function(i,e){
							$(e).addClass('focusedmes');
						})

						$('.days_dias li').addClass('focusday');
					}else{
						$('.mesname').each(function(i,e){
							$(e).removeClass('focusedmes');
						})

						$('.days_dias li').removeClass('focusday');
					}
				});

				/* 
				| seleccion por dia de cada mes 
				*/
				$('.days_dias li').on('click',function(){ $this = $(this);
					// $this.hasClass('focusday') ? $this.removeClass('focusday') : $this.addClass('focusday');
				});

				// restableciendo eventos.



				/*
				| boton guardar proyeccion CLICK
				*/
				$('.save_proyection').on('click',function(){
					/*
					var meses = new Array(); 
					if($('.mesname.focusedmes').length >= 1){
					
						$('.mesname').each(function(i,e){
							$(e).hasClass('focusedmes') ? meses.push(i) :false;
						})
					
						console.log(meses); // coger los meses seleccionados.

					}
					*/

				});

				$('#guardar_mi_proyeccion').on('submit',function(e){
					e.preventDefault();
					if(!$('#guardar_mi_proyeccion').attr('send')){

						var meses = new Array(); 
						if($('.mesname.focusedmes').length >= 1){
						
							$('.mesname').each(function(i,e){
								$(e).hasClass('focusedmes') ? meses.push(i) :false;
							})
						
							// console.log(meses); // coger los meses seleccionados.

						}

						$('#guardar_mi_proyeccion').attr('send','ok');
						// var misdatos = $('#guardar_mi_proyeccion').serialize();
						// console.log(misdatos);
						$.ajax({
							type	: 'POST',
							data 	: '',
							url 	: 'guardar_mi_proyeccion',
							success : function(data){
								// console.log(data);
								console.clear();
							},
							error 	: function(){
								console.log('error');
							} 
						});
					}
				});
			
		}

		/*
		| calculando dias del año del mes seleccionado.
		*/

		$('.left.btn_cnt_year').on('click',function(e){
			if(!$('#yearbday').val() == '' && (parseInt($('#yearbday').val()) > 2000) ){
				var suma = parseInt($('#yearbday').val());
				suma -= 1;
				$('#yearbday').val(suma);

				// llamar a la tabla.
				$.latabla(suma,function(){
					// no  callback action.
				});

			}else{
				var fech = new Date();
				$('#yearbday').val(fech.getFullYear());

				// llamar a la tabla.
				$.latabla(fech.getFullYear(),function(){
					// no callback action.
				});
			}
		});

		$('.right.btn_cnt_year').on('click',function(e){
			
			/*
			| suma el año o lo regula.
			*/
			if(!$('#yearbday').val() == '' && (parseInt($('#yearbday').val()) > 2000) ){
				var suma = parseInt($('#yearbday').val());
				suma += 1;
				$('#yearbday').val(suma);

				// llamar a la tabla.
				$.latabla(suma,function(){
					// no  callback action.
				});

			}else{
				var fech = new Date();
				$('#yearbday').val(fech.getFullYear());

				// llamar a la tabla.
				$.latabla(fech.getFullYear(),function(){
					// no callback action.
				});
			}			
		});


	}); // end fn()

	/*
	|
	|	Funcion rbo para los sub menus de opciones.
	|
	*/

	$(function(){
		$('.menu_tipo_proyeccion li[cnt="sqm"]').on('click',function(){
			$this = $(this);
			$('.menu_tipo_proyeccion li[cnt="sqm"]').removeAttr('onselected');
			$this.attr('onselected','');
		});
	})


	/*
	|
	|	Otros
	|
	*/

	$(function() {
		//$( ".selectable" ).selectable();
		// $( "ul" ).selectable();
	});
