import React ,{useState, useContext, useEffect} from 'react'
import { ProductosContext } from '../context/ProductosContext';


function EditarProducto({history}) {



    const [producto , guardarProducto] =  useState({
        nombre : '',
        precio : 0
    });

    const {nombre, precio} = producto;


    const {productoeditar, guardareditado} = useContext(ProductosContext);
  
    // llenar el state automaticamente
    //se utiliza un useEffect (HOOK) como en el contexto para cargar los productos
    //en este caso el use effect se ejecuta siempre que cambie el productoeditar y la primera vez que se 
    //renderiza el componente
    useEffect( () => {
        guardarProducto(productoeditar);
    }, [productoeditar]);

    //el resto de codigo es similar a NuevoProducto.js revisar este componente

    const actualizarState = e => {
        guardarProducto({
            ... producto,
            [e.target.name]: e.target.value
        })
    }

    const submitEditarProducto = e => {
        e.preventDefault();

        // validar formulario
        if(nombre.trim() === '' || precio <= 0) {

            alert("Hello! I am an alert box!!");

            return;
        }



        
        guardareditado(producto);
        console.log(producto)

 
        history.push('/');
    }

    return (
<div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Editar Producto
                        </h2>

                      

                        <form
                         onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={actualizarState}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Editar</button>
                        </form>

                      </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
