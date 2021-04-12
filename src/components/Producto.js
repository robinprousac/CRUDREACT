import React , { Fragment ,useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext';
import { useHistory } from 'react-router-dom';


function Producto({producto}) {
    const { nombre, precio, id } = producto;
    const { deleteProducts, setProducto } = useContext(ProductosContext);
    
    const history = useHistory(); 
        // Confirmar si desea eliminarlo
        const confirmarEliminarProducto = id => {


                  //  dispatch( borrarProductoAction(id) );
                  deleteProducts(id);
                    console.log(id)
      
        }


        const redireccionarEdicion = producto => {
            setProducto(producto) ;
         history.push(`/productos/editar/${producto.id}`)
        }
    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
                <button 
                    type="button"               
                    className="btn btn-primary mr-2"
                    onClick={ () => redireccionarEdicion(producto) }
                    >
                    Editar
                    
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}                  
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto
