import React from "react";

//funcion que renderiza el componente
export default function HolaMundo(){ //llamamos a la funcion igual que el componente, pero no hay problema si se cambia no olvidar que van empiezan en mayusculas

    //Aqui podemos usar js
    const mifuncion= () =>{
        console.log("Mi funcion");
    };
    return(
        <div>                       
            <h1>Hola mundo</h1>
            <h2>Erik</h2>
        </div>
    );//el return solo puede devolver una cosa, en este caso un div, no puede retornar mas 
    //Si no queremos usar <div> podemos usar solo <></> llamado fragment
}

//export default HolaMundo; es una opcion pero podemos poner export default en el nombre de la funcion
//Ahora hacemos otra funcion, pero solo podemos usar un default
export function AdiosMundo(){ //solo colocamos export
    return(
        <div>
            <h3>Adios mundo cruel</h3>
        </div>
    );
}