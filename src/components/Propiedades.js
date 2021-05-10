import React from 'react'
import PropTypes from 'prop-types'

const Propiedades = (props) => {
    return (
        <div>
            <h1>Propiedades</h1>
            <h1>{props.porDefecto}</h1>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "verdadero" : "falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre +' '+ props.objeto.apellido}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.componente}</li>
            </ul>
            
        </div>
    )
}

export default Propiedades

Propiedades.defaultProps = {
    porDefecto:"Las props"
}

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,

}
