import React, { Component, useState, useEffect } from 'react';

function Reloj({hora}) {
    return(
      
        <h3>{hora}</h3>
       
    )
    
}

export default function RelojHooks(params) {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {

       let temporizador
       
       if(visible){
           temporizador = setInterval(() => {
               setHora(new Date().toLocaleTimeString())                     
           }, 1000);
       }else{
            clearInterval(temporizador)
       }

       return()=>{
           console.log("fase de desmontaje")
           clearInterval(temporizador)
       }

       //si no incluyo array se ejecutara eternamente
       //array vacio se ejecuta una vez
       //parametro, se ejecuta cada vez que el parametro cambia
    },[visible])

    return(
        <>
            <h2>Reloj con hooks</h2>
            {visible && <Reloj hora ={hora}/>}
            <button onClick={()=>setVisible(true)}>Iniciar</button>
            <button onClick={()=>setVisible(false)}>Detener</button>
        </>
    )
}
