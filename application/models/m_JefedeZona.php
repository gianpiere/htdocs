<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/** 
**************************************************************************
* @todo     : Clase con funciones unicas para Jefes de Zona. 
* @author   : Gianpiere Ramo Bernuy. 
* @return   : view : 
* @see      : Grupo Silvestre
* @link     : http:// ...
* @copyright: Grupo Silvestre.
**************************************************************************
*/ # 
class m_JefedeZona extends MY_Model{
	
	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_ProyeccionExist_return
	* @todo 		: Funcion que permite listar las proyecciones de zonas.
	* @see 			: MY_Model
	* @param 		: $userid : ID del usuario logeado.
	*/
	function SQL_ZonaProyectionExist_return($userid){
		
	}

	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_ZonaProyectionAtipica_return
	* @todo 		: Funcion que permite listar las proyecciones Atipicas.
	* @see 			: MY_Model
	* @param 		: $userid : ID del usuario logeado.
	*/
	function SQL_ZonaProyectionAtipica_return($userid){
		
	}

	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_ZonaNotificaciones_return
	* @todo 		: Funcion que permite listar las Notificaciones.
	* @see 			: MY_Model
	* @param 		: $userid : ID del usuario logeado.
	*/
	function SQL_ZonaNotificaciones_return($userid){
		
	}

	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_ZonaListarProyeccionesdeunazona_return
	* @todo 		: Funcion que permite listar las Notificaciones.
	* @see 			: SP_Zna_ListarlasProyeccionesdeunazona
	* @param 		: $userid : ID del usuario logeado.
	*/
	function SQL_ZonaListarProyeccionesdeunazona_return($ZonaId){
		$sql = "CALL SP_Zna_ListarlasProyeccionesdeunazona(?)";
		$QueryRpt = $this->db->query($sql, array((int)$ZonaId));
		$Resultado = $QueryRpt->result_array();
		$this->db->close();
		$Results = $this->QueryResult($Resultado);
		return $Results;
	}

	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_CambiardtCantidaddeunProductoenmiProyeccion
	* @todo 		: Funcion que permite actualizar un detalle de cantidad de producto presentacion.
	* @see 			: SP_CambiardtCantidaddeunProductoenmiProyeccion
	* @param 		: $dtCantidadId, $NewCantidad
	*/
	function SQL_CambiardtCantidaddeunProductoenmiProyeccion($dtCantId,$NewCantidad){
		$sql = "CALL SP_CambiardtCantidaddeunProductoenmiProyeccion(?,?)";
		$QueryRpt = $this->db->query($sql, array((int) $dtCantId,(int) $NewCantidad));
		$Resultado = $QueryRpt->result_array();
		$this->db->close();
		$Results = $this->QueryResult($Resultado);
		return $Results;
	}

	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_ListarFamiliasyProductosensuTotalidadxEmpresa
	* @todo 		: Funcion que permite mostrar la lista de productos x familia de una empresa.
	* @see 			: SP_CambiardtCantidaddeunProductoenmiProyeccion
	* @param 		: $EmpresaId
	*/
	function SQL_ListarFamiliasyProductosensuTotalidadxEmpresa($EmpresaId){
		$sql = "CALL SP_ListarFamiliasyProductosensuTotalidadxEmpresa(?)";
		$QueryRpt = $this->db->query($sql, array((int) $EmpresaId));
		$Resultado = $QueryRpt->result_array();
		$this->db->close();
		$Results = $this->QueryResult($Resultado);
		return $Results;
	}
	
	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_DetalledePresentacionesxProducto
	* @todo 		: Funcion que permite Listar las presentaciones de un producto.
	* @see 			: SP_DetalledePresentacionesxProducto
	* @param 		: $ProductoId
	*/
	function SQL_DetalledePresentacionesxProducto($ProductoId,$ZonaId){
		$sql = "CALL SP_DetalledePresentacionesxProducto(?,?)";
		$QueryRpt = $this->db->query($sql, array((int) $ProductoId,(int) $ZonaId));
		$Resultado = $QueryRpt->result_array();
		$this->db->close();
		$Results = $this->QueryResult($Resultado);
		return $Results;
	}




}