<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*
 * ------------------------------------------------------
 *  Load the framework GL_Functions.php
 * ------------------------------------------------------
 */
if (file_exists(APPPATH.'core/GL_Functions.php')): require(APPPATH.'core/GL_Functions.php'); else: require(APPPATH.'core/GL_Functions.php'); endif;


class MY_Controller extends CI_Controller {
	public function __construct(){
        parent::__construct();
    }

	public function index(){ $this->load->view('welcome_message'); }



	public function Theme($folder,$view){
		$data['css'] = isset($this->css) ? $this->css : false;
		$data['css_lib'] = isset($this->css_lib) ? $this->css_lib : false;
		$data['js'] = isset($this->js) ? $this->js : false;
		$data['libjs'] = isset($this->libjs) ? $this->libjs : false;

		$data['folder'] = $folder;
		$data['pathmask'] = BASE_PATH.str_replace('page_', 'static/', str_replace('/', '_',$folder));
		$data['header'] = 'template/theme/header.php';
		$data['view'] = $folder.$view;
		$data['footer'] = 'template/theme/footer.php';
		$this->load->view('template/theme/template.php',$data);
	}

	public function noTheme($view){
		$data['css'] = isset($this->css) ? $this->css : false;
		$data['css_lib'] = isset($this->css_lib) ? $this->css_lib : false;
		$data['js'] = isset($this->js) ? $this->js : false;
		$data['libjs'] = isset($this->libjs) ? $this->libjs : false;
		$data['url'] = isset($this->url) ? $this->url : false;

		$data['header'] = 'template/notheme/header.php';
		$data['view'] = $view;
		$data['footer'] = 'template/notheme/footer.php';
		$this->load->view('template/notheme/template.php',$data);
	}



	/**
	*@todo  	: Lista de Funciones que permiten validar y extender el Form Validation.
	*/

	public function ValidarDominioGrupoSilvestre($Email){
		$Domains = array('gruposilvestre.com.pe','neagrum');
		try {
			$Dominio = explode('@',$Email);
			if(!is_array($Dominio)):
			 	$this->form_validation->set_message('ValidarDominioGrupoSilvestre', 'El Campo %s no contiene un correo valido');
				return false;
			endif;
			if(!empty($Dominio[1]) && in_array($Dominio[1],$Domains)):
				return true;
			else:
			 	$this->form_validation->set_message('ValidarDominioGrupoSilvestre', 'El Campo %s no contiene un correo de la empresa');
				return false;
			endif;
		} catch (Exception $e) {
			 $this->form_validation->set_message('ValidarDominioGrupoSilvestre', 'El Campo %s no contiene un correo valido');
			return false;
		}
		
	}


	# INSERCION Y VALIDACION DE SESSIONES

	/**
	* @todo 	: Funcion que permite a un usuario logearse al sistema.
	* @param 	: $UserEmail,$UserPassword :: valores de la cuenta de usuario.
	* @return 	: 'boolean true or false, session correcta'.
	*/
	function set_session_result($UserEmail,$UserPassword){
		$this->load->model('m_loginuseraccess');
		$Resultado = $this->m_loginuseraccess->SQL_UserExist_return($UserEmail,$UserPassword);
		if(is_array($Resultado) && !empty($Resultado[0]) && !empty($Resultado[1]) && !empty($Resultado[3]) && !empty($Resultado[5]) && !empty($Resultado[6]) && !empty($Resultado[7]) && !empty($Resultado[8]) && !empty($Resultado[10]) ):

		###############################################################################################################################
		/** 
		* @see : Lista de los Parametros de session del usuario logeado.
		*/
		
		$this->session->set_userdata('us_id'			,$Resultado[0]); 							# Recupera el Usuario [  ID 	   ] de la Sesion existente.
		$this->session->set_userdata('us_name'			,$Resultado[1]); 							# Recupera el Usuario [  NOMBRE    ] de la Sesion existente.
		$this->session->set_userdata('us_apellidos'		,$Resultado[2]); 							# Recupera el Usuario [  APELLIDOS ] de la Sesion existente.
		$this->session->set_userdata('us_sexo'			,$Resultado[3]); 							# Recupera el Usuario [  SEXO      ] de la Sesion existente.
		$this->session->set_userdata('us_foto'			,$Resultado[4]); 							# Recupera la foto del usuario
		$this->session->set_userdata('us_email'			,$Resultado[5]); 							# Recupera el Usuario [  TOKEN     ] de la Sesion existente.
		$this->session->set_userdata('us_password'		,$Resultado[6]); 							# Recupera el Usuario [  PASSWORD  ] de la Sesion existente.
		$this->session->set_userdata('us_token'			,$Resultado[7]); 							# Recupera el Usuario [  TOKEN     ] de la Sesion existente.
		$this->session->set_userdata('us_empresa'		,array($Resultado[8],$Resultado[9])); 		# Recupera el Usuario [  TOKEN     ] de la Sesion existente.
		$this->session->set_userdata('us_cargo'			,array($Resultado[10],$Resultado[11]));		# Recupera el Usuario [  CARGO     ] de la Sesion existente.
		$this->session->set_userdata('us_zona'			,array($Resultado[12],$Resultado[13]));		# Recupera el Usuario [   ZONA     ] de la Sesion existente.

		# Modalidad de Permisos Linux [ 0000 to 7777 :: 0 => SIN PERMISOS, 1 => EJECUCION, 2 => ESCRITURA, 4 => LECTURA :: 3(2+1), 5(4+1), 6(4+2), 7(4+2+1) ].#.
		$this->session->set_userdata('us_permisos'		,array('7777','7777','7777','7777'));		# Recupera el Usuario [  PERMISOS  ] de la Sesion existente.
		###############################################################################################################################
		return true;
		else:
			return false;
		endif;

		return false;
	}

