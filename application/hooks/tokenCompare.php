<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class tokenaccess extends MY_Controller{
    function isTokenExact(){
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->helper('form');
        
        // exit();
    }

}