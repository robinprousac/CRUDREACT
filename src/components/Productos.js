import React , { Fragment ,useContext} from 'react'
import Producto from './Producto'
import { ProductosContext } from '../context/ProductosContext';


function Productos() {

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
            { productos.length === 0 ?'No hay productos':(
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
