import React from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import './index.css'
import { Provider } from 'react-redux'; //* contenedor de redux, para tener un estado global;
import { createStore } from 'redux'; //* 
// * Components
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import Tienda from './components/Tienda';
import Error404 from './components/Error404';
import Carrito from './components/Carrito';
import ReducerRedux from './components/ReducerRedux';

function App() {
  // * Ejemplo de base de datos
  //const [ProductosLista, setProductosLista] = useState();
  //const [carritoLista, setCarritoLista] = useState([]);


 
  //* Redux
  const store = createStore(ReducerRedux);
  //console.log(store.getState() );
  return (
    <Provider store={store}>
      <Contenedor>
        <Menu>
          <NavLink to="/" exact={true}>Inicio</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
          <NavLink to="/Tienda">Tienda</NavLink>
        </Menu>
        <main>
          <Switch>
            <Route path="/" component={Inicio} exact={true} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Tienda" component={Tienda} />
            <Route component={Error404} />
          </Switch>
        </main>
        <aside>
          <h3>
            <Carrito />
          </h3>
        </aside>

      </Contenedor>
    </Provider>
  );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;



export default App;


 /*
  const agregarProductosCarrito = (name, id) => {
      // * si en carro no hay elementos
      if (carritoLista.length === 0) {
        setCarritoLista([{ id: id, name: name, stok: 1 }])
      } else {
        const newCarro = [...carritoLista];
  
        //* Retorna un valor boolean 
        // esta verifica que el boton corresponde a la lista de producto 
        const Verificar = newCarro.filter((elementos) => {
          //console.log(elementos.id,"===",id);
          return elementos.id === id;
        }).length > 0;
  
        //* agregar producto..
        if (Verificar) {
          newCarro.forEach((productoCarro, index) => {
            if (productoCarro.id === id) {
              const cantidad = newCarro[index].stok;
              newCarro[index].stok = cantidad + 1;
              //console.log(newCarro);
            }
          });
        } else {
          //console.log("No es ta en carro");
          newCarro.push(
            { id: id, name: name, stok: 1 }
          );
        }
        setCarritoLista(newCarro);
      }
    }
  */