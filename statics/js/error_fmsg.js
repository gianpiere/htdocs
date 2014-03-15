// error_fmsg.js

$(function(){
	$('#fancy_content_msg').on('click',function(){
		// Funcion cerrar fancy.
		$('#fancy_content_msg').stop().fadeOut(300).delay(300).stop().remove();
	});
})