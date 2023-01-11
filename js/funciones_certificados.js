/**
 * Funciones en JavaScript utilizadas por la hoja certificados.html
 * 
 */

let mybutton ="";

for(let i=1; i<15; i++){
  mybutton = "button_c"+i;
  console.log(mybutton);
  document.getElementById(mybutton).addEventListener("click", function(){  

    URL = document.getElementById(mybutton).attributes.href.value; 
    ventanaCertificados (URL);
  });
}

function ventanaCertificados (URL){ 
  var Ancho = screen.width;
  var Alto = screen.height;
  /**var A = Ancho*50/100;
  var H = Alto*33/100;
  var difA = Ancho - A;
  var difH = Alto - H;
  var tope = difH/2;
  var lado = difA/2; */
  /*Opciones="status=no, menubar=NO, directories=NO, location=NO, toolbar=NO scrollbars=NO, resizable=NO, width="+A+", height="+H+", top="+tope+", left="+lado+""; */
  Opciones="width="+Ancho+", height="+Alto+""; 
  w = window.open(URL,"_blank",Opciones);

}