import { useState } from "react";

/* TAREA
MEDIANTE FORM, PERMITIR CAMBIAR UNA LETRA DEFAULT
DADA UNA LETRA DESIGNADA MOSTRAR LA NUEVA LETRA INGRESADA POR EL USER */

export default function Counter(){
    // recibe un arreglo, en la primera posicion, el estado actual y en la segunda los cambios
    /* al ser tipado debil, el tipo de dato debe siempre ser el mismo, de lo contrario en vez de sumar/restar 
    lo que hace es concatenar ej: usestate('0') concatena*/
    const [contador, setContador] = useState(0);
    function suma(){
        setContador(contador+1)
    }

    {/* sin funcion flecha
    function resta(){
        setContador(contador-1)
    } 
    */}

    const resta = () =>{
        setContador(contador-1)
    }

    const reset = () =>{
        setContador(0)
    }

    return (
        // devuelve estructura jsx
        <>
            {/* {contador} devuelve el estado inicial (0)*/}
            <h4>Contador: {contador}</h4>
            <button onclick={suma}> Sumar 1</button>
            <button onclick={resta}> Restar 1</button>
            <button onclick={reset}> Resetear </button>
        </>
    )
}
