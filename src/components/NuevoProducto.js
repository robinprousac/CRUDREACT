import React ,{useState, useContext} from 'react'
import { ProductosContext } from '../context/ProductosContext';

//se recibe como parametro el history (otra manera de hacer una redireccion programada)
function NuevoProducto({history}) {


    const { agregarProducto } = useContext(ProductosContext);

    //se crea un state para poder tener un objeto producto a guardar
    const [producto , guardarProducto] =  useState({
        nombre : '',
        precio : 0
    });

    const {nombre, precio} = producto;
    
    //se actualiza el state (producto) con una copia de sus atributos y agregando el nuevo modificado
    //ejemplo: producto inicial  nombre = "", precio = 0
    //         producto editado trae unicamente precio = 10
    //         entonces la copia es nombre = "" (no cambia) y precio = 10 (sustituye a precio = 0)
    //referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const actualizarState = e => {
        guardarProducto({
            ... producto,
            [e.target.name]: e.target.value
        })
    }

    //funcion para el manejo del evento submit del formulario
    const submitNuevoProducto = e => {
        //se previene el evento por defecto que haria recargar la pagina y enviar una peticion post
        e.preventDefault();

        // validar formulario
        if(nombre.trim() === '' || precio <= 0) {

            alert("Hello! I am an alert box!!");

            return;
        }



        // crear el nuevo producto
        agregarProducto(producto);

        // redireccionar
        history.push('/');
    }

    return (
<div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                      

                        <form
                         onSubmit={submitNuevoProducto}
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
                            >Agregar</button>
                        </form>

                      </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
