import React, { Component } from 'react';
import data from '../helpers/data.json'

function ListItem(props){
    return(
        <li>
            <a href={props.web} target="_blank">{props.name}</a>
        </li>
    )
}

class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            seasons:['primavera', 'verano', 'otoño', 'invierno']
         }
    }
    
    render() { 
        return ( 
            <div>
                <h2>Renderizado de elementos</h2>
                <ol>
                    {this.state.seasons.map((season, index)=>(
                        <li key={index}>{season}</li>
                    ))}
                </ol>
                <h3>Frameworks Frontend Javascrip</h3>
                <ul>
                    {data.frameworks.map((el, index) => (
                        <ListItem
                            key={index}
                            name={el.name}
                            value={el.web}
                            web={el.web}
                        />
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default RenderizadoElementos;