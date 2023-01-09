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
  ventanaSecundaria(url); 
  }); 


/**  Para abrir una ventana secundaria en base a la url recibida como parametro  y el
 *   el centro de la plantalla
*/

function ventanaSecundaria (URL){ 
  console.log("llamo a la funcion");
  var Ancho = screen.width;
  var Alto = screen.height;
  var A = Ancho*50/100;
  var H = Alto*50/100;
  var difA = Ancho - A;
  var difH = Alto - H;
  var tope = difH/2;
  var lado = difA/2;
  var Opciones="status=no, menubar=no, directories=no, location=no, toolbar=no, scrollbars=yes, resizable=no, width="+A+", height="+H+", top="+tope+", left="+lado+"";
  w = window.open(URL,"_blank",Opciones);

}



