document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Obtenemos los elementos que necesitamos por su ID
    const botonAceptar = document.getElementById("btnAceptarUbicacion");
    const selectorDept = document.getElementById("departamentoSelect");
    const textoUbicacion = document.getElementById("location-display");
    // 2. Creamos un "oyente" que espera el clic en el botón "Aceptar"
    botonAceptar.addEventListener("click", function() {
            // 3. Cuando se hace clic, obtenemos el TEXTO del departamento seleccionado
      // (ej: "Áncash", "Arequipa")
    const departamentoSeleccionado = selectorDept.options[selectorDept.selectedIndex].text;
      // 4. Verificamos que el valor no sea el placeholder (el value="" que agregamos)
        if (selectorDept.value !== "") {
        
        // 5. Si es válido, actualizamos el texto en la barra de navegación
        textoUbicacion.innerHTML = departamentoSeleccionado; }
        
    })});
