<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// ------------------------------------------------------------------------
/** 
* @return 	: default view
* @see		: URI Defaults.
*/
$route['default_controller'] = "Bienvenida/inicio";
$route['404_override'] = '';
// ------------------------------------------------------------------------

///////////////////////////////////////////////////////////////////////////
#| PACKAGE NAME GROUP , EXAMPLE : USER ACCESS ADMINISTRATOR.
// ........................................................................



/* ****************************************************************** *//**
* @see 		: 
* @link 	: Class function in File link 
* @param 	: uri segment params
* @return 	: view return name
* @package 	: FileName
* @author 	: Gianpiere Ramos Bernuy.
* @version 	: 1.0
***************************************************************************
* @date 	: 
* @todo 	: Function description and method use.
**************************************************************************/
# $route[''] = '';

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::GRB://


/* ****************************************************************** *//**
* @see 		: 
* @link 	: Bienvenida/inicio 
* @param 	: localhost - basepath
* @return 	: bienvenida/bv/bv.php
* @package 	: Home
* @author 	: Gianpiere Ramos Bernuy.
* @version 	: 1.0
***************************************************************************
* @date 	: 
* @todo 	: Pagina Principal de aterrisaje de un usuario.
**************************************************************************/
$route['Home'] 			= 'Bienvenida/inicio';
$route['Nosotros'] 		= 'Nosotros/inicio';
$route['Actividades'] 	= 'Actividades/inicio';
$route['Cursos'] 		= 'Cursos/inicio';
$route['Fotos'] 		= 'Fotos/inicio';
$route['Contactenos'] 	= 'Contactenos/inicio';
$route['Mas'] 			= 'Mas/inicio';

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::GRB://


/* ****************************************************************** *//**
* @see 		: 
* @link 	: Bienvenida/inicio 
* @param 	: localhost - basepath
* @return 	: bienvenida/bv/bv.php
* @package 	: Home
* @author 	: Gianpiere Ramos Bernuy.
* @version 	: 1.0
***************************************************************************
* @date 	: 
* @todo 	: Pagina Principal de aterrisaje de un usuario.
**************************************************************************/

$route['static'] = 'Maskara/anonymousurl';
$route['static/(:any)'] = 'Maskara/anonymousurl/$1';

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::GRB://