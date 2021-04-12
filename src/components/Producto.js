import React , { Fragment ,useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext';
//se importa el useHIstory para poder realizar una redireccion programada
import { useHistory } from 'react-router-dom';

//se desestructura producto de props (basicamente se recibe como parametro desde el componente padre)
function Producto({producto}) {
    //se desestructuran los atributos del producto para poder asignarlos al name y value de los inputs correspondientes
    const { nombre, precio, id } = producto;
    //se obtiene la funcion para eliminar el producto y guardar el producto a editar
    const { deleteProducts, setProducto } = useContext(ProductosContext);
    
    //se asigna a history  la funcion useHIstory
    const history = useHistory(); 
   
        //funcion flecha para eliminar el producto llamando a la funcion del contexto
        const confirmarEliminarProducto = id => {

                  deleteProducts(id);
                   // console.log(id)
      
        }

        //funcion para hacer guardar el producto a editar y hacer una redireccion programada a la vista de edicion
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
