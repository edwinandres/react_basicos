import React, { Component } from 'react';

function Login(){
    return(
        <h1>Logueado</h1>
    )
}

function Logout(){
    return(
        <h1>Logout</h1>
    )
}

export default class RenderizadoCondicional extends Component{

    constructor(props){
        super(props)
        this.state ={
            session :true
        }
    }

    render(){
        return(
            <div>
                <h1>Renderizado Condicional</h1>
                {this.state.session ? <Login/> : <Logout/>}
            </div>
        )
    }
}