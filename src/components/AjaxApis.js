import React, { Component } from 'react';

class Pokemon extends Component{
    
    render(){
        return(
            <>
                <figure>
                    <img src={this.props.avatar} alt={this.props.name}></img>
                    <figcaption>{this.props.name}</figcaption>
                </figure>
            </>
        )
    }
}

export default class AjaxApis extends Component{

    state={
        pokemons:[]
    }

    componentDidMount(){
        let url='https://pokeapi.co/api/v2/pokemon'
        fetch(url)
            .then(res => res.json())    
            .then(json =>{
                //console.log(json)
                json.results.forEach((el) => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(json => {
                            let pokemon = {
                                id:json.id,
                                name:json.name,
                                avatar:json.sprites.front_default,
                            }
                            let pokemons =[...this.state.pokemons, pokemon]
                            this.setState({pokemons})
                            //console.log(pokemons)
                        });                         
                });               
            });
           
    }

    render(){
        //console.log(this.state.pokemons)
        return(
            <>  
                <h2>Peticiones asincronas</h2>

                {this.state.pokemons.map( el =>
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar}>{el.name}</Pokemon>
                
                    
                )}
              
            </>
        )
    }
}