	/**
	* @todo 	: Funcion que permite saber si hay un usuario y si esta logeado.
	* @param 	: NULL -> no recibe parametros.
	* @return 	: 'boolean true or false, session existe'.
	*/
	function get_session_result($element = false){
		###############################################################################################################################
		/** 
		* @see : Lista de los Parametros de session del usuario logeado.
		*/
		$usuario_id 		= $this->session->userdata('us_id'); 			# Recupera el Usuario [  ID 	   ] de la Sesion existente.
		$usuario_name 		= $this->session->userdata('us_name'); 			# Recupera el Usuario [  NOMBRE    ] de la Sesion existente.
		$usuario_apellidos	= $this->session->userdata('us_apellidos'); 	# Recupera el Usuario [  APELLIDOS ] de la Sesion existente.
		$usuario_sexo		= $this->session->userdata('us_sexo'); 			# Recupera el Usuario [  SEXO      ] de la Sesion existente.
		$usuario_foto		= $this->session->userdata('us_foto'); 			# Recupera el Usuario [  FOTO      ] de la Sesion existente.
		$usuario_email		= $this->session->userdata('us_email'); 		# Recupera el Usuario [  TOKEN     ] de la Sesion existente.
		$usuario_password	= $this->session->userdata('us_password'); 		# Recupera el Usuario [  PASSWORD  ] de la Sesion existente.
		$usuario_token		= $this->session->userdata('us_token'); 		# Recupera el Usuario [  TOKEN     ] de la Sesion existente.
		$usuario_empresa	= $this->session->userdata('us_empresa'); 		# Recupera el Usuario [  EMPRESA   ] de la Sesion existente.
		$usuario_cargo		= $this->session->userdata('us_cargo'); 		# Recupera el Usuario [  CARGO     ] de la Sesion existente.
		$usuario_zona 		= $this->session->userdata('us_zona');			# Recupera el Usuario [    ZONA	   ] de la Sesion existente.
		$usuario_Permisos	= $this->session->userdata('us_permisos'); 		# Recupera el Usuario [  PERMISOS  ] de la Sesion existente.
		#$this->session->set_userdata($newdata);

		###############################################################################################################################

		if(!empty($usuario_id) && !empty($usuario_name) && !empty($usuario_apellidos) && !empty($usuario_token) && !empty($usuario_email) && !empty($usuario_password) && !empty($usuario_Permisos) && !empty($usuario_cargo)):
			switch ($element) {
				case 'us_id':
					return $usuario_id;
					break;
				
				case 'us_name':
					return $usuario_name;
					break;
				
				case 'us_apellidos':
					return $usuario_apellidos;
					break;
				
				case 'us_sexo':
					return $usuario_sexo;
					break;

				case 'us_token':
					return $usuario_token;
					break;
				
				case 'us_email':
					return $usuario_email;
					break;
				
				case 'us_password':
					return $usuario_password;
					break;
				
				case 'us_empresa':
					return $usuario_empresa;
					break;
				
				case 'us_permisos':
					return $usuario_Permisos;
					break;
				
				case 'us_cargo':
					return $usuario_cargo;
					break;
				
				case 'us_foto':
					return $usuario_foto;
					break;

				case 'us_zona':
					return $usuario_zona;
					break;

				default:
					return false;
					break;
			}
			return true;
		else:
			return false;
		endif;	
	}

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */