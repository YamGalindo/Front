//consultamos si es que existe data del usuario en localstorage
if (!localStorage.user) {
  location.replace('login.html')
}
/* -------------------------------------------------------------------------- */
/*             realizamos la lógica una vez que carga el documento            */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function () {

  /* ---------- mostramos el nombre del usuario en la barra superior ---------- */
  const userName = document.querySelector('.user-info p');
  const deposito = JSON.parse(localStorage.user)
  userName.innerText = deposito.name;

  /* ---------------- creamos la funcionalidad de cerrar sesion --------------- */
  const btnCerrarSesion = document.querySelector('#closeApp');
  btnCerrarSesion.addEventListener('click', function () {
    let confirmacion = confirm("¿Desea cerrar sesion?")
    if (confirmacion) {
      //limpiamos el localstorage y redireccioamos a login
      localStorage.clear();
      location.replace('/login.html');
    }
  })

  /* ------------- trabajamos la renderizacion de nuestrars tareas ------------ */
  const urlTareas = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
  const usuario = JSON.parse(localStorage.user);
  const token = usuario.jwt;


  consultarTareas()


  /* -------------------- escuchar el boton de crear tarea -------------------- */
  const formCrearTarea = document.querySelector('.nueva-tarea');
  const nuevaTarea = document.querySelector('#nuevaTarea');

  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("crear terea");
    console.log(nuevaTarea.value);

    const payload = {
      description: nuevaTarea.value.trim()
    };
    const settings = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    }
    console.log("Creando un tarea en la base de datos");
    fetch(urlTareas, settings)
      .then(response => response.json())
      .then(tarea => {
        console.log(tarea)
        consultarTareas()
      })
      .catch(error => console.log(error));


    //limpiamos el form
    formCrearTarea.reset();
  })


  /* -------------------------------------------------------------------------- */
  /*                                  funciones                                 */
  /* -------------------------------------------------------------------------- */
  function consultarTareas() {
    const settings = {
      method: 'GET',
      headers: {
        authorization: token
      }
    };
    console.log("Consultando mis tareas");
    fetch(urlTareas, settings)
      .then(response => response.json())
      .then(tareas => {
        console.log(tareas)
        //falso esqueleto que simula lo que va a ocupar el contenido
        const skeleton = document.querySelector('#skeleton');
        //lo borramos antes de cargar el contenido
        skeleton.remove();
        
        renderizarTareas(tareas);
      })
      .catch(error => console.log(error));
  }

  function renderizarTareas(listado) {

    const tareasPendientes = document.querySelector('.tareas-pendientes');
    tareasPendientes.innerHTML = "";
    const tareasTerminadas = document.querySelector('.tareas-terminadas');
    tareasTerminadas.innerHTML = "";

    listado.forEach(tarea => {
      if (tarea.completed === false) {
        //lo mandamos al listado de tareas incompletas
        tareasPendientes.innerHTML += `
        <li class="tarea">
          <div class="not-done"></div>
          <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <p class="timestamp">Creada: ${tarea.createdAt}</p>
          </div>
        </li>
        `
      } else if (tarea.completed) {
        //lo mandamos al listado de tareas terminadas
        tareasTerminadas.innerHTML += `
        <li class="tarea">
          <div class="not-done">✔</div>
          <div class="descripcion">
          <p class="nombre">${tarea.description}</p>
          <p class="timestamp">Creada: ${tarea.createdAt}</p>
          </div>
        </li>
        `
      }
    })
  }




});
//template de tarea
/* <li class="tarea">
      <div class="not-done"></div>
      <div class="descripcion">
        <p class="nombre">Mi hermosa tarea</p>
        <p class="timestamp">Creada: 19/04/20</p>
      </div>
    </li> */