/**
 * Funciones en JavaScript utilizadas por contacto.html
 * 
 */


/**
 *  Esta función se encarga de asignarle a cada button de la clase button_menu una función
 *  por el evento click de acuerdo con su ID específico
 */

document.getElementById('usr_info').addEventListener("click", function(){  
  /* Recupero la url*/
  let url = document.getElementById('usr_info').attributes.href.value; 
  /* Llamo a la función lo la url correpondiente */
  ventanaDatos(url); 
  }); 


/**  Para abrir una ventana secundaria en base a la url recibida como parametro  y el
 *   el centro de la plantalla
*/

function ventanaDatos (URL){ 
  var Ancho = screen.width;
  var Alto = screen.height;
  var A = Ancho*50/100;
  var H = Alto*33/100;
  var difA = Ancho - A;
  var difH = Alto - H;
  var tope = difH/2;
  var lado = difA/2;
  /*Opciones="status=no, menubar=NO, directories=NO, location=NO, toolbar=NO scrollbars=NO, resizable=NO, width="+A+", height="+H+", top="+tope+", left="+lado+""; */
  Opciones="status=no, menubar=NO, directories=NO, location=NO, toolbar=NO, scrollbars=NO, resizable=NO, width="+A+", height="+H+", top="+tope+", left="+lado+""; 
  w = window.open(URL,"_blank",Opciones);

}


