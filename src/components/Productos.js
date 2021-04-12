//se importa Fragment para tener mas componentes en html y useContext para utilizar sus metodos y "variables"
import React , { Fragment ,useContext} from 'react'
import Producto from './Producto'
//se importa ProductosContext para poder trabajar con el contexto
import { ProductosContext } from '../context/ProductosContext';


function Productos() {
    //se desestructura de ProductosContext productos que trae todos los productos del API
    //referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { productos } = useContext(ProductosContext);


    return (
        <Fragment>
        <h2 className="text-center my-5">Listado de Productos</h2>

        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                 <tr>
                     <th scope="col">Nombre</th>
                     <th scope="col">Precio</th>
                     <th scope="col">Acciones</th>
                 </tr>
            </thead>
            <tbody>
            {   //Operador ternario condicional para ver si no hay productos muestra un msj
                //de lo contrario realiza el .map de los productos
                productos.length === 0 ?'No hay productos':(
                       productos.map(producto => (
                           <Producto
                                key={producto.id}
                                producto={producto}
                           />
                       ))
                   )}
            </tbody>
        </table>
    </Fragment>
    )
}

export default Productos
