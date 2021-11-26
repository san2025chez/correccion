import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
    <div className="App">
      <NavBar/>
      <h1>esto es list conteiner  </h1>
      <ItemListContainer /> 
      <br/>
      <h1>esto es detail conteiner  </h1>
<ItemDetailContainer/>
    </div>
    </>
  );
}

export default App;
