const lista = document.getElementById("listado")
const form = document.getElementById("mi-formulario")
let tareas = [];

const renderizarLista = function() {
    for (let index = 0; index < tareas.length; index++) {
    
        // Crear elementos con javascript de manera dinamica
        const item = document.createElement("li")
        item.classList.add('list-group-item');
        
        
        // Acceder al valor de la lista 
        // mediante su indice
        const p1 = document.createElement("p")
        p1.innerText = tareas[index].titulo

        const p2 = document.createElement("p")
        p2.innerText = tareas[index].descripcion

        const button = document.createElement("button");
        button.classList.add("btn","btn-light")
        button.innerText = "Seleccionar"
        button.addEventListener('click', seleccionarTarea)

        item.append(p1)
        item.append(p2)
        item.append(button)
    
        // Agregar elementos a un elemento contenedor
        lista.append(item)
    }
}

const accionFormulario = function(event) {
    event.preventDefault()

    // Agregar un elemento al final 
    // de la lista o array
    let tarea = {
        titulo: event.target.titulo.value,
        descripcion: event.target.descripcion.value,
    }

    tareas.push(tarea)

    // renderizar la lista
    renderizarLista()

}

const seleccionarTarea = function(event) {
    console.log(event)
}

form.addEventListener("submit", accionFormulario)