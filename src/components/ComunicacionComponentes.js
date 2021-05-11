import React, { Component } from 'react';

export default class Padre extends Component{

    state={
        contador:0
    }

    incrementarContador =(e)=>{
        this.setState({
            contador:this.state.contador +1
        })
           
        
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <Hijo
                    mensaje="Hola, estoy comunicandome entre componentes"
                />
                <Hijo
                    mensaje="Hola, soy el hijo 2"
                    incrementarContador={this.incrementarContador}
                />
            </>
        )
    }
}

function Hijo(props){
    return(
        <>
            <h1>{props.mensaje}</h1>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )

}