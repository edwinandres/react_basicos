import React, { useState, useEffect } from 'react'


export default function ScrollHooks() {

    const [scrollY, setScrollY] = useState(0)
    const [name, setName] = useState("juan")

    useEffect(() => {
        console.log("Moviendo el scroll")
        const detectarScroll = () => setScrollY(window.pageYOffset)
        window.addEventListener("scroll", detectarScroll)

        return()=>{
            //desuscripcion del evento
            window.removeEventListener("scroll",detectarScroll)
        }
        
    },[scrollY])

    useEffect(() => {
       console.log("fase de actualizacion")
    })

    useEffect(() => {
        console.log("fase de montaje")
    },[])

    useEffect(() => {
        
        return()=>{
            console.log("fase de DESmontaje")
            //aqui puedo desuscribirme de peticiones
        }
    },[])


   

    return(
        <>
            <h2>Scroll Hooks (useEffect)</h2>
            <p>Scroll en posicion y: {scrollY}px</p>
        </>
    )
}