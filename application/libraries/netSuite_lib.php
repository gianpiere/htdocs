<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class netSuite_lib{
	function Netsuite_lib(){
	    require_once(str_replace("\\","/",APPPATH).'libraries/NetSuiteToolkit/lib/NetSuiteService'.EXT); //Por si estamos ejecutando este script en un servidor Windows
	}
}
?>