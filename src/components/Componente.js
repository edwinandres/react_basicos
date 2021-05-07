import React from 'react';

const Componente = (props) => {
    return <h1>{props.msg}</h1>
}

// function Componente (props){
//     return <h1>{props.msg}</h1> 
// }



// class Componente extends React.Component{

//     render(){
//         return (
//             <div>
//                 <h1>Hola , soy un componente</h1>
//                 <h2>{this.props.msg}</h2>
//             </div>
//         )
//     }

// }

export default Componente