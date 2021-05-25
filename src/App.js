import logo from './logo.svg';
import './App.css';
import Componente from '../src/components/Componente'
import Propiedades from '../src/components/Propiedades'
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos';
import  {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonales from './components/HooksPersonales';

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
          <HooksPersonales />
          <hr></hr>
          <AjaxHooks />
          <hr></hr>
          <RelojHooks />
          <hr></hr>

          <ScrollHooks titulo="seguidores"/>
          <hr></hr>

          <ContadorHooks titulo="seguidores"/>
          <hr></hr>
          <hr></hr>
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
          <hr></hr>
          <MasSobreEventos/>
          <hr></hr>
          <ComunicacionComponentes/>
          <hr></hr>
          <CicloVida/>
          <hr></hr>
          <AjaxApis/>


        </section>
      </header>
    </div>
  );
}

export default App;
