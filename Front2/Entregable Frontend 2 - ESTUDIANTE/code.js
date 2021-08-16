let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let fecha =  new Date();
  let ano = fecha.getFullYear();

  nombre = prompt("Ingrese nombre :");
  let anoNacimiento = prompt("Ingrese año nacimiento :");
  edad = ano - anoNacimiento;
  ciudad = prompt("Ingrese ciudad : ");
  let interes = false;
  confirm("Le interesa Javascript") ? interesPorJs = "Si" : interesPorJs = "No";

}



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.querySelector('div.card-header #nombre').innerText += nombre;
  document.querySelector('div.card-header #edad').innerText += edad;
  document.querySelector('div.card-header #ciudad').innerText += ciudad;
  document.querySelector('div.card-header #javascript').innerText += interesPorJs;

}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  let contenedor = document.querySelector('#fila');

  for (materia of listado) {
    contenedor.innerHTML +=
      `<div class="caja">
        <img src= " ${materia.imgUrl} " >
        <h2> ${materia.lenguajes} </h2>
        <p>
          ${materia.bimestre}
        </p> 
    </div>
  `
  }

}

function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let contenedor = document.querySelector(".sobre-mi");

    contenedor.classList.toggle('sobre-mi-completo')
  
}
