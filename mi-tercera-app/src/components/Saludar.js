import React from "react";
export default function Saludar(props){
    /* const saludar = () => {
        alert("Hola Erik");
    };
 */
    const {userInfo, saludarFn} = props; /* lo que queremos sacar de props esta en {} */
    console.log(props);

    console.log(userInfo); /* aqui usamos lo antes usado con const{}, asi podemos ver que ya no es necesario usar la sintaxis promps.userInfo.* */

    const {nombre ="Anonimo", edad, color} =userInfo; /* esta la usamos para poder eliminar el userInfo.nombre */
    /* el "Anonimo" se coloca para el valor por default en caso de que no se encuentre valor */
    return(
        <div>
            {/* <h2>Hola {props.name}, tiene {props.edad} años</h2> */}
            {/* <p>Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años, su color favorito es el {props.userInfo.color}.</p> */} {/* usamos {props.userInfo."cualquier cosa que este"} para poder usarlo */}
           {/*  <button onClick={saludar}>Saludar</button> */} {/* una forma de mandar a llamar la funcion saludar */}
           {/* <button onClick={props.saludarFn}>Saludar</button> */} {/* en esta parte la funcion saludarFn no tenia ningun argumento name, por lo que no es necesario usar () */}
           {/* <button onClick={props.saludarFn(props.userInfo.nombre)}>Saludar</button> */} {/* con esta hara el console log cuando se inicia la app */}
           {/* <button onClick={() => props.saludarFn(props.userInfo.nombre)}>Saludar</button> */} {/* aqui se usa el () => para que muestre el console log cuando se haga en onClick */}
           {/* <button onClick={() => saludarFn(userInfo.nombre)}>Saludar</button> */} {/* Aqui usando lo de quitar el promp podemos ver como es que se usa */}
           <button onClick={() => saludarFn(nombre,edad)}>Saludar</button> {/* aqui podemos ver el mismo ejemplo pero quitando el userInfo */}
        </div>
    );
}