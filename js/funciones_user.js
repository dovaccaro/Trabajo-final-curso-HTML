/**
 * Funciones en JavaScript utilizadas por user.html
 * 
 */


/**
 *  Esta función se encarga de asignarle a cada variable el valor que haya cargado el usuario
 */

document.getElementById("button_usr").addEventListener("click", function(){  
  let nombre = document.getElementsByName("nombre")[0].value;
  let apellido = document.getElementsByName("apellido")[0].value;
  let email = document.getElementsByName("email")[0].value;  
  let empresa = document.getElementsByName("empresa")[0].value;


  /** Verifica que los campos obligatorios tengan contenido */
  if(nombre==""){
    window.alert("Debe ingresar el nombre");
    return
  }

  if(apellido==""){
    window.alert("Debe ingresar el apellido");
    return
  }

  if(email==""){
    window.alert("Debe ingresar el E-mail");
    return
  }


  /** Si no tenía registrado un nombre en el Local Storage o si era 'Anonimo' lo reemplazo */

  if (!localStorage.nameuser || localStorage.nameuser == "Anonimo" ) {
    localStorage.nameuser = nombre + " " + apellido;
  }

  enviarCorreo(email, nombre, apellido, empresa);

  }); 

 
	/**
	 * Método que envía un e-mail a través del cliente que tenga por defecto
	 */
	function enviarCorreo(email, nombre, apellido, empresa) {
		if(email != null) {
			var mLink = "mailto:" + (email)
			 + "?subject=" + ("Solicitud de contacto")
			 + "&body=" + "Sr. Roberto Fernandez, quisiera hacer contacto con Ud. mi nombre es "
       + nombre+" "+apellido+" y mi E-mail " + email + " de la empresa " + empresa + ". Atentamente";
			window.location.href = mLink;
		}
	}







