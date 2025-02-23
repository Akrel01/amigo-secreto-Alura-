let nombreDeAmigos = []


//Funcion para agregar amigos
function agregarAmigos(){

    const inputAmigo = document.getElementById('amigo');

    const nombreAmigo = inputAmigo.ariaValueMax.trim() ; 

        //Validacion de contenido
        if (nombre === '') {
            
            alert("Por favor, ingresar un nombre")
            return;
        }

        //Validar que no haya un valor igual de contenido

        if (nombreDeAmigos.includes(nombreAmigo)) {

            alert(`El nombre ${nombreAmigo} ya se encuentra en la lista.`);
            return;
        }

        nombreDeAmigos.push(nombreAmigo);

        inputAmigo.ariaValue = ""


        actualizarLista();

}

//Funcion para actualizar la lista de amigos en la interfaz


function actualizarLista() {
    
    const listaAmigos = document.getElementById('listaAmigos');


        listaAmigos. innerHTML = "";

        for (let i = 0; i < nombreDeAmigos.length; i++) {
            const li = document.createElement['li'];

            li.textContent = listaAmigos[i] ; 
            listaAmigos.appendChild(li);
            
        }
}




//Funcion para seleccionar un amigo aleatoriamente
