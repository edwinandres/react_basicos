import logo from './logo.svg';
import './App.css';
import Componente from '../src/components/Componente'
import Propiedades from '../src/components/Propiedades'
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos';
import  {EventosES6, EventosES7} from './components/Eventos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
        <section>
          <Componente msg="Hola, soy un componente con props"/>
          <Propiedades
            cadena="soy una cadena"
            numero = {6}
            booleano = {true}
            arreglo={[1,2,3]}
            objeto = {{nombre:'Edwin', apellido:'Roman'}}
            funcion = {(num)=> num *num}
            elementoReact={<i>Esto es un elemento react</i>}
            componente={<Componente msg="holiss"/>}


          />
          <hr></hr>
          <Estado/>
          <hr></hr>
          <RenderizadoCondicional/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr></hr>
          <EventosES7/>

        </section>
      </header>
    </div>
  );
}

export default App;
