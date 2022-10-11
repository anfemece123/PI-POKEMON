import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './componentes/LandingPage/LandingPage';
import Home from './componentes/Home/Home';
import PokemonCreate from './componentes/PokemonCreate/PokemonCreate';
import Detalle from './componentes/Detalle/Detalle';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>

      <Route exact path="/" component={LandingPage} />
      <Route path= '/home' component={Home}/>
      <Route path='/create' component={PokemonCreate}/>
      <Route exact path="/detail/:id" component={Detalle}/>
 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
