let nombreDeAmigos = []



//Funcion para agregar amigos
function agregarAmigo(){

    const inputAmigo = document.getElementById('amigo');

        const nombreAmigo = inputAmigo.value.trim(); 

        //Validacion de contenido
        if (nombreAmigo === "") {
            
            alert("Por favor, ingresar un nombre")
            return;
        }

        //Validar que no haya un valor igual de contenido

        if (nombreDeAmigos.includes(nombreAmigo)) {

            alert(`El nombre ${nombreAmigo} ya se encuentra en la lista.`);
            return;
        }

        nombreDeAmigos.push(nombreAmigo);

        inputAmigo.value = "";


        actualizarLista();

}

//Funcion para actualizar la lista de amigos en la interfaz


function actualizarLista() {
    
    const listaAmigos = document.getElementById('listaAmigos');


        listaAmigos.innerHTML = "";

        for (let i = 0; i < nombreDeAmigos.length; i++) {
            const li = document.createElement('li');

            li.textContent = nombreDeAmigos[i]; 
            listaAmigos.appendChild(li);
            
        }
}


//Funcion para seleccionar un amigo aleatoriamente

    function sortearAmigo(){

        if(nombreDeAmigos.length === 0){
            alert("No hay amigos para sortear");
            return;
        }


        const indiceAleatorio = Math.floor(Math.random() * nombreDeAmigos.length);

        const amigoSorteado = nombreDeAmigos[indiceAleatorio];

        const result = document.getElementById('resultado')
        result.innerHTML = `Amigo sorteado : <strong>${amigoSorteado}</strong>`;
    }

   

       



