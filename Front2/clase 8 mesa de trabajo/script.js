let contenedor = document.querySelector('.contenedor');

function agregarTarjetas() {


  for (let noticia of noticias) {
    contenedor.innerHTML +=
      `<div class="${noticia.tipoNacional ? "nacional" : "internacional"}" >
        <img src= " ${noticia.imgUrl} " >
        <h2> ${noticia.titulo} </h2>
        <p>
          ${noticia.descripcion}
        </p> 
        <span class="fechaNoticia"> ${noticia.fecha} </span>
    </div>
  `
  }


}

agregarTarjetas();

