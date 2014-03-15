/* vinculacionproyecciongeneraltoproyeccionzone.js */
var GL_ProyeccionGeneralId 	= undefined;
var GL_ProyeccionDeZonaId 	= undefined;
$(function(){
	/*$('#vincularInProyeccionGeneral').on('click',function(){ $this = $(this);
		alert(1);
	});
	*/
	$('.ProyeccionesGeneralesPublicas li').on('click',function(){ $this = $(this);
		$ZnaProyection = $($this.parent()).attr('data-proyecciondezona');
		GL_ProyeccionDeZonaId = $ZnaProyection;
		$ElementId = $this.attr('data-proygenid');
		GL_ProyeccionGeneralId = $ElementId;

		$.msgConfirm({});

		$.ajax({
			type 	: 'POST',
			data 	: 'ProyeccionGeneralId='+GL_ProyeccionGeneralId+'&ProyecciondeZonaId='+GL_ProyeccionDeZonaId,
			url 	: 'GenerarAsociarProyeccionesdGentoZone',
			success	: function(data){

			},
			error	: function(){

			}
		});

		alert('general:'+GL_ProyeccionGeneralId+' zona:'+GL_ProyeccionDeZonaId);
	});

	/**** cerrar fancy ****/
	$('.icn.close').on('click',function(){
		$('.containt_child_meses #content_form_vincularProyecciones').remove();
	});
});



$.msgConfirm = function(options,callback){
	defaults = {
		Elementhtml : '',
		btns 		: {cancel:{title:'',callback:undefined},ok:{title:'',callback:undefined}},
		callbackRun	: undefined,
		Title 		: ''
	}; $.extend(defaults,(options || {}));

	
	$html_element = ''; // ID :: elformproyectasos

	$html_element += '<div id="elformproyectasos">';
		
	$html_element += '</div>';

	$('#content_form_vincularProyecciones').append($html_element);
	try{ typeof callback === 'function' ? callback() : false; }catch(e){}
}