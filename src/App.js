//IMPORTAR COMPONENTES
import Header from "./components/header";
import Productos from "./components/Productos";
import EditarProducto from './components/EditarProducto';
import NuevoProducto from "./components/NuevoProducto";
//IMPORTAR REACT ROUTER DOM (MANEJO DE RUTAS Y RENDERIZADO DE COMPONENTES)
//REFERENCIA https://reactrouter.com/web/guides/quick-start
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//IMPORTAR PRODUCTOSPROVIDER PARA PODER OBTENER LOS METODOS Y VARIABLES DE PRODUCTOSCONTEXT EN LOS COMPONENTES
import ProductosProvider from "./context/ProductosContext";

/*
Router encierra a todos los componentes para el manejo de rutas
ProductosProvider tambien encierra todos los componentes para poder acceder al contexto
Switch encierra a los componentes que van a cambiar dependiendo de su ruta de acceso
*/
function App() {
  return (
    <Router>
      <ProductosProvider>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </ProductosProvider>
    </Router>
  );
}

export default App;
