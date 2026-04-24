/*Utilizado para mostrar un ventana de alerta al cargar la pagina*/

// window.alert("'Hola esta es una tarjeta de presentacion de Jairo Cárdenas'");



/*Codigo utilizado para que el titilo se lea y vuelva al origian en el tiempo elegido*/

// function mySkills() {

//   document.getElementById("skill").innerHTML = "Web Designer";

//   const elemento = document.getElementById('skill');

//   const contenidoOriginal = elemento.innerHTML;

//   elemento.innerHTML = " - HTML - CCS - JavaScript - "

//   setTimeout(()=>{
//     elemento.innerHTML = contenidoOriginal;
// }, 2500);

// }


/*Codigo para cambiar el texto al hacer click en el boton*/

// function mySkills() {
//   document.getElementById("skill").innerHTML = " - HTML - CCS - JavaScript - ";

// }

/* */


let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('show');

  if (hideText.classList.contains('show')) {
    hideText_btn.innerHTML = 'Read Less';
  }
  else {
    hideText_btn.innerHTML = 'skills';
  }
}



function mi_Cv() {
  window.alert('Se procedera a descargar el CV actualizado" ');  
}


