/* This code snippet is importing the `initApp` function from the `app.js` file and then adding an
event listener to the `DOMContentLoaded` event. When the DOM content has finished loading, the
`initApp` function is called. This pattern is commonly used in JavaScript applications to ensure
that certain initialization tasks are performed only after the DOM has fully loaded. */

/*Este fragmento de código importa la función `initApp` del archivo `app.js` 
y luego agrega un detector de eventos al evento `DOMContentLoaded`. 
Cuando el contenido del DOM termina de cargarse, se llama a la función `initApp`. 
Este patrón se usa comúnmente en aplicaciones JavaScript para garantizar que 
ciertas tareas de inicialización se realicen solo después de que el DOM se haya cargado por completo.*/

import { initApp } from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});


