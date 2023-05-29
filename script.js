//EMPRESA ALQUILER DE COCHES
let body = document.querySelector("body");

const RENT_PER_DAY = 25;
const RENT_PER_WEEK = 150;
let edadUsuario = parseInt(prompt('Por favor!!! ingresa tu edad'));

if(edadUsuario < 18){
    body.innerHTML = `<h2 id="alerta">Hola en estos momento no puedes alquilar un vehiculo debido a que aun tienes ${edadUsuario} años, vuelve cuando seas mayor GRACIAS!!!</h2>`
    //ponemos estilos
    document.getElementById("alerta").style.color="white"
    document.getElementById("alerta").style.padding="20px"
    document.getElementById("alerta").style.textAlign="center"
    document.getElementById("alerta").style.backgroundColor="black"
}else{
    //preguntar como colocar o refernciar a solo si o no y no colocar otras palabras
    let pregunta = prompt("¿Tienes carnet de conducir")
    if(pregunta !== "si"){
        body.innerHTML = `<h3 id="advertencia">En estos momentos no puedes alquilar un vehiculo porque aun no tienes un carnet de conducir</h3>`
        //estilos
        document.getElementById("advertencia").style.color="white"
        document.getElementById("advertencia").style.padding="20px"
        document.getElementById("advertencia").style.textAlign="center"
        document.getElementById("advertencia").style.backgroundColor="black"
    }else{
        let nombre = prompt("Enter your Name");
        let apellido = prompt("Enter your Lastname");
        let ciudad = prompt("En que ciudad te encuntras");
        let dias = parseInt(prompt("¿Cuantos dias nesecitas alquilar el vehiculo? /n El coste por dia de alquiler es de 25 euros "))
        
        //muy buena solicion
        let weeks = 0
        while(dias >= 7){
            dias = dias - 7;
            weeks++;
        }

        let total = (weeks * RENT_PER_WEEK)+(dias * RENT_PER_DAY)

        
        body.innerHTML = 
                `<div id="datos">
                    <p> <strong>Name:</strong> ${nombre}</p>
                    <p> <strong>Lastname:</strong> ${apellido}</p>
                    <p> <strong>City:</strong> ${ciudad}</p>
                    <p> <strong>Coste Total:</strong> ${total} Euros</p>
                </div>`
            let datos = document.getElementById("datos");
            datos.style.border ="5px solid black"
            datos.style.backgroundColor ="orange"
            datos.style.color ="white"
            datos.style.padding ="20px";
            datos.style.margin ="auto"
            datos.style.textAlign ="center"
            datos.style.width ="50%"
            datos.style.fontSize ="2rem"

        
    }

}
//preguntar como seria si en caso de que no se ingrese ningun dato qeu obligue a colocar algun dato, y que si no muestre un alert que ingrese algun dato

//solucion de chat gpt

// function calcularPrecio(dias) {
        //     const precioDia = 25;
        //     const precioSemana = 150;
          
        //     const semanas = Math.floor(dias / 7);
        //     const diasRestantes = dias % 7;
          
        //     const precioTotal = (semanas * precioSemana) + (diasRestantes * precioDia);
          
        //     return precioTotal;
        //   }
          
        //   // Ejemplo de uso:
        //   const diasAlquilados = 17
        //   ;
        //   const precio = calcularPrecio(diasAlquilados);
          
        //   console.log(`El precio por ${diasAlquilados} días es de ${precio} euros`);