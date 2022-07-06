import React from "react";
export default function Saludar(props){
    console.log(props);
    return(
        <div>
            <h2>Hola {props.name}, tiene {props.edad} años</h2>
        </div>
    );//debemos poner entre llaves props.name, si no no sale 
    //en esta parte se imprime el mensaje "Hola , tiene años" depende de que valor tenga la variable nombre y edad es lo que se colocara
}