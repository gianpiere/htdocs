<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/** 
**************************************************************************
* @todo     : Clase que graba y lee los devocionales. 
* @author   : Gianpiere Ramo Bernuy. 
* @return   : view : 
* @see      : ABJ WEB
* @link     : http:// ...
* @copyright: Academia Biblica Juvenil.
**************************************************************************
*/ # 
class m_Devocional extends MY_Model{

	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_dv_LeerUltimoDevocional
	* @todo 		: Funcion que permite listar los devocionales diarios.
	* @see 			: SP_dvDevocionalMostrarUltimo
	* @param 		: no params
	*/
	function SQL_dv_LeerUltimoDevocional(){
		$sql = "CALL SP_dvDevocionalMostrarUltimo()";
		$QueryRpt = $this->db->query($sql);
		$Resultado = $QueryRpt->row_array();
		$this->db->close();
		$Results = $this->QueryRows($Resultado);
		return $Results;
	}

	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_CambiardtCantidaddeunProductoenmiProyeccion
	* @todo 		: Funcion que permite actualizar un detalle de cantidad de producto presentacion.
	* @see 			: SP_CambiardtCantidaddeunProductoenmiProyeccion
	* @param 		: $dtCantidadId, $NewCantidad
	*/
	//function SQL_CambiardtCantidaddeunProductoenmiProyeccion($dtCantId,$NewCantidad){
	//	$sql = "CALL SP_CambiardtCantidaddeunProductoenmiProyeccion(?,?)";
	//	$QueryRpt = $this->db->query($sql, array((int) $dtCantId,(int) $NewCantidad));
	//	$Resultado = $QueryRpt->result_array();
	//	$this->db->close();
	//	$Results = $this->QueryResult($Resultado);
	//	return $Results;
	//}

	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_ListarFamiliasyProductosensuTotalidadxEmpresa
	* @todo 		: Funcion que permite mostrar la lista de productos x familia de una empresa.
	* @see 			: SP_CambiardtCantidaddeunProductoenmiProyeccion
	* @param 		: $EmpresaId
	*/
	//function SQL_ListarFamiliasyProductosensuTotalidadxEmpresa($EmpresaId){
	//	$sql = "CALL SP_ListarFamiliasyProductosensuTotalidadxEmpresa(?)";
	//	$QueryRpt = $this->db->query($sql, array((int) $EmpresaId));
	//	$Resultado = $QueryRpt->result_array();
	//	$this->db->close();
	//	$Results = $this->QueryResult($Resultado);
	//	return $Results;
	//}
	
	/**
	* @package 		: m_JefedeZona
	* @subpackage 	: SQL_DetalledePresentacionesxProducto
	* @todo 		: Funcion que permite Listar las presentaciones de un producto.
	* @see 			: SP_DetalledePresentacionesxProducto
	* @param 		: $ProductoId
	*/
	//function SQL_DetalledePresentacionesxProducto($ProductoId,$ZonaId){
	//	$sql = "CALL SP_DetalledePresentacionesxProducto(?,?)";
	//	$QueryRpt = $this->db->query($sql, array((int) $ProductoId,(int) $ZonaId));
	//	$Resultado = $QueryRpt->result_array();
	//	$this->db->close();
	//	$Results = $this->QueryResult($Resultado);
	//	return $Results;
	//}




}