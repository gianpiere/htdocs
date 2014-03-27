$(function(){

	// function Open Form Login
	$.fn.OpenFormLogin = function(){ $this = $(this);
		$this.prepend('<div id="fancy_wrap"></div>');
		$this.css({overflow:'hidden'});

	}

	function LoginStart(){
		$('html').OpenFormLogin();
	}

	$('#ingresar').on('click',LoginStart);

});