/**
 * Funciones en JavaScript utilizadas por index.html
 * 
 */

/** Como son varios elementos con clase 'button_menu' primero obtengo la lista de todos los
 *  elementos de esa clase y luego le asignamos el listener con click a cada uno
 */

list = document.getElementsByClassName("button_menu");
console.log(list);

/** Aquí enuncio todos los Ids de los botones del menu 
const IDs = ["info", "formacion", "experiencia", "certificados", "contacto"];
*/

/**
 *  Esta función se encarga de asignarle a cada button de la clase button_menu una función
 *  por el evento click de acuerdo con su ID específico
 */

for(let i=0; i<list.length; i++){
  /* Asigno un Listener a cada button de la lista */
  list[i].addEventListener("click", function(){  
  /* Recupero loa IDs de la lista de buttons */
  let ids = list[i].attributes.ID.value;
  /* Recupero las url de la lista de buttons */
  let url = document.getElementById(ids).attributes.href.value; 
  /* Llamo a la función lo la url correpondiente */
  ventanaSecundaria(url); 
  }); 
}

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